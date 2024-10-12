import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, {useRef} from 'react';
import config from '../config';
import MS from '../index';
import __t from '../translation';
import DOMTarget = gsap.DOMTarget;

type ExperienceProps = MS.ComponentParameter & {
    children: React.ReactNode;
};

export default function Experience({language, children}: ExperienceProps) {
    const container = useRef(null);

    useGSAP(() => {
        const element = container.current as HTMLElement | null;
        if (element === null) {
            return;
        }

        gsap.registerPlugin(ScrollTrigger);
        element.style.visibility = 'initial';
        gsap.from('.experience-item', {
            opacity:       0,
            duration:      1,
            stagger:       0.5,
            scale:         0,
            scrollTrigger: {
                trigger: '.experience-item',
            },
        });

        gsap.utils.toArray('.experience-item').forEach((item) => gsap.to(item as object, {
            '--item-height': '100%',
            stagger:         0.5,
            delay:           0.5,
            scrollTrigger:   {
                trigger: item as DOMTarget,
                start:   'top 80%',
                end:     'top 20%',
            },
        }));

        gsap.to(element, {
            duration:      2,
            ease:          'back',
            delay:         0.5,
            '--height':    '100%',
            scrollTrigger: {
                trigger: element,
            },
        });

        gsap.from('.more-info', {
            scale:         0,
            duration:      1.2,
            ease:          'elastic',
            delay:         0.5,
            scrollTrigger: {
                trigger: '.more-info',
            },
        });
    }, {scope: container});

    return (
        <>
            <span className="section-title-overlay-text">{__t(language, 'experience.overlay')}</span>
            <div className="section-title text-capitalize">
                <h4>{__t(language, 'experience.title1')}</h4>
                <h2>{__t(language, 'experience.title2')}</h2>
            </div>
            <div className="row">
                <div ref={container} className="col-lg-10 col-xl-8" style={{visibility: 'hidden'}}>
                    <div className="experience-wrapper d-flex flex-column">
                        {children}
                    </div>

                    <div className="more-info d-flex flex-wrap align-items-center gap-5 gap-md-3" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)'}}>
                        <p>{__t(language, 'experience.downloadCV')}</p>
                        <span className="line"></span>
                        <a href={config.resume[language]} className="download-cv position-relative" download={__t(language, 'resume.fileName')}>
                            <div className="waves-top-md">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <span className="icon"><i className="ph ph-download-simple"></i></span>
                            <div className="waves-bottom-md">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
