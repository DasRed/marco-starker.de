import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Link from 'next/link'
import {useRef} from 'react';
import config from '../config';
import MS from '../index';
import __t from '../translation';

export default function AboutMe({language}: MS.ComponentParameter) {
    const container = useRef(null);

    useGSAP(() => {
        const element = container.current as HTMLElement|null;
        if (element === null) {
            return;
        }

        gsap.registerPlugin(ScrollTrigger);

        element.style.visibility = 'initial';
        gsap.from('.about-desc', {
            opacity:       0,
            duration:      0.8,
            ease:          'back',
            scrollTrigger: {
                trigger: '.about-desc',
            },
        });
        gsap.from('.experience-card', {
            opacity:       0,
            scale:         0,
            ease:          'elastic',
            duration:      1,
            scrollTrigger: {
                trigger: '.experience-card',
                // scrub: true,
                start: 'top 50%',
            },
        });
    }, {scope: container});

    return (
        <>
            <span className="section-title-overlay-text">{__t(language, 'aboutMe.overlay')}</span>
            <div className="section-title text-capitalize">
                <h4>{__t(language, 'aboutMe.title1')}</h4>
                <h2>{__t(language, 'aboutMe.title2')}</h2>
            </div>
            <div ref={container} className="row mb-4 mb-lg-5 align-items-center" style={{visibility: 'hidden'}}>
                <div className="col-lg-7 col-xl-8 about-desc">
                    <h2>{__t(language, 'aboutMe.headline')}</h2>
                    <p className="desc">{__t(language, 'aboutMe.description')}</p>
                    <div className="row contact">
                        <div className="col-sm-4">
                            <p>{__t(language, 'aboutMe.emailLabel')}</p>
                            <Link href={`mailto:${config.email}`}>{config.email}</Link>
                        </div>
                        <div className="col-sm-4">
                            <p>{__t(language, 'aboutMe.dateOfBirthLabel')}</p>
                            <span>{__t(language, 'aboutMe.dateOfBirth')}</span>
                        </div>
                        <div className="col-sm-4">
                            <p>{__t(language, 'aboutMe.locationLabel')}</p>
                            <span>{__t(language, 'aboutMe.location')}</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 col-xl-4">
                    <div className="experience-card">
                        <div className="card-inner"></div>
                        <div>
                            <div className="numbers">
                                <span className="number-outline-one">{__t(language, 'aboutMe.numberOfYears')}</span>
                                <span className="number-outline-two">{__t(language, 'aboutMe.numberOfYears')}</span>
                                <span className="number-main">{__t(language, 'aboutMe.numberOfYears')}</span>
                            </div>
                            <p>{__t(language, 'aboutMe.numberOfYearsLabel')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
