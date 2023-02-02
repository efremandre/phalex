'use strict';
import Swiper, {Navigation, Pagination, Autoplay, Lazy, FreeMode, Keyboard, Thumbs, Mousewheel} from 'swiper';
export function initSlider() {
	// Swiper.use([Navigation, Pagination, Autoplay, Lazy, FreeMode]);
	const port = new Swiper('.portfolio__slider-container', {
		modules:[Navigation, Pagination, Autoplay, Lazy, FreeMode, Keyboard],
		loop: true,
		speed: 1000,
		spaceBetween: 30,
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
	});

	const swiper = new Swiper('.modal-slider-container-mini', {
		modules:[Navigation, Pagination, Autoplay, Lazy, FreeMode, Keyboard, Mousewheel],
		loop: true,
		mousewheel: true,
		spaceBetween: 10,
		speed: 1000,
		freeMode: true,
		watchSlidesProgress: true,
		lazy: true,
		breakpoints: {
			320: {
				slidesPerView: 3,
			},
			569: {
				slidesPerView: 6,
			},
		},
	});

	const swiper2 = new Swiper('.modal-slider-container', {
		modules:[Navigation, Pagination, Autoplay, Lazy, FreeMode, Keyboard, Thumbs, Mousewheel],
		loop: true,
		mousewheel: true,
		spaceBetween: 10,
		speed: 1000,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		thumbs: {
			swiper: swiper,
		},
		lazy: true
	})
}