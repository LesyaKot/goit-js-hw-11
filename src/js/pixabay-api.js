export function getImagesFromPixabay(query) {
  const KEY = '42468615-7a21ca39eb8f796f5c09d98b3';
  const BASE_URL = 'https://pixabay.com/api/';
  const IMAGE_TYPE = 'photo';
  const ORIENTATION = 'horizontal';
  const SAFESEARCH = true;

  const LINK = `${BASE_URL}?key=${KEY}&q=${query}&image_type=${IMAGE_TYPE}&orientation=${ORIENTATION}&safesearch=${SAFESEARCH}`;

  return fetch(LINK).then(response => {
    if (!response.ok) {
      throw new Error('Image error!');
    }
    return response.json();
  });
}
