import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { cookies } from "next/headers";

const protectedPaths = ['/', '/students', '/payments'];

export async function middleware(request) {
const cookie = cookies();
  const token = await cookieStore.get({ req: request });
  const { pathname } = request.nextUrl;

  const isProtected = protectedPaths.some(
    (path) => pathname === path || pathname.startsWith(`${path}/`)
  );

  if (isProtected && !token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/students/:path*', '/payments/:path*'],
};
