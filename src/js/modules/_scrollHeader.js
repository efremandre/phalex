'use strict';
export function scrollHeader() {
	const header = document.querySelector('[data-header]');

	let prevScrollpos = window.pageYOffset;
	window.addEventListener('scroll', () => {
		const currentScrollPos = window.pageYOffset;
		(prevScrollpos > currentScrollPos) ?
			header.style.transform = "translateY(0)" :
			header.style.transform = "translateY(-90%)";
		prevScrollpos = currentScrollPos;
	})
}