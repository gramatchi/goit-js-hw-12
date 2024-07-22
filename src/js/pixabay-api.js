import { imageTemplate } from './render-functions';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '45042882-3b5507a901f9feb9cee5f866e';
const IMAGE_TYPE = 'photo';
const ORIENTATION = 'horizontal';
const SAFESEARCH = 'true';

const options = {
  method: 'GET',
};

export function fetchImages(query) {
  return fetch(
    `${BASE_URL}?key=${API_KEY}&q=${query}&image_type=${IMAGE_TYPE}&orientation=${ORIENTATION}&safesearch=${SAFESEARCH}`,
    options
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch(error => {
      throw new Error(`An error occurred: ${error.message}`);
    });
}