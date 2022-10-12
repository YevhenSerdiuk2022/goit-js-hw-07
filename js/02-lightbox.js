import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createPictureCardMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup)


function createPictureCardMarkup (gallerys) {
    return galleryItems.map(({description, original, preview

}) => {
        return `
       
      <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}">
      </a>
 
    `;
    }).join('');
  
}

new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
	
})

