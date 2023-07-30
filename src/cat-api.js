
export function fetchBreeds() {
  return fetch('https://api.thecatapi.com/v1/breeds')
    .then(response => {
      if (!response.ok) {
        throw new Error(console.log(Error));
      }
      return response.json();
    })
    .catch(error => {
      throw new Error(console.log(Error));
    });
}


// export function fetchCatByBreed(breedId) {
//   return axios
//     .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
//     .then(response => {
//       if (response.data && response.data.length > 0) {
//         return response.data[0]; // Return the first cat info from the response
//       } else {
//         throw new Error('No cat found for the given breed ID');
//       }
//     })
//     .catch(error => {
//       throw new Error('Error fetching cat by breed: ' + error.message);
//     });
// }