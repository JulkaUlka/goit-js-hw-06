const numberOfCategories = document.querySelectorAll('.item');

console.log(`Number of categories: ${numberOfCategories.length}`);

numberOfCategories.forEach(function (elem) {
console.log(`Category: ${elem.firstElementChild.textContent}
Elements: ${elem.lastElementChild.children.length}`);
});
