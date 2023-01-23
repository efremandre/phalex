'use strict';
export function _pressUp() {
	const button = document.querySelector('.button-up');
	const height = document.documentElement.clientHeight;

	button.addEventListener('click', () => {
		window.scrollTo(pageXOffset, 0);
	})

	window.addEventListener('scroll', () => {
		(pageYOffset < height) ?
			button.classList.remove('_active-button-up') :
			button.classList.add('_active-button-up');
	});
}