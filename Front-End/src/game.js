function createGame() {
    `<form id='create-game' class='ui form' action='#' method='post'>
      <div class='field'>
          <label>Location</label>
          <input id="location-field" type='number' name='location' placeholder='Location' required>
        </div>
        <div class='field'>
          <label>Time</label>
          <input id="time-field" type='date' name='time' placeholder='Time' required>
        </div>
        <div class='field'>
          <label>Sport</label>
          <select class = 'ui fluid dropdown'>
          <input id="sport-field" type='hidden' name='sport' placeholder='Sport'required>
          <option value =''>Sport</option>
          <option value ='Tennis'>Tennis</option>
          <option value ='Table Tennis'>Table Tennis</option>
          <option value ='Basketball'>Basketball</option>
          <option value ='Golf'>Golf</option>
          <option value ='Running'>Running</option>
        </div>
        <div class='field'>
          <label>Result</label>
          <input id="result-field" type='text' name='result' placeholder='Result' required>
        </div>
        <div class='field'>
          <label>Opponent</label>
          <select class = 'ui fluid dropdown'>
          <input id="opponent-field" type='text' name='' placeholder='Result' required>
        </div>
        <button id='submit' class='ui button' type='submit'>Submit</button>
    </form>`
  }