'use strict';
export function pressUp() {
	const button = document.querySelector('.button-up');
	const height = document.documentElement.clientHeight;

	if (button) {
		button.addEventListener('click', () => {
			window.scrollTo(pageXOffset, 0);
		})

		window.addEventListener('scroll', () => {
			(pageYOffset < height) ?
				button.classList.remove('_active-button-up') :
				button.classList.add('_active-button-up');
		});
	}
}