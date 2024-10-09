import Swiper from 'swiper';
import {Autoplay, Pagination} from 'swiper/modules';

export default () => new Swiper(".service-swiper", {
    slidesPerView: 1,
    spaceBetween:  24,
    loop:          true,
    autoplay:      {
        delay: 5000,
    },
    pagination:    {
        el:        ".swiper-pagination",
        clickable: true,
    },
    modules:       [Pagination, Autoplay],
    breakpoints:   {
        768:  {
            slidesPerView: 2,
            spaceBetween:  24,
        },
        1550: {
            slidesPerView: 2.5,
            spaceBetween:  24,
        },
    },
});