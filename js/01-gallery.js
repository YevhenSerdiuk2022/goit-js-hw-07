import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createPictureCardMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup)

galleryContainer.addEventListener('click', onGalleryContainerClick);


function createPictureCardMarkup (gallerys) {
    return galleryItems.map(({description, original, preview

}) => {
        return `
        <div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}">
      </a>
    </div>
    `;
    }).join('');
    
}

function onGalleryContainerClick (evt) {
    evt.preventDefault();
    const isCardEl = evt.target.classList.contains('gallery__image');
    if (!isCardEl) {
        return;
    }

    const selectedTmage = evt.target.dataset.source;

    modalWindowlGallery(selectedTmage);
    
} 

function modalWindowlGallery(select) {
     const instance = basicLightbox.create(`
    <img src="${select}" width="800" height="600">
`)
    instance.show();

    galleryContainer.addEventListener('keydown', evt => {
		if (evt.key === 'Escape') {
      instance.close();
      galleryContainer.removeEventListener('keydown', evt);
		}
	})
}

