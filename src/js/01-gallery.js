import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
const itemMarkup = createGalleryItem(galleryItems);

gallery.insertAdjacentHTML('beforeend', itemMarkup);
gallery.addEventListener('click', onItemClick);


function createGalleryItem(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
        </a>
        </div>`;
    }).join('');    
}

function onItemClick(event) {
    event.preventDefault();
    
    if (event.target.nodeName !== 'IMG') {
        return;
    }
    const imageLink = event.target.dataset.source;
    const imageAlt = event.target.dataset.alt;
    const instance = basicLightbox.create(`<img src="${imageLink}" alt= "${imageAlt}" width="800" height="600">`)
    instance.show()

    instance.show();

    gallery.addEventListener('keydown', escapeClick);

    function escapeClick(event) {
        if (event.key === 'Escape') {
            instance.close();
            gallery.removeEventListener('keydown', escapeClick);            
        }
    }
}