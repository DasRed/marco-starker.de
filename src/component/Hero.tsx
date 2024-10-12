import hero from './hero.png';
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link'
import {useRef} from 'react';
import Typewriter from 'typewriter-effect';
import MS from '../index';
import __t from '../translation';

export default function Hero({language}: MS.ComponentParameter) {
    const container = useRef(null);

    useGSAP(() => {
        const element = container.current as HTMLElement | null;
        if (element === null) {
            return;
        }

        element.style.visibility = 'initial';
        gsap.from('.img-wrapper', {duration: 1.5, scale: 1.5, ease: 'back', delay: 0.3, opacity: 0});
        gsap.from('.work-btn', {duration: 1.2, scale: 0, opacity: 0, ease: "bounce"});
        gsap.from('.contact-btn', {duration: 1.2, scale: 0, opacity: 0, ease: "bounce"});
        gsap.from('.freelancer', {duration: 0.8, y: 200, scale: 0});
        gsap.from('.description', {duration: 0.8, y: 200, scale: 0});
    }, {scope: container});

    return (
        <div ref={container} className="row gx-4 align-items-center" style={{visibility: 'hidden'}}>
            <div className="col-12 col-md-6 col-xl-7 hero-content">
                <div>
                    <h4 className="text-uppercase freelancer">{__t(language, 'hero.freelancer')}</h4>
                    <h1 className="text-uppercase overflow-hidden developer" id="typewriter">
                        <Typewriter options={{
                            strings:   __t(language, 'hero.typewriter').split(',').map((entry) => entry.trim()),
                            autoStart: true,
                            loop:      true,
                            delay:     200,
                        }}></Typewriter>
                    </h1>
                    <p className="description">{__t(language, 'hero.description')}</p>
                </div>
                <div className="d-flex gap-4">
                    <Link href="#experience" className="btn work-btn text-capitalize btn-secondary">{__t(language, 'hero.btnExperience')}</Link>
                    <Link href="#contact" className="btn contact-btn text-capitalize btn-outline-secondary">{__t(language, 'hero.btnContact')}</Link>
                </div>
            </div>
            <div className="col-12 col-md-5 offset-md-1 offset-xxl-1 col-xl-4">
                <div className="img-wrapper">
                    <div className="waves-top">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <Image src={hero} className="img-fluid rounded-circle hero-img" alt={__t(language, 'logo')}/>
                    <div className="waves-bottom">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    );
}
