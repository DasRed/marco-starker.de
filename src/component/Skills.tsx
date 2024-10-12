import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, {useRef} from 'react';
import MS from '../index';
import __t from '../translation';

type SkillsProps = MS.ComponentParameter & {
    children: React.ReactNode;
};

export default function Skills({language, children}: SkillsProps) {
    const container = useRef(null);

    useGSAP(() => {
        const element = container.current as HTMLElement | null;
        if (element === null) {
            return;
        }

        gsap.registerPlugin(ScrollTrigger);
        element.style.visibility = 'initial';

        gsap.from('.developer-row', {
            opacity:       0,
            scale:         0,
            duration:      1.5,
            scrollTrigger: {
                trigger: '.developer-row',
            },
        });

        gsap.from('.architecture-row', {
            opacity:       0,
            scale:         0,
            duration:      1.5,
            scrollTrigger: {
                trigger: '.developer-row',
                start:   'top 60%',
                end:     'top 20%',
            },
        });
    }, {scope: container});

    return (
        <div ref={container} style={{visibility: 'hidden'}}>
            <span className="section-title-overlay-text">{__t(language, 'skill.overlay')}</span>
            {children}
        </div>
    );
}
