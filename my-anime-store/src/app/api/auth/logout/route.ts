import { sendResponse } from '@/lib/apiResponse';
import { verifyToken } from '@/lib/jwtUtils'; // A function that verifies JWT token


export async function POST(request: Request) {
    try {
        // Get the token from the request (can be from Authorization header or cookies)
        const authHeader = request.headers.get('Authorization');
        if (!authHeader) {
            return sendResponse(400, false, 'Authorization header is missing');
        }

        const token = authHeader.replace('Bearer ', '');

        // Decode and verify the token to check its validity
        const decoded = verifyToken(token);
        if (!decoded) {
            return sendResponse(401, false, 'Invalid token');
        }

        return sendResponse(200, true, 'Logout successful and token invalidated');
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Failed to logout';
        return sendResponse(500, false, errorMessage);
    }
}
