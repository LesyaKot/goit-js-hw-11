export function createMarkup(images) {

    const gallery = document.querySelector('.gallery');
    
    gallery.innerHTML = images
    .map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => 
    `<li class="gallery-item">
      <a href="${largeImageURL}" class="gallery-link" data-lightbox="gallery">
        <img class="gallery-image"
         src="${webformatURL}"
         alt="${tags}"/>
         <div class="gallery-text">
        <p>Likes: ${likes}</p>
        <p>Views: ${views}</p>
        <p>Comments: ${comments}</p>
        <p>Downloads: ${downloads}</p>
        </div>
      </a>
    </li>`
    )
      .join('');

      if (window.simpleLightbox) {
        window.simpleLightbox.refresh();
      }

        }
 
