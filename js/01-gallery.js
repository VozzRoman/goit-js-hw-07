import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
function createMarkUpImage(galleryItems) {
	return galleryItems.map(image => {
		return `
		<div class="gallery__item">
  <a class="gallery__link" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>
</div>
		`;
	}).join(' ');
}
console.log(createMarkUpImage(galleryItems));

const galleryContainer = document.querySelector('.gallery');
console.log(galleryContainer);
//ссылка на элемент
const createElementImage = createMarkUpImage(galleryItems);
console.log(createElementImage);

galleryContainer.innerHTML = createElementImage;


galleryContainer.addEventListener('click',onClickImage);

function onClickImage(e) {
	e.preventDefault();
	const bigPicture = e.target.dataset.source;
	console.log(bigPicture);
	const instance = basicLightbox.create(`
    <img src="${bigPicture}" width="800" height="600">
`)

	instance.show()
}

