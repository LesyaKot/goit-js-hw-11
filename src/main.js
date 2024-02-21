import { createMarkup } from './js/render-functions';
import {getImagesFromPixabay} from './js/pixabay-api';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.btn-section');
const input = document.querySelector('#data-search');
const button = document.querySelector('[data-start]');
const galleryElement = document.querySelector('.gallery');

galleryElement.innerHTML = '';

form.addEventListener('submit', event => {
    event.preventDefault();
  
    const inputValue = input.value.trim();
  
    getImagesFromPixabay(inputValue)
      .then(data => {
        createMarkup(data);
      })
      .catch(error => {
        iziToast.error({
          title: 'Error',
          message: 'Sorry, there are no images matching your search query. Please try again!',
        });
      });
  });
  









