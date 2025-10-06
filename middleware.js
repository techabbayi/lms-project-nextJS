import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req) {
    const { pathname } = req.nextUrl;

    // Public routes that don't need protection
    const publicPaths = ['/', '/signin', '/signup'];
    const isPublic = publicPaths.some((path) => pathname === path || pathname.startsWith(`${path}/`));

    // Get user session from JWT
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    const userRole = token?.role || token?.user?.role;

    // Redirect logged-in users away from signin/signup
    if (token && pathname.startsWith('/signin')) {
        let redirectPath = userRole === 'admin' ? '/admin_dashboard' : '/student_dashboard';
        const url = req.nextUrl.clone();
        url.pathname = redirectPath;
        return NextResponse.redirect(url);
    }

    // Allow public routes
    if (isPublic) return NextResponse.next();

    // Redirect unauthenticated users
    if (!token) {
        console.log(`[MIDDLEWARE] No token found. Redirecting to /signin from ${pathname}`);
        const url = req.nextUrl.clone();
        url.pathname = '/signin';
        url.searchParams.set('callbackUrl', pathname);
        return NextResponse.redirect(url);
    }

    // Block role mismatches
    if (pathname.startsWith('/admin_dashboard') && userRole !== 'admin') {
        console.log(`[MIDDLEWARE] ${userRole} tried to access admin dashboard`);
        const url = req.nextUrl.clone();
        url.pathname = '/student_dashboard';
        return NextResponse.redirect(url);
    }

    if (pathname.startsWith('/student_dashboard') && userRole !== 'student') {
        console.log(`[MIDDLEWARE] ${userRole} tried to access student dashboard`);
        const url = req.nextUrl.clone();
        url.pathname = '/admin_dashboard';
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

// Routes to protect
export const config = {
    matcher: ['/admin_dashboard/:path*', '/student_dashboard/:path*'],
};
