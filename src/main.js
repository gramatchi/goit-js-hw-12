import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchImages } from './js/pixabay-api';
import { imageTemplate } from './js/render-functions';

const form = document.querySelector('#search-form');
const inputRef = document.querySelector('.js-search-input');
const galleryRef = document.querySelector('.gallery');
const loaderRef = document.querySelector('#loader');

form.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const inputValue = inputRef.value.trim();
  if (inputValue !== '') {
    onClickSearch(inputValue);
  } else {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search query!',
    });
  }
});

function onClickSearch(inputValue) {
  galleryRef.innerHTML = ''; 
  loaderRef.style.display = 'block'; 

  fetchImages(inputValue)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          title: 'Error',
          message: 'Sorry, there are no images matching your search query. Please try again!',
        });
      } else {
        data.hits.forEach(image => {
          const markup = imageTemplate(image);
          galleryRef.insertAdjacentHTML('beforeend', markup);
        });
        iziToast.success({
          title: 'Success',
          message: 'Images loaded successfully!',
        });

        const lightbox = new SimpleLightbox('.gallery a', {
          captions: true,
          captionsData: 'alt',
          captionDelay: 250,
        });
        lightbox.refresh();
      }
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: `An error occurred: ${error.message}`,
      });
      console.log(error);
    })
    .finally(() => {
      loaderRef.style.display = 'none';
    });
}