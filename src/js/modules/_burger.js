'use strict';
export function burger() {
	const burger = document?.querySelector('[data-burger]');
	const nav = document?.querySelector('[data-nav]');
	const navItems = nav?.querySelectorAll('.nav__link');
	const body = document.body;
	// const header = document?.querySelector('.header');
	const pressUp = document?.querySelector('.button-up');
	const height = document.documentElement.clientHeight;
	// const headerHeight = header.offsetHeight;
	// document.querySelector(':root').style.setProperty('--header-height', `${headerHeight}px`);

	burger?.addEventListener('click', () => {
		body.classList.toggle('stop-scroll');
		burger?.classList.toggle('_active');
		nav?.classList.toggle('_nav-active');
		if (pageYOffset > height) pressUp?.classList.toggle('_active-button-up');
	});

	navItems?.forEach(el => {
		el.addEventListener('click', () => {
			body.classList.remove('stop-scroll');
			burger?.classList.remove('_active');
			nav?.classList.remove('_nav-active');
			pressUp?.classList.toggle('_active-button-up');
		});
	});
}