'use strict';
export function scrollHeader() {
	let lastScroll = 0;
	const header = document.querySelector('[data-header]');

	const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
	const containHide = () => header.classList.contains('_hidden');
	window.addEventListener('scroll', () => {
		if (scrollPosition() > lastScroll && !containHide()) {
			header.classList.add('_hidden');
		} else if (scrollPosition() < lastScroll && containHide()) {
			header.classList.remove('_hidden');
		}

		lastScroll = scrollPosition();
	})
}