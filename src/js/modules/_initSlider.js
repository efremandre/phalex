'use strict';
import Swiper, {Navigation, Pagination, Autoplay, Lazy, FreeMode, Keyboard} from 'swiper';
export function initSlider() {
	// Swiper.use([Navigation, Pagination, Autoplay, Lazy, FreeMode]);
	const port = new Swiper('.portfolio__slider-container', {
		modules:[Navigation, Pagination, Autoplay, Lazy, FreeMode, Keyboard],
		pagination: {
			el: '.portfolio__pagination',
			clickable: true,
			dynamicBullets: true
		},
		navigation: {
			nextEl: '.portfolio__next',
			prevEl: '.portfolio__prev',
		},
		lazy: true,
		autoplay: {
			delay: 4000,
		},
		keyboard: {
			enabled: true,
		},
		breakpoints: {
			569: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			// 769: {
			// 	slidesPerView: 2,
			// 	spaceBetween: 20,
			// },
			// 1200: {
			// 	slidesPerView: 3,
			// 	spaceBetween: 20,
			// },
		},
		speed: 2000,
		loop: true,
		freeMode: true,
		spaceBetween: 30,
	});
}