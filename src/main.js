import { createMarkup } from './js/render-functions';
import { getImagesFromPixabay } from './js/pixabay-api';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('.btn-section');
const input = document.querySelector('#data-search');
const button = document.querySelector('[data-start]');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

gallery.innerHTML = '';

form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();

  const inputValue = input.value.trim();

  if (!inputValue) {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search term.',
    });
    gallery.innerHTML = ''
    return;
    ;
  }

  gallery.innerHTML = '';

  loader.classList.add('loader-visible');

  getImagesFromPixabay(inputValue)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.info({
          title: 'Info',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      } else {
        createMarkup(data.hits);

        loader.classList.remove('loader-visible');

        lightbox.refresh();
      }
    })
    .catch(error => {
      console.error('Error fetching images:', error);
      iziToast.error({
        title: 'Error',
        message: 'An error occurred while fetching images.',
      });
    })
     loader.classList.remove('loader-visible');

}
