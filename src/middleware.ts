import parser from 'accept-language-parser';
import {MiddlewareConfig, NextRequest, NextResponse} from 'next/server';
import configApp from './config';

export const config: MiddlewareConfig = {
    matcher: [
        '/((?!_next).*)',
    ],
};

export function middleware(request: NextRequest): NextResponse {
    const {pathname}        = request.nextUrl;
    const pathnameHasLocale = configApp.language.available.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`);

    if (pathnameHasLocale) {
        return NextResponse.next();
    }

    const languages          = parser.parse(request.headers.get('accept-language') ?? undefined);
    request.nextUrl.pathname = `/${languages.shift()?.code ?? configApp.language.default}${pathname}`

    return NextResponse.redirect(request.nextUrl)
}
