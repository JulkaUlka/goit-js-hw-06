const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const list = document.querySelector('#ingredients');

ingredients.forEach(function (elem) {
  const firstItem = document.createElement('li');
  firstItem.textContent = elem;
  firstItem.classList.add('item');
  list.append(firstItem);
});
