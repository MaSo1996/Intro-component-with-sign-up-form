const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
  e.preventDefault();

  var firstName = fname.value.trim();
  var lastName = lname.value.trim();
  var emailValue = email.value.trim();
  var passwordValue = password.value.trim();
  var pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (firstName === '') {
    errorFunc(fname, 'First Name cannot be empty')
  }
  else {
    succesFunc(fname)
  }

  if (lastName === '') {
    errorFunc(lname, 'Last Name cannot be empty')
  }
  else {
    succesFunc(lname)
  }

  if (emailValue === '') {
    errorFunc(email, 'Email cannot be empty')
  }
  else if (!emailValue.match(pattern)) {
    errorFunc(email, 'It does not look like email...');
  }
  else {
    succesFunc(email)
  }
  
  if (passwordValue === '') {
    errorFunc(password, 'Password cannot be empty')
  }
  else {
    succesFunc(password)
  }
})

function errorFunc(reg, message) {
  const formControl = reg.parentElement;
  const span = formControl.querySelector('span');
  span.innerText = message;
  reg.className += 'error';
  span.className += 'error-text';
  if (reg !== email) {
    reg.value = ' ';
  } else {
    reg.style.color = "var(--Red)";
  }
}

function succesFunc(reg) {
  reg.className += 'success';
}