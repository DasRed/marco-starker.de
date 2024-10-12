import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Link from 'next/link';
import React, {useRef} from 'react';
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
    const container = useRef(null);

    useGSAP(() => {
        const element = container.current as HTMLElement | null;
        if (element === null || element.querySelector('.section-title-overlay-text') === null) {
            return;
        }

        gsap.registerPlugin(ScrollTrigger);

        const elementOverlay = element.querySelector('.section-title-overlay-text');
        if (elementOverlay !== null) {
            gsap.fromTo(elementOverlay, {y: '50%'}, {
                y:             '-50%',
                scrollTrigger: {
                    trigger: element,
                    start:   'top bottom',
                    end:     'bottom top',
                    scrub:   true,
                },
            });
        }

        const elementTitle = element.querySelector('.section-title');
        if (elementTitle !== null) {
            gsap.to(elementTitle, {
                '--height':    '100%',
                delay:         0.5,
                scrollTrigger: {
                    trigger: elementTitle,
                    start:   'top 80%',
                },
            });

            gsap.from(elementTitle, {
                opacity:       0,
                scale:         0,
                scrollTrigger: {
                    trigger: elementTitle,
                },
            });
        }
    }, {scope: container});

    return (
        <section id={id} ref={container} className={`section position-relative ${id}`}>
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