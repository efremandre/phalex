import { burger } from './modules/_burger.js';
import { pressUp } from "./modules/_pressUp.js";
import { pressDawn } from "./modules/_pressDawn.js";

import Swiper, {Navigation, Pagination, Autoplay, Lazy, FreeMode} from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, Lazy, FreeMode]);

const swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    spaceBetween: 30,
    autoplay: {
        delay: 4000,
    },
    lazy: true,
    freeMode: true,
    speed: 1000,
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
})

burger();
pressUp();
pressDawn();