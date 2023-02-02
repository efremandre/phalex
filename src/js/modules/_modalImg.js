'use strict';
export function modalImg() {
	const body = document.querySelector('body');
	const wrapper = document.querySelector('.wrapper');
	const modalGallery = document.querySelector('[data-modal]');
	const modal = document.querySelector('[data-modal-image]');
	const images = document.querySelectorAll('[data-images]');
	const modalImg = document.querySelector('[data-image]');
	const close = document.querySelector('[data-modal-image-close]');
	const scrollWidth = window.innerWidth - wrapper.offsetWidth;

	if (images) {
		images.forEach(el => {
			el.addEventListener('click', (event)=> {
				const targetImage = event.target;
				if(targetImage) {
					modal.style.display = "block";
					modalImg.src = targetImage.src;
					if (!modalGallery.classList.contains('_modal-visible')) {
						body.classList.add('stop-scroll');
						body.style.paddingRight = `${scrollWidth}px`;
					}
				}
			})
		})
		close.addEventListener('click', ()=>{
			modal.style.display = "none";
			if (!modalGallery.classList.contains('_modal-visible')) {
				body.classList.remove('stop-scroll');
				body.style.paddingRight = `0px`;
			}
		})
	}
}