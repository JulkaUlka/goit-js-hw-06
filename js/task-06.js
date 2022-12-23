const userInputEl = document.querySelector('#validation-input');

userInputEl.addEventListener('blur', event => {
  if (userInputEl.value.length === parseInt(userInputEl.dataset.length)) {
    userInputEl.classList.add('valid');
  } else {
    userInputEl.classList.add('invalid');
  }
});
