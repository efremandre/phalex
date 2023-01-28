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
		lazy: {
			loadPrevNext: true,
			loadPrevNextAmount: 2,
		},
		autoplay: {
			delay: 6000,
		},
		keyboard: {
			enabled: true,
		},
		breakpoints: {
			569: {
				slidesPerView: 3,
				slidesPerGroup: 3,
				spaceBetween: 20,
			},
		},
		speed: 1000,
		loop: true,
		spaceBetween: 30,
	});
}