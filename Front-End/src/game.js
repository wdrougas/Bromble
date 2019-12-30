function getGamesURL() {
  const GAMES_URL = 'http://localhost:8000/games'
  return GAMES_URL
}

function getSubmitNewGameButton() {
  return document.getElementById('submit-new-game')
}

function getGameLocationEl() {
  return document.querySelector('#game-location-field')
}
function getGameTimeEl() {
  return document.querySelector('#game-time-field')
}
function getGameSportEl() {
  return document.querySelector('#game-sport-field')
}
function getGameResultEl() {
  return document.querySelector('#game-result-field')
}

function createGame() {
  let createGameDiv = document.createElement('div')
  createGameDiv.innerHTML = ` <h2>Schedule New Game!</h2>
  <form id='form-create-game' class='ui form' action='#' method='post'>
    <div class='field'>
      <label>Location</label>
      <input id="game-location-field" type='number' name='location' placeholder='Location' max='99999' min='09999' size="5"required>
    </div>
    <div class='field'>
      <label>Date</label>
      <input id="game-time-field" type='date' name='time' placeholder='Time' required>
    </div>
    <div class='field'>
      <label>Sport</label>
      <select class ='ui fluid dropdown'>
      <option value =''>Sport</option>
      <option value ='Tennis'>Tennis</option>
      <option value ='Table Tennis'>Table Tennis</option>
      <option value ='Basketball'>Basketball</option>
      <option value ='Golf'>Golf</option>
      <option value ='Running'>Running</option>
      <input id="game-sport-field" type='hidden' name='sport' placeholder='Sport' required>
      </select>
    </div>
    <div class='field'>
      <label>Result</label>
      <input id="game-result-field" type='text' name='result' placeholder='Result' required>
    </div>
    <!-- begin add dropdown with search for user -->
    <!-- <div class="ui fluid selection dropdown"> -->
    <div class='field'>
    <div class="ui simple selection dropdown item">
      <input type="hidden" name="user">
      <i class="dropdown icon"></i>
      <div class="default text">Select Friend</div>
      <div class="menu"> <!-- for each user we need to create this div with everything inside -->
        <div class="item" data-value="jenny">
          <img class="ui mini avatar image" src="">
          Jenny Hess
        </div>
      </div>
    </div>
    </div>
    <!-- end add dropdown with search for user -->
    <button id='submit-new-game' class='ui button' type='submit'>Submit</button>
  </form>`
  getColumn2Div().append(createGameDiv)
  let formCreateGame = document.querySelector('#form-create-game')
  formCreateGame.addEventListener('submit', function(e) {
    e.preventDefault()
    submitGameInfo()
  })
}

function submitGameInfo() {
  let gameInfo = {
    location: getGameLocationEl().value,
    time: getGameTimeEl().value,
    sport: getGameSportEl().value,
    result: getGameResultEl().value
  }
  let configOptions = {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify(gameInfo)
  }
  fetch(getGamesURL(), configOptions)
  .then(response => response.json)
  .then(newGame => console.log(newGame))
  .catch(err=>console.log(err.message))
}


function gameDoingStuffWhenThePageIsLoaded() {
  // add here functions you need when the page is loaded for the first time
  getScheduleNewGame().addEventListener('click', createGame)
}
