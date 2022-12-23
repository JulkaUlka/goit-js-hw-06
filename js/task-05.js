const userNameInputEl = document.querySelector('#name-input');
const userNameOutputEl = document.querySelector('#name-output');

userNameInputEl.addEventListener('input', event => {
  if (userNameInputEl.value === '') {
    userNameOutputEl.textContent = 'Anonymous';

    return;
  }

  userNameOutputEl.textContent = userNameInputEl.value;
});
