


function createGame() {
  debugger
  getHomePage().innerHTML = ''
  let createGameDiv = document.createElement('div')
  createGameDiv.innerHTML = ` <h2>Schedule New Game!</h2>
  <br>
  <form id='create-game' class='ui form' action='#' method='post'>
      <div class='field'>
          <label>Location</label>
          <input id="location-field" type='number' name='location' placeholder='Location' max='99999' min='09999' size="5"required>
        </div>
        <div class='field'>
          <label>Date</label>
          <input id="time-field" type='date' name='time' placeholder='Time' required>
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
          <input id="sport-field" type='hidden' name='sport' placeholder='Sport' required>
          </select>
        </div>
        <div class='field'>
          <label>Result</label>
          <input id="result-field" type='text' name='result' placeholder='Result' required>
        </div>
        <button id='submit' class='ui button' type='submit'>Submit</button>
    </form>`
  getHomePage().append(createGameDiv)

  }