
import { fetchBreeds, fetchCatByBreed } from './cat-api.js';
import SlimSelect from 'slim-select';
import Notiflix from 'notiflix';
import '/node_modules/slim-select/dist/slimselect.css';



const refs = {
  selectEl: document.querySelector('.breed-select'),
  catInfoElem: document.querySelector('.cat-info'),
  loaderElem: document.querySelector('.load'),
  errorElem: document.querySelector('.error'),
  load: document.querySelector('.loader')
};



fetchBreeds()
  .then(res => {
    renderMarkup(res.data);
    new SlimSelect({
      select: '.breed-select',
    });
    refs.selectEl.classList.remove('is-hidden');
  })
  .catch(error => {
    Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!');
    refs.errorElem.classList.remove('is-hidden');
  })
  .finally(() => refs.load.classList.add('is-hidden'));


function createMarkup(array){
  const markup = array.map(({id, name})=>{
  return `<option value="${id}">${name}</option>`;
  }).join("")
  return markup;
}


function renderMarkup(array){
  const markup = createMarkup(array)
  refs.selectEl.innerHTML = markup;
}



refs.selectEl.addEventListener('change', onSelectChange)

function onSelectChange(evt){
const userValue = evt.currentTarget.value;

  refs.load.classList.remove('is-hidden');
  refs.loaderElem.classList.remove('is-hidden');
  refs.errorElem.classList.add('is-hidden');
 refs.catInfoElem.innerHTML = '';
 

fetchCatByBreed(userValue)
  .then(res => {
   
    renderCatMarkup(res.data[0]);
  })
  .catch(() => {
    Notiflix.Notify.failure(
      'Oops! Something went wrong! Try reloading the page!'
    );
    refs.errorElem.classList.remove('is-hidden');
    console.log(error)})
  .finally(() => {
    refs.loaderElem.classList.add('is-hidden');
    refs.load.classList.add('is-hidden');
  });


}


function createCatMarkup(data) {
  const catInfo = data.breeds[0]
  const { name, description, temperament } = catInfo;
  console.log(catInfo);
  return `<img src="${data.url}" alt="${name}" class = "cat__img"><h2 class = "cat__name">${name}</h2><p class = "cat__description">${description}</p><p clas = cat__temperament>${temperament}</p>`;
}

function renderCatMarkup(data){
 const markup = createCatMarkup(data)
 refs.catInfoElem.innerHTML = markup;
 
}












































// function populateBreedSelect() {
//     axios.defaults.headers.common['x-api-key'] = API_KEY;
//   return fetchBreeds(`${API_KEY}`)
//     .then(breeds => {
    
//       const selectElement = document.querySelector('.breed-select');

     
//       breeds.forEach(breed => {
//         const optionElement = document.createElement('option');
//         optionElement.value = breed.id;
//         optionElement.textContent = breed.name;
//         selectElement.appendChild(optionElement);
//         console.dir(optionElement.value);
//       });
//     })
//     .catch(error => {
//       console.error(error.message);
//     });
// }


// populateBreedSelect();












