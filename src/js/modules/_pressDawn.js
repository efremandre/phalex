'use strict';
export function pressDawn() {
	const button = document.querySelector('.button-dawn');
	const fullscreen = document.querySelector('.fullscreen');
	const height = fullscreen.offsetHeight;

	const getDawn = () => {
		window.scrollTo(pageXOffset, height);
	}

	button.addEventListener('click', getDawn);
}