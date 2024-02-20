import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const input = document.querySelector('#data-search');
const button = document.querySelector('[data-start]');
const galleryElement = document.querySelector('.gallery');

const KEY = '42468615-7a21ca39eb8f796f5c09d98b3';
const BASE_URL = 'https://pixabay.com/api/';
const QUERY = '';
const IMAGE_TYPE = 'photo';
const ORIENTATION = 'horizontal';
const SAFESEARCH = true;

const LINK = `${BASE_URL}?key=${KEY}&q=${QUERY}&image_type=${IMAGE_TYPE}&orientation=${ORIENTATION}&safesearch=${SAFESEARCH}`;

galleryElement.innerHTML = '';

fetch(LINK)
  .then(response => {
    if (!response.ok) {
      throw new Error('Image error!');
    }
    return response.json();
  })
  .then(data => {
    const images = data.hits.slice(0, 9);

    galleryElement.innerHTML = images
      .map(({ webformatURL }) => {
        return `<img src="${webformatURL}" width="360" height="300">`;
      })
      .join('');
  })
  .catch(error => {
    iziToast.error({
      title: 'Error',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
    });
  });

input.addEventListener('input', event => {
  event.target.value.trim();
});

button.addEventListener('click', event => {
  event.preventDefault();
  
});


