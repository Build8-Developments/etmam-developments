import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, isValidLocale } from "@/i18n/config";

/**
 * Middleware for locale-based routing
 *
 * Handles:
 * 1. Redirect root `/` to `/{defaultLocale}`
 * 2. Validate locale in URL path
 * 3. Redirect invalid locales to default
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip middleware for static files, API routes, and Next.js internals
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/images") ||
    pathname.startsWith("/fonts") ||
    pathname.includes(".") // Static files like .ico, .png, .js, .css
  ) {
    return NextResponse.next();
  }

  // Get the first path segment
  const pathSegments = pathname.split("/").filter(Boolean);
  const firstSegment = pathSegments[0];

  // If root path, redirect to default locale
  if (pathname === "/") {
    const url = request.nextUrl.clone();
    url.pathname = `/${defaultLocale}`;
    return NextResponse.redirect(url);
  }

  // If first segment is not a valid locale, redirect to default locale + path
  if (!firstSegment || !isValidLocale(firstSegment)) {
    const url = request.nextUrl.clone();
    url.pathname = `/${defaultLocale}${pathname}`;
    return NextResponse.redirect(url);
  }

  // Valid locale in URL, continue
  return NextResponse.next();
}

export const config = {
  // Match all paths except static files
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - robots.txt, sitemap.xml
     * - public folder files
     */
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|site.webmanifest|manifest.json|.*\\..*).*)",
  ],
};
