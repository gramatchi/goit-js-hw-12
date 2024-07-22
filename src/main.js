import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchImages } from './js/pixabay-api';
import { imageTemplate } from './js/render-functions';

const form = document.querySelector('#search-form');
const inputRef = document.querySelector('.js-search-input');
const galleryRef = document.querySelector('.gallery');
const loader = document.querySelector('#loader');
const loadMoreBtn = document.querySelector('#load-more');

let currentPage = 1;
let currentQuery = '';
let totalHits = 0;

form.addEventListener('submit', event => {
  event.preventDefault(); 

  currentQuery = inputRef.value.trim();

  if (currentQuery !== '') {
    currentPage = 1;
    totalHits = 0;
    galleryRef.innerHTML = ''; 
    loadMoreBtn.style.display = 'none'; 
    onClickSearch(currentQuery, currentPage);
  } else {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search query!',
    });
  }
});

loadMoreBtn.addEventListener('click', () => {
  currentPage += 1;
  onClickSearch(currentQuery, currentPage);
});

async function onClickSearch(query, page) {
  loader.style.display = 'block';
  try {
    const data = await fetchImages(query, page);
    if (page === 1) {
      totalHits = data.totalHits;
    }
    if (data.hits.length === 0 && page === 1) {
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
    } else {
      data.hits.forEach(image => {
        const imageMarkup = imageTemplate(image);
        galleryRef.insertAdjacentHTML('beforeend', imageMarkup);
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

      if (galleryRef.childElementCount < totalHits) {
        loadMoreBtn.style.display = 'block'; 
      } else {
        loadMoreBtn.style.display = 'none'; 
        iziToast.info({
          title: 'Info',
          message: "We're sorry, but you've reached the end of search results.",
        });
      }

      const { height: cardHeight } = document
        .querySelector('.gallery')
        .firstElementChild.getBoundingClientRect();
      window.scrollBy({
        top: cardHeight * 2,
        behavior: 'smooth',
      });
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: `An error occurred: ${error.message}`,
    });
    console.log(error);
  } finally {
    loader.style.display = 'none'; 
  }
}
