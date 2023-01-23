'use strict';
export function _pressUp() {
	const button = document.querySelector('.button-up');
	const height = document.documentElement.clientHeight;

	button.addEventListener('click', () => {
		window.scrollTo(pageXOffset, 0);
	})

	window.addEventListener('scroll', () => {
		(pageYOffset < height) ?
			button.classList.add('_hidden-button') :
			button.classList.remove('_hidden-button');
	});
}