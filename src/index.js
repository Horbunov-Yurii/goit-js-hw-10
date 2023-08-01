import axios from "axios";
// import { fetchBreeds, fetchCatByBreed } from './cat-api';
import {fetchBreeds} from './cat-api.js'

const API_KEY = "live_EqyjPWAaaLE4fiMxOePmQmkkrhxFcAwHsESZrQCBupk7XHE4FReYt4krSTy8oVf1"
//  axios.defaults.headers.common['x-api-key'] = API_KEY;
 
function populateBreedSelect() {
    axios.defaults.headers.common['x-api-key'] = API_KEY;
  return fetchBreeds(`${API_KEY}`)
    .then(breeds => {
    
      const selectElement = document.querySelector('.breed-select');

     
      breeds.forEach(breed => {
        const optionElement = document.createElement('option');
        optionElement.value = breed.id;
        optionElement.textContent = breed.name;
        selectElement.appendChild(optionElement);
        console.dir(optionElement.value);
      });
    })
    .catch(error => {
      console.error(error.message);
    });
}


populateBreedSelect();




// function populateBreedSelect() {
    
//   fetchBreeds()
//     .then(breeds => {
//       const selectElement = document.querySelector('.breed-select');

//       breeds.forEach(breed => {
//         const optionElement = document.createElement('option');
//         optionElement.value = breed.id;
//         optionElement.textContent = breed.name;
//         selectElement.appendChild(optionElement);
//       });
//     })
//     .catch(error => {
//       console.error(error.message);
//     });
// }

// populateBreedSelect();

// document.querySelector('.breed-select').addEventListener('change', event => {
//   const breedId = event.target.value;

//   fetchCatByBreed(breedId)
//     .then(catInfo => {
//       const catInfoElement = document.querySelector('.cat-info');
//       catInfoElement.innerHTML = `
//         <h2>${catInfo.breeds[0].name}</h2>
//         <p>Description:${catInfo.breeds[0].description}</p>
//         <p>Temperament:${catInfo.breeds[0].temperament}</p>
//         <img src="${catInfo.url}" alt="${catInfo.breeds[0].name}" />
//       `;
//     })
//     .catch(error => {
//       console.error(error.message);
//     });
// });









