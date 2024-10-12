import type {Metadata} from 'next';
import {Poppins} from 'next/font/google';
import React from 'react';
import '../style/index.scss';

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
        <body className={`${poppins.variable} antialiased`}>
        {children}
        </body>
        </html>
    );
}
