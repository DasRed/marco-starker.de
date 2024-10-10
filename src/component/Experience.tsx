import React from 'react';
import config from '../config';
import MS from '../index';
import __t from '../translation';

type ExperienceProps = MS.ComponentParameter & {
    children: React.ReactNode;
};

export default function Experience({language, children}: ExperienceProps) {
    return (
        <>
            <span className="section-title-overlay-text">{__t(language, 'experience.overlay')}</span>
            <div className="section-title text-capitalize">
                <h4>{__t(language, 'experience.title1')}</h4>
                <h2>{__t(language, 'experience.title2')}</h2>
            </div>
            <div className="row">
                <div className="col-lg-10 col-xl-8">
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
