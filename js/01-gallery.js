import { galleryItems } from "./gallery-items.js";

// Change code below this line

const galleryEl = document.querySelector(".gallery");

const markUp = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
  )
  .join("");

galleryEl.insertAdjacentHTML("afterbegin", markUp);

galleryEl.addEventListener("click", (event) => {
    console.log(event.target)
    event.preventDefault()
    basicLightbox.create(`
		<img width="100%" height="100%" class="gallery__image__box" src="${event.target.dataset.source}">
	`).show()
})







