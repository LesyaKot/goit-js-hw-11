



const KEY = '42468615-7a21ca39eb8f796f5c09d98b3';
const BASE_URL = 'https://pixabay.com/api/';
const QUERY = 'dogs';
const IMAGE_TYPE = 'photo';
const ORIENTATION = 'horizontal';
const SAFESEARCH = true;

const LINK = `${BASE_URL}?key=${KEY}&q=${QUERY}&image_type=${IMAGE_TYPE}&orientation=${ORIENTATION}&safesearch=${true}`;


function getImages(){
    return fetch(LINK)
        .then(response =>{
            if(!response.ok){
                throw new Error('Image error!')
            }
            return response.json()
        })
        .catch(error =>{
            alert('ERROR')
        })
}
getImages().then(data => {
    const images = data.hits.slice(0, 10);
    
    document.body.innerHTML = images.map(({webformatURL}) => {
        return `<img src="${webformatURL}" width="360" height="300">`
    }).join('')


})