document.addEventListener("DOMContentLoaded", () => {

getLoginButton().addEventListener('click', login)
getSignupButton().addEventListener('click', signUp)
})


function getLoginButton() {
  return document.getElementById('login-button')
}

function getSignupButton() {
  return document.getElementById('signup-button')
}

function getDivForms() {
  return document.getElementById('forms-container')
}

function getLoginForm() {
  return document.getElementById('login-form')
}

function getSubmitForm() {
  return document.getElementById('sign-up')
}


function login() {
  getDivForms().innerHTML = ''
  let loginDiv = document.createElement('div')
  loginDiv.innerHTML =
  `<form id='login-form' class='ui form' action='#' method='post'>
    <div class='field'>
        <label>Username</label>
        <input type='text' name='username' placeholder='Username'>
      </div>
      <div class='field'>
        <label>Password</label>
        <input type='password' name='password' placeholder='Password'>
      </div>
      <button id='login-btn' class='ui button' type='submit'>Login</button>
  </form>`
  getDivForms().appendChild(loginDiv)
  getLoginForm().addEventListener('submit', function(e) {
    e.preventDefault()
    alert("Login Submitted")
  });
}

function signUp () {
  getDivForms().innerHTML = ''
  let signUpDiv = document.createElement('div')
  signUpDiv.innerHTML =
  `<form id='sign-up' class='ui form' action='#' method='post'>
    <div class='field'>
        <label>First Name</label>
        <input type='text' name='first-name' placeholder='First Name'>
      </div>
      <div class='field'>
        <label>Last Name</label>
        <input type='text' name='last-name' placeholder='Last Name'>
      </div>
      <div class='field'>
        <label>Username</label>
        <input type='text' name='user-name' placeholder='Username'>
      </div>
      <div class='field'>
        <label>Password</label>
        <input type='text' name='password' placeholder='Password'>
      </div>
      <div class='field'>
        <label>Email</label>
        <input type='text' name='email' placeholder='Email'>
      </div>
      <div class='field'>
        <label>Zip Code</label>
        <input type='text' name='zip-code' placeholder='Zip Code'>
      </div>
      <div class='field'>
        <div class='ui checkbox'>
          <input type='checkbox' tabindex='0' class='hidden'>
          <label>I agree to the Terms and Conditions</label>
        </div>
      </div>
      <button id='submit' class='ui button' type='submit'>Submit</button>
  </form>`
  getDivForms().appendChild(signUpDiv)
  getSubmitForm().addEventListener('submit', function(e) {
    e.preventDefault()
    alert("Signup Submitted")
  });
}
