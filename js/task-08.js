const usersLoginFormEl = document.querySelector('.login-form');

usersLoginFormEl.addEventListener('submit', event => {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;
  const formData = {
    email,
    password,
  };
  if (email === '' || password === '') {
    alert('всі поля повинні бути заповнені!');
  } else {
    console.log(formData);
  }
});
