import { galleryItems } from "./gallery-items.js";
// Change code below this line


const galleryList = document.querySelector(".gallery");

const liElements = galleryItems.map(
  (item) => `
  <li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}" />
    </a>
  </li>
`
);

galleryList.insertAdjacentHTML('beforeend', liElements.join(''));

const gallery = new SimpleLightbox('.gallery a', {
    captions: true,
    captionDelay: 250
});


