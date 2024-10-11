import React from 'react';
import {Autoplay, Pagination} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
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
