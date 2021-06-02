
const catalog = document.querySelector('.wrapper__catalog');

const catBlocks = document.querySelectorAll('.catalog__cat');

function sortByPrice(value) {
  const sortedCats = [...catBlocks].sort((a, b) => {
    const diff = a.dataset.price - b.dataset.price;
    return value === 'asc' ? diff : -diff;
  })

  sortedCats.forEach((cat) => catalog.appendChild(cat));
}

function sortByAge(value) {
  const sortedCats = [...catBlocks].sort((a, b) => {
    const diff = a.dataset.age - b.dataset.age;
    return value === 'asc' ? diff : -diff;
  })

  sortedCats.forEach((cat) => catalog.appendChild(cat));
}



window.sortByPrice = sortByPrice;
window.sortByAge = sortByAge;
