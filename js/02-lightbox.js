import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

const markUp = galleryItems
  .map(
      ({ preview, original, description }) => {
          const galleryItems = document.createElement('li')
          galleryItems.classList.add("gallery__item")
          galleryEl.append(galleryItems)

          const galleryLink = document.createElement('a')
          galleryLink.classList.add("gallery__link")
          galleryLink.href = `${original}`
          galleryItems.append(galleryLink)

          const image = document.createElement('img')
          image.classList.add("gallery__image")
          image.src = `${preview}`
          image.alt = `${description}`
          galleryLink.append(image)
    
      }
  )
  .join("");
  
let gallery = new SimpleLightbox('.gallery a', {
  captionsData: "alt",
  captionDelay: 250});
gallery.on('show.simplelightbox')
