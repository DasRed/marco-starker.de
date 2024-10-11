import hero from '/public/hero.png';
import Image from 'next/image';
import Link from 'next/link'
import MS from '../index';
import __t from '../translation';
import Typewriter from 'typewriter-effect';

export default function Hero({language}: MS.ComponentParameter) {
    return (
        <div className="row gx-4 align-items-center">
            <div className="col-12 col-md-6 col-xl-7 hero-content">
                <div>
                    <h4 className="text-uppercase freelancer">{__t(language, 'hero.freelancer')}</h4>
                    <h1 className="text-uppercase overflow-hidden developer" id="typewriter">
                        <Typewriter options={{
                            strings: __t(language, 'hero.typewriter').split(',').map((entry) => entry.trim()),
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
