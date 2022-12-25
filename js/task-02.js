const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const list = document.querySelector('#ingredients');

const ingredientsEl = ingredients.map(elem => {
  const firstItem = document.createElement('li');
  firstItem.textContent = elem;
  firstItem.classList.add('item');
  return firstItem;
});

list.append(...ingredientsEl);
