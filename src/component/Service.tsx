import React from 'react';
import MS from '../index';
import __t from '../translation';

type ServiceProps = MS.ComponentParameter & {
    children: React.ReactNode;
};

export default function Service({language, children}: ServiceProps) {
    return (
        <>
            <span className="section-title-overlay-text">{__t(language, 'service.overlay')}</span>
            <div className="section-title text-capitalize">
                <h4>{__t(language, 'service.title1')}</h4>
                <h2>{__t(language, 'service.title2')}</h2>
            </div>
            <div className="swiper service-swiper">
                <div className="swiper-wrapper">
                    {children}
                </div>
                <div className="swiper-pagination"></div>
            </div>
        </>
    );
}
