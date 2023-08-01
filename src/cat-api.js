import axios from 'axios';

const API_KEY =
  'live_EqyjPWAaaLE4fiMxOePmQmkkrhxFcAwHsESZrQCBupk7XHE4FReYt4krSTy8oVf1';

axios.defaults.headers.common['x-api-key'] = API_KEY;

export function fetchBreeds() {
  return axios.get('https://api.thecatapi.com/v1/breeds')
  
}


export function fetchCatByBreed(breedId){
  return axios.get(
    `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`
  );

}