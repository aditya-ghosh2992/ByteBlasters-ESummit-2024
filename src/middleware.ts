import { NextResponse , NextRequest } from 'next/server'
export { default } from "next-auth/middleware"
// This is an example of how to read a JSON Web Token from an API route
import { getToken } from "next-auth/jwt"
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  const url = request.nextUrl;
  const isAuthRoute = ['/sign-in', '/sign-up', '/verify'].some(path => url.pathname.startsWith(path));
  const isDashboardRoute = url.pathname.startsWith('/dashboard');

  console.log('Current path:', url.pathname);


  if (token && isAuthRoute) {
      return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  if (!token && isDashboardRoute) {
      return NextResponse.redirect(new URL('/sign-in', request.url));
  }

  // Allow access to all other routes
  return NextResponse.next();
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/sign-in',
    '/sign-up',
    '/dashboard/:path*',
    '/verify/:path*',
  ]
} 