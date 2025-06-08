function updateUniqueIcons(value) {
  ls.stats.icons[value] = 1;
}

function updateHighscore(value, gamemode) {
  highscore = value;
  ls.stats.highscore[gamemode] = value;
  displayedHighscore.innerText = highscore;
  updateLocalStorage();
}

function updateTimePlayed(value, gamemode) {
  ls.stats.time[gamemode] = value;
  updateLocalStorage();
}

function updateRoundsPlayed(value, gamemode) {
  ls.stats.rounds[gamemode] = value;
  updateLocalStorage();
}

function updateCorrectGuesses(value, gamemode) {
  ls.stats.guesses[gamemode] = value;
  updateLocalStorage();
}

function loadStatPage() {
  statMostPlayedMode.innerText = ls.stats.mostplayedmode
}