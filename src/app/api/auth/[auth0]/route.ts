import { handleAuth } from '@auth0/nextjs-auth0';

console.log('AUTH0_SECRET is defined:', !!process.env.AUTH0_SECRET);

export const GET = handleAuth();
