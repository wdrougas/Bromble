document.addEventListener("DOMContentLoaded", () => {
  getLoginButton().addEventListener('click', login)
  getSignupButton().addEventListener('click', signUp)
  hideHomeSportsDivs()
  getScheduleNewGame().addEventListener('click', createGame)
})
