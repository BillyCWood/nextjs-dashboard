import type { NextAuthConfig } from 'next-auth';
 
export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
        // !! is type conversion--auth?.user is converted to a boolean value
        // line below is just asking if the user is logged in (thank goodness for informative variable names lol)
        const isLoggedIn = !!auth?.user;
        const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
        if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
        } else if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl));
        }
        return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;