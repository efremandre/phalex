'use strict';
export function scrollHeader() {
	const header = document.querySelector('[data-header]');

	let prevScrollpos = window.pageYOffset;
	window.addEventListener('scroll', () => {
		const currentScrollPos = window.pageYOffset;
		(prevScrollpos > currentScrollPos) ?
			header.classList.remove('_hidden') :
			header.classList.add('_hidden');
		prevScrollpos = currentScrollPos;
	})
}