const BASE_URL = 'https://tasty-treats-backend.p.goit.global/api';
const popularItems = document.querySelector(".popular-items");
console.log(popularItems)

function getPopularRecipes() {
    return fetch(`${BASE_URL}/recipes/popular`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => { 
        console.log(data);
    popularItems.insertAdjacentHTML('beforeend', createMarkUp(data));
    })
    .catch(err => {
        console.log(err)
    });
}
getPopularRecipes();

function createMarkUp(arr) {
    const markup = arr.map(({description, title, preview}) => `<div class="popular-item">
    <img
      class="popular-item-img"
      src="${preview}"
      alt="${title}"
    />
    <div class="popular-item-text-content">
      <h3 class="popular-item-title">${title}</h3>
      <p class="popular-item-descr">${description}</p>
    </div>
  </div>`).join("");
    return markup;
  }