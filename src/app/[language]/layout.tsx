import type {Metadata} from 'next';
import {Poppins} from 'next/font/google';
import React from 'react';
import '../../style/index.scss';
import Layout from '../../component/Layout';
import MS from '../../index';
import __t from '../../translation';

const poppins = Poppins({
    subsets:  ['latin'],
    style:    ['normal', 'italic'],
    variable: '--font-main',
    weight:   ['400', '500', '600', '700', '800', '900']
});

export async function generateMetadata({params: {language}}: MS.PageParameter): Promise<Metadata> {
    return {
        title:       __t(language, 'name.full'),
        description: __t(language, 'meta.description'),
        authors:     {name: __t(language, 'name.full')},
        creator:     __t(language, 'name.full'),
        publisher:   __t(language, 'name.full'),
        icons:       {
            shortcut: [{url: '/favicon.ico', type: 'image/x-icon'}],
        },
    };
}

export default function RootLayout({children, params: {language}}: MS.ChildPageParameter) {
    return (
        <html className={poppins.variable}>
        <body className={`${poppins.variable} antialiased`}>
        <Layout language={language}>
            {children}
        </Layout>
        </body>
        </html>
    );
}
