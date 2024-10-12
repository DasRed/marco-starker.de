import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, {useRef} from 'react';
import {Autoplay, Pagination} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import MS from '../index';
import __t from '../translation';

type ServiceProps = MS.ComponentParameter & {
    children: React.ReactNode;
};

export default function Service({language, children}: ServiceProps) {
    const container = useRef(null);

    useGSAP(() => {
        const element = container.current as HTMLElement | null;
        if (element === null) {
            return;
        }

        gsap.registerPlugin(ScrollTrigger);
        element.style.visibility = 'initial';
        gsap.from('.service-card', {
            y:             500,
            stagger:       0.2,
            scale:         0,
            duration:      1.5,
            scrollTrigger: {
                trigger: element,
                start:   'top 60%',
                end:     'top 20%',
            },
        });
    }, {scope: container});

    return (
        <>
            <span className="section-title-overlay-text">{__t(language, 'service.overlay')}</span>
            <div className="section-title text-capitalize">
                <h4>{__t(language, 'service.title1')}</h4>
                <h2>{__t(language, 'service.title2')}</h2>
            </div>
            <div ref={container} className="swiper service-swiper" style={{visibility: 'hidden'}}>
                <div className="swiper-wrapper">
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        slidesPerView={1}
                        spaceBetween={24}
                        loop={true}
                        autoplay={{delay: 5000}}
                        pagination={{
                            el:        '.swiper-pagination',
                            clickable: true,
                        }}
                        breakpoints={{
                            768:  {
                                slidesPerView: 2,
                                spaceBetween:  24,
                            },
                            1550: {
                                slidesPerView: 2.5,
                                spaceBetween:  24,
                            },
                        }}
                    >
                        {React.Children.map(children, (child) => (
                            <SwiperSlide className="swiper-slide overflow-visible p-3">
                                {child}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="swiper-pagination"></div>
            </div>
        </>
    );
}
