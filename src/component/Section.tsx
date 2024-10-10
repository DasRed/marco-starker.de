import Link from 'next/link';
import React from 'react';
import MS from '../index';
import __t from '../translation';
import Conditional from './Conditional';

type SectionProps = {
    id: string;
    index: number;
    count: number;
    next?: string;
    children: React.ReactNode;
} & MS.ComponentParameter;

export default function Section({id, index, count, next, language, children}: SectionProps) {
    return (
        <section id={id} className={`section position-relative ${id}`}>
            {children}

            <Conditional when={!!next}>
                <div className="col-12">
                    <Link href={`#${next}`} className="d-flex gap-4 align-items-center next-chapter mt-5">
                        <span className="page">{String(index).padStart(2, '0')}/{String(count).padStart(2, '0')}</span>
                        <span className="next">{__t(language, 'nextChapter')}</span>
                        <span className="icon"><i className="ph ph-arrow-elbow-right-down"></i></span>
                    </Link>
                </div>
            </Conditional>
            <Conditional when={!next}>
                <div className="col mt-5 pt-5 next-chapter">
                    <span className="page">{String(index).padStart(2, '0')}/{String(count).padStart(2, '0')}</span>
                </div>
            </Conditional>
        </section>
    );
}