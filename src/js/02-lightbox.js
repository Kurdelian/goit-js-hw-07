import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
const itemMarkup = createGalleryItem(galleryItems);

gallery.insertAdjacentHTML('beforeend', itemMarkup);
// gallery.addEventListener('click', onItemClick);

function createGalleryItem(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
        <img 
        class="gallery__image" 
        src="${preview}"
        alt="${description}"/>
      </a>`;
    }).join('');    
}

let lightbox = new SimpleLightbox('.gallery a', {captionsData: `alt`, captionDelay: `250`});
