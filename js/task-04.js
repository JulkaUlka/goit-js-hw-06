let counterDisplayElem = document.querySelector('#value');
let counterMinusElem = document.querySelector('[data-action="decrement"]');
let counterPlusElem = document.querySelector('[data-action="increment"]');

let counterValue = 0;

counterPlusElem.addEventListener('click', () => {
  counterValue++;
  updateDisplay();
});

counterMinusElem.addEventListener('click', () => {
  counterValue--;
  updateDisplay();
});

function updateDisplay() {
  counterDisplayElem.innerHTML = counterValue;
}
