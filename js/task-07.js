const userInputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

userInputEl.addEventListener('input', event => {
  if (parseInt(userInputEl.value) > parseInt(userInputEl.min)) {
    textEl.style.fontSize = userInputEl.value + 'px';
    return;
  }
});
