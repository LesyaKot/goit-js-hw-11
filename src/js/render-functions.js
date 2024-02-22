export function createMarkup(images) {

    const gallery = document.querySelector('.gallery');

    gallery.innerHTML = images

      .map(({ webformatURL }) => `<img src="${webformatURL}" alt="Pixabay Image" />`)
      .join('');
  }


