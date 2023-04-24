import { galleryItems } from "./gallery-items.js";
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

galleryList.insertAdjacentHTML("beforeend", liElements.join(""));

galleryList.addEventListener("click", (event) => {
  event.preventDefault();

  const target = event.target;

  if (target.nodeName !== "IMG") {
    return;
  }

  const originalSrc = target.dataset.source;
  const modal = basicLightbox.create(`
    <div class="modal">
      <img src="" alt="${target.alt}" />
    </div>
  `);

  const imgInModal = modal.element().querySelector("img");
  imgInModal.setAttribute("src", originalSrc);

  modal.show();

  //   Закриття модального вікна після натискання клавіші Escape

  const closeModal = () => {
    modal.close();
    window.removeEventListener("keydown", onEscKeyPress);
  };

  const onEscKeyPress = (event) => {
    if (event.code === "Escape") {
      closeModal();
    }
  };

  modal.element().addEventListener("click", (event) => {
    if (event.target !== imgInModal) {
      closeModal();
    }
  });

  window.addEventListener("keydown", onEscKeyPress);
});
