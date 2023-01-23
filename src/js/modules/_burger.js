'use strict'

export function _burger() {
	const burger = document?.querySelector('[data-burger]');
	const nav = document?.querySelector('[data-nav]');
	const navItems = nav?.querySelectorAll('.nav__link');
	const body = document.body;
	const header = document?.querySelector('.header');
	const pressUp = document?.querySelector('.button-up');
	const headerHeight = header.offsetHeight;
	document.querySelector(':root').style.setProperty('--header-height', `${headerHeight}px`);

	burger?.addEventListener('click', () => {
		body.classList.toggle('stop-scroll');
		burger?.classList.toggle('_active');
		nav?.classList.toggle('_active');
		pressUp?.classList.toggle('_hidden-button');
	});

	navItems.forEach(el => {
		el.addEventListener('click', () => {
			body.classList.remove('stop-scroll');
			burger?.classList.remove('_active');
			nav?.classList.remove('_active');
			pressUp?.classList.remove('_hidden-button');
		});
	});
}