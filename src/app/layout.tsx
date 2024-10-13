import type {Metadata} from 'next';
import {Poppins} from 'next/font/google';
import React from 'react';
import '../style/index.scss';
import config from '../config';

const poppins = Poppins({
    subsets:  ['latin'],
    style:    ['normal', 'italic'],
    variable: '--font-main',
    weight:   ['400', '500', '600', '700', '800', '900']
});

export async function generateMetadata(): Promise<Metadata> {
    return {
        icons: {
            shortcut: [{url: '/favicon.ico', type: 'image/x-icon'}],
        },
    };
}

export default function RootLayout({children}: { children: React.ReactNode; }) {
    return (
        <html className={poppins.variable}>
        <head>
            {config.analytics.enabled ? <script defer src={config.analytics.url} data-website-id={config.analytics.id}></script>: <></>}
        </head>
        <body className={`${poppins.variable} antialiased`}>
        {children}
        </body>
        </html>
    );
}
