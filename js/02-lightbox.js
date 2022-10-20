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
		`
	}).join(' ');
}

const refsLinkElement = createMarkUpImage(galleryItems);
console.log(refsLinkElement);


