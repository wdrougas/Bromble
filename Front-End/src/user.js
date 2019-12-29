function getUserUrl (arguments) {
  const USER_URL = 'http://localhost:8000/users'
  return USER_URL
}

function getLoginUrl () {
  const LOGIN_URL = 'http://localhost:8000/login'
  return LOGIN_URL
}

function getLogoutUrl () {
  const LOGOUT_URL = 'http://localhost:8000/logout'
  return LOGOUT_URL
}

function getHeaders() {
  const HEADERS = {
    "Content-Type": 'application/json',
    "Accept": 'application/json'
  }
  return HEADERS
}

function getButtonContainerEl() {
  return document.getElementById('button-container')
}

function getMainContainerEl() {
  return document.querySelector('#main-container');
}

function getLoginButton() {
  return document.getElementById('login-button')
}

function getSignupButton() {
  return document.getElementById('signup-button')
}

function getLogoutBtn() {
  return document.querySelector('#logout')
}

function getDivForms() {
  return document.getElementById('forms-container')
}

function getLoginForm() {
  return document.getElementById('login-form')
}

function getLoginUsernameEl() {
  return document.getElementById('login-username')
}

function getLoginPasswordEl() {
  return document.getElementById('login-password')
}

function getNewLoginDiv() {
  return document.querySelector('#new-login');
}

// sign up form
function getSubmitForm() {
  return document.getElementById('sign-up')
}
function getFirstNameEl() {
  return document.getElementById('first-name-field')
}

function getLastNameEl() {
  return document.getElementById('last-name-field')
}

function getUsernameEl () {
  return document.getElementById('username-field')
}

function getPasswordEl () {
  return document.getElementById('password-field')
}
function getEmailEl () {
  return document.getElementById('email-field')
}
function getLocationEl () {
  return document.getElementById('location-field')
}
// sign up form end

// home div
function getHomeDiv() {
  return document.getElementById('home')
}

function getSportDiv() {
  return document.querySelector('#sports')
}
function getGamesDiv() {
  return document.querySelector('#games')
}

function login() {
  getDivForms().innerHTML = ''
  let loginDiv = document.createElement('div')
  loginDiv.innerHTML =
  `<form id='login-form' class='ui form' action='#' method='post'>
    <div class='field'>
        <label>Username</label>
        <input id='login-username' type='text' name='username' placeholder='Username' required>
      </div>
      <div class='field'>
        <label>Password</label>
        <input id='login-password' type='password' name='password' placeholder='Password' required>
      </div>
      <button id='login-btn' class='ui button' type='submit'>Login</button>
  </form>`
  getDivForms().appendChild(loginDiv)
  getLoginForm().addEventListener('submit', function(e) {
    e.preventDefault()
    userLogin(getLoginUsernameEl().value, getLoginPasswordEl().value)
  })
}

function signUp () {
  getDivForms().innerHTML = ''
  let signUpDiv = document.createElement('div')
  signUpDiv.innerHTML =
  `<form id='sign-up' class='ui form' action='#' method='post'>
    <div class='field'>
        <label>First Name</label>
        <input id="first-name-field" type='text' name='first_name' placeholder='First Name' required>
      </div>
      <div class='field'>
        <label>Last Name</label>
        <input id="last-name-field" type='text' name='last_name' placeholder='Last Name' required>
      </div>
      <div class='field'>
        <label>Username</label>
        <input id="username-field" type='text' name='username' placeholder='Username'minlength="5" maxlength="10" required>
      </div>
      <div class='field'>
        <label>Password</label>
        <input id="password-field" type='password' name="password_digest" placeholder='Password' required>
      </div>
      <div class='field'>
        <label>Email</label>
        <input id="email-field" type='email' name='email' placeholder='Email' size="30" required>
      </div>
      <div class='field'>
        <label>Zip Code</label>
        <input id="location-field" type='number' name='location' placeholder='Zip Code' max='99999' size="5" required>
      </div>
      <div class='field'>
        <div class='ui checkbox'>
          <input type='checkbox' tabindex='0' class=''>
          <label>I agree to the Terms and Conditions</label>
        </div>
      </div>
      <button id='submit' class='ui button' type='submit'>Submit</button>
  </form>`
  getDivForms().appendChild(signUpDiv)
  getSubmitForm().addEventListener('submit', function(e) {
    e.preventDefault()
    submitUserInfo()
  })
}

function submitUserInfo() {
    let userInfo = {
      first_name: getFirstNameEl().value,
      last_name: getLastNameEl().value,
      username: getUsernameEl().value,
      password_digest: getPasswordEl().value,
      email: getEmailEl().value,
      location: getLocationEl().value
    }
    let configOptions = {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify(userInfo)
    }
    fetch(getUserUrl(), configOptions)
    .then(response => {
      if (response.ok) {
        login()
      } else {
        alert("Sign up failed. Please try again")
      }
    })
    .catch(error => console.log(error.message))
}

function userLogin(username, password_digest) {
  let configOptions = {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify({username: username, password_digest: password_digest})
  }
  fetch(getLoginUrl(), configOptions)
  .then(response => response.json())
  .then(currentUser => showMainContainerDiv(currentUser))
  .catch(error => console.log(error.message))
}

function userLogout() {
  // if user is login, clear all the data from the current user
  //  and show the home page.
  getHomeDiv().style.display = ''
  getButtonContainerEl().style.display = ''
  getMainContainerEl().innerHTML = ''
  getLogoutBtn().style.display = 'none'

  // Do I need a fetch to do a fake logout ?
  // const configOptions = {
  //   headers: getHeaders()
  // }
  // fetch(getLogoutUrl())
}

function showMainContainerDiv(currentUser) {
  // console.log(currentUser)
  if (currentUser.message === "User doesn't exist. Create and account") {
    alert("User doesn't exist. Create and account")
    getLoginForm().reset()
    signUp()
  } else if (currentUser.message === 'Invalid username or password. Please check.') {
    alert('Invalid username or password. Please check.')
    getLoginUsernameEl().focus()
  } else {
    getNewLoginDiv().style.display = 'none'
    getLogoutBtn().style.display = 'flex'
    getLogoutBtn().addEventListener('click', function(e) {
      userLogout()
    })
    getLoginForm().reset()
    getButtonContainerEl().style.display = 'none'
    getDivForms().innerHTML = ''
    getHomeDiv().style.display = 'none'


    const pTagTest = document.createElement('p')
    pTagTest.innerText = `Welcome to Sports Buddy, ${currentUser.first_name}!`

    const cardDiv = document.createElement('div')
    cardDiv.innerHTML = `
    <div class="ui card">
      <div class="ui slide masked reveal image">
        <img src="${currentUser.profile_photo}" class="visible content">
        <img src="${currentUser.profile_photo}" class="hidden content">
      </div>
      <div class="content">
        <a class="header">Team Fu &amp; Hess</a>
        <div class="meta">
          <span class="date">Created in Sep 2014</span>
        </div>
      </div>
      <div class="extra content">
        <a>
          <i class="users icon"></i>
          2 Members
        </a>
      </div>
    </div>
    `
    getMainContainerEl().append(pTagTest)
    getMainContainerEl().append(pTagTest)
    getMainContainerEl().append(cardDiv)
  }
}

function hideGamesSportsDivs() {
  getGamesDiv().style.display = 'none'
  getSportDiv().style.display = 'none'
}

function hideLogoutBtn() {
  getLogoutBtn().style.display = 'none'
}

function doingStuffWhenThePageIsLoaded() {
  // add here functions you need when the page is loaded for the first time
  hideGamesSportsDivs()
  hideLogoutBtn()
}
