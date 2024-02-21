export function createMarkup(data) {
    const images = data.hits.slice(0, 9);
  
    gallery.innerHTML = images
      .map(({ webformatURL }) => {
        return `<li>
                <img src="${webformatURL}">
                </li>`;
      })
      .join('');
  }
  