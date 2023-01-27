'use strict';
export function modalImage() {
	const modal = document.querySelector('[data-modal]');
	const modalImg = document.querySelector('[data-modal-img]');
	// const captionText = document.querySelector('[data-modal-caption]');
	const img = document.querySelectorAll('[data-src]');

	img.forEach((el) => {
		el.addEventListener('click', (event) => {
			modalImg.src = event.target.src;
			console.log(event.target.alt)
		})
	})
	// let modalImg = document.getElementById("img01");
	// let captionText = document.getElementById("caption");
	// img.addEventListener('click', () => {
	// 	modal.style.display = "block";
	// 	modalImg.src = this.src;
	// 	captionText.innerHTML = this.alt;
	// })


// Получить элемент <span>, который закрывает модальный
// 	let span = document.getElementsByClassName("close")[0];
//
// // Когда пользователь нажимает на <span> (x), закройте модальное окно
// 	span.onclick = function() {
// 		modal.style.display = "none";
// 	}
}