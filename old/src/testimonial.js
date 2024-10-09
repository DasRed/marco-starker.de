import Swiper from 'swiper';
import {Autoplay, Navigation, Scrollbar} from 'swiper/modules';

export default () => new Swiper(".testimonial-swiper", {
    slidesPerView: 1,
    spaceBetween:  24,
    loop:          true,
    autoplay:      {
        delay: 5000,
    },
    scrollbar:     {
        el:        ".s-scrollbar",
        clickable: true,
        dragSize:  "auto",
    },
    navigation:    {
        nextEl: ".testi-next",
        prevEl: ".testi-prev",
    },
    modules:       [Navigation, Autoplay, Scrollbar],
    breakpoints:   {
        1024: {
            slidesPerView: 1.4,
            spaceBetween:  24,
        },
    },
});
