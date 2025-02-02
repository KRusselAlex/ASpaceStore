import jwt from 'jsonwebtoken';

// Ensure JWT_SECRET is defined
const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
    throw new Error('JWT_SECRET is not defined in the environment variables.');
}

const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '1d';

// Generate a JWT token
export function generateToken(payload: object): string {
    // Use a type assertion to tell TypeScript that JWT_SECRET is a string
    return jwt.sign(payload, JWT_SECRET as string, { expiresIn: JWT_EXPIRES_IN });
}

// Verify a JWT token
export function verifyToken(token: string): { userId: string } | null {
    try {
        const decoded = jwt.verify(token, JWT_SECRET as string) as { userId: string };
        return decoded;
    } catch (error) {
        console.log(error);
        return null;
    }
}