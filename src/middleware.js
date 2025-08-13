import { NextResponse } from 'next/server';

export function middleware(request) {
  const token = request.cookies.get('token')?.value;

  if (!token || token == undefined ) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
    matcher: [
    "/((?!api|login|_next/static|_next/image|favicon.ico|images|manifest.webmanifest|sitemap.xml|sitemap.js|robots.js|robots.txt).*)",
  ],
};
