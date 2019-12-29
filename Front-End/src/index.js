document.addEventListener("DOMContentLoaded", () => {
  getLoginButton().addEventListener('click', login)
  getSignupButton().addEventListener('click', signUp)
  hideGamesSportsDivs()
  getScheduleNewGame().addEventListener('click', createGame)
  doingStuffWhenThePageIsLoaded()
})
