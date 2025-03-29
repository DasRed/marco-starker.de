import type {Metadata} from 'next';
import React from 'react';
import Layout from '../../component/Layout';
import MS from '../../index';
import __t from '../../translation';

export async function generateMetadata({params}: MS.PageParameter): Promise<Metadata> {
    const {language} = await params;
    return {
        title:       __t(language, 'name.full'),
        description: __t(language, 'meta.description'),
        authors:     {name: __t(language, 'name.full')},
        creator:     __t(language, 'name.full'),
        publisher:   __t(language, 'name.full'),
    };
}

export default async function RootLayout({children, params}: MS.ChildPageParameter) {
    const {language} = await params;
    return (
        <Layout language={language}>
            {children}
        </Layout>
    );
}
