import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
 
export default NextAuth(authConfig).auth;

/* 
    * protected routes will not even start rendering until the Middleware verifies the authentication, 
    * enhancing both the security and performance of the application.
*/
 
export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  // only runs on specific paths
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};