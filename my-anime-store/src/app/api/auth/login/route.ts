import { connectToDatabase } from '@/lib/dbConnect';
import { sendResponse } from '@/lib/apiResponse';
import { loginSchema } from '@/lib/validationSchemas';
import { formatZodErrors } from '@/lib/formatZodErrors';
import { comparePassword } from '@/lib/authUtils';
import { generateToken } from '@/lib/jwtUtils';




export async function POST(request: Request) {
    try {
        const { db } = await connectToDatabase();
        const requestBody = await request.json();

        // Validate the request body
        const validationResult = loginSchema.safeParse(requestBody);
        if (!validationResult.success) {
            const formattedErrors = formatZodErrors(validationResult.error.errors);
            return sendResponse(400, false, 'Validation failed', null, {
                code: 400,
                details: formattedErrors,
            });
        }

        const { email, password } = validationResult.data;

        // Find the user by email
        const user = await db.collection('users').findOne({ email });
        if (!user) {
            return sendResponse(404, false, 'User not found', null, {
                code: 404,
                details: 'User with this email does not exist',
            });
        }

        // Compare the password
        const isPasswordValid = await comparePassword(password, user.password);
        if (!isPasswordValid) {
            return sendResponse(401, false, 'Invalid credentials', null, {
                code: 401,
                details: 'Invalid email or password',
            });
        }

        // Generate a JWT token
        const token = generateToken({ userId: user._id.toString() });

        return sendResponse(200, true, 'Login successful', { token });
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Failed to login user';
        return sendResponse(500, false, errorMessage, null, {
            code: 500,
            details: errorMessage,
        });
    }
}
