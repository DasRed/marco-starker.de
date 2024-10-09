import parser from 'accept-language-parser';
import {redirect} from 'next/navigation';
import {NextRequest} from 'next/server';
import config from '../config';

export function GET(request: NextRequest) {
    const languages = parser.parse(request.headers.get('accept-language') ?? undefined);

    redirect(`/${languages.shift()?.code ?? config.language.default}`);
}