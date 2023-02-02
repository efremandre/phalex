'use strict';
export function galleryModal() {
	const body = document.querySelector('body');
	const wrapper = document.querySelector('.wrapper');
	const buttonOpen = document.querySelectorAll('[data-modal-open]');
	const buttonClose = document.querySelectorAll('[data-modal-close]');
	const modal = document.querySelector('[data-modal]');
	const scrollWidth = window.innerWidth - wrapper.offsetWidth;

	buttonOpen.forEach(el => {
		el.addEventListener('click', (event) => {
			let elementEvent = event.target;
			if (elementEvent) {
				modal.classList.add('_modal-visible');
				body.classList.add('stop-scroll');
				body.style.paddingRight = `${scrollWidth}px`;
			}
		})
	})

	buttonClose.forEach(el => {
		el.addEventListener('click', () => {
			modal.classList.remove('_modal-visible');
			body.classList.remove('stop-scroll');
			body.style.paddingRight = `0px`;
		})
	})
}