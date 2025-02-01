import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/lib/jwtUtils';
import { connectToDatabase } from '@/lib/dbConnect';
import { sendResponse } from '@/lib/apiResponse';

const publicRoutes = ['/api/auth/login', '/api/auth/register'];

export async function authMiddleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Allow public routes to pass through
    if (publicRoutes.includes(pathname)) {
        return NextResponse.next();
    }

    // Extract token from the Authorization header
    const authHeader = request.headers.get('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return NextResponse.json(
            { success: false, message: 'Unauthorized: No token provided' },
            { status: 401 }
        );
    }

    const token = authHeader.replace('Bearer ', '');

    try {
        const decoded = verifyToken(token);

        if (!decoded) {
            return NextResponse.json(
                { success: false, message: 'Unauthorized: Invalid token' },
                { status: 401 }
            );
        }

        // Check if the token is blacklisted
        const { db } = await connectToDatabase();
        const blacklistedToken = await db.collection('blacklistedTokens').findOne({ token });

        if (blacklistedToken) {
            return sendResponse(401, false, 'Unauthorized: Token is blacklisted', null, {
                code: 401,
                details: 'Please login again',
            });
        }

        // Attach user data to request headers (for the next middleware)
        request.headers.set('userId', decoded.userId);
        return NextResponse.next();
        
    } catch (error) {

        return sendResponse(401, false, 'Unauthorized: Invalid token', null, {
            code: 401,
            details: error,
        });
        
    }
   
    
}
