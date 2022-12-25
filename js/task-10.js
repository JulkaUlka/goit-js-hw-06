const userInputEl = document.querySelector('input');
const createBtnEl = document.querySelector('[data-create]');
const destroyBtnEl = document.querySelector('[data-destroy]');
const boxesEl = document.querySelector('#boxes');
let boxSize = 30;


createBtnEl.addEventListener('click', event => {
  createBoxes(userInputEl.value);
});

destroyBtnEl.addEventListener('click', event => {
  destroyBoxes();
});

function createBoxes(amount) {
  // const arr = [];
  for (let i = 0; i < amount; i++) {
    const boxItem = document.createElement('div');
    
    boxItem.style.width = boxSize + 'px';
    boxItem.style.height = boxSize + 'px';
    boxItem.style.backgroundColor = getRandomHexColor();

    boxesEl.append(boxItem);
    getBoxsize();
  }
}

function destroyBoxes() {
  boxesEl.innerHTML = '';
  userInputEl.value = '';
  boxSize = 30;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function getBoxsize() {
  boxSize += 10;
  return boxSize;
}
