function updateUniqueIcons(list) {
  for(id of list)
    console.log(id);
    ls.stats.icons[id] = 1;
  updateLocalStorage();
}

function setHighscore(value, gamemode) {
  highscore = value;
  ls.stats.highscore[gamemode] = value;
  displayedHighscore.innerText = highscore; // Display new highscore in the UI
  updateLocalStorage();
}

function updateTimePlayed(value, gamemode) {
  ls.stats.time[gamemode] += value;
  updateLocalStorage();
}

function updateRoundsPlayed(value, gamemode) {
  ls.stats.rounds[gamemode] += value;
  updateLocalStorage();
}

function updateCorrectGuesses(value, gamemode) {
  ls.stats.guesses[gamemode] += value;
  updateLocalStorage();
}

function loadStatPage() {
  statMostPlayedMode.innerText = ls.stats.mostplayedmode
}