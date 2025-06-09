function updateUniqueIcons(list) {
  for(id of list)
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
  let countUniqueIconsGuessed = 0;
  for (n of ls.stats.icons) countUniqueIconsGuessed += n;
  statUniqueIconsGuessed.innerText = `${countUniqueIconsGuessed} / ${ls.stats.icons.length}`;

  statHighscoreEasy.innerText = ls.stats.highscore[0];
  statHighscoreMedium.innerText = ls.stats.highscore[1];
  statHighscoreHard.innerText = ls.stats.highscore[2];
  statHighscoreAllIcons.innerText = ls.stats.highscore[3];
  statTimePlayedTotal.innerText = formatTime(sumItems(ls.stats.time));
  statTimePlayedEasy.innerText = formatTime(ls.stats.time[0]);
  statTimePlayedMedium.innerText = formatTime(ls.stats.time[1]);
  statTimePlayedHard.innerText = formatTime(ls.stats.time[2]);
  statTimePlayedAllIcons.innerText = formatTime(ls.stats.time[3]);
  statRoundsPlayedTotal.innerText = sumItems(ls.stats.rounds);
  statRoundsPlayedEasy.innerText = ls.stats.rounds[0];
  statRoundsPlayedMedium.innerText = ls.stats.rounds[1];
  statRoundsPlayedHard.innerText = ls.stats.rounds[2];
  statRoundsPlayedAllIcons.innerText = ls.stats.rounds[3];
  statCorrectGuessesTotal.innerText = sumItems(ls.stats.guesses);
  statCorrectGuessesEasy.innerText = ls.stats.guesses[0];
  statCorrectGuessesMedium.innerText = ls.stats.guesses[1];
  statCorrectGuessesHard.innerText = ls.stats.guesses[2];
  statCorrectGuessesAllIcons.innerText = ls.stats.guesses[3];
}

function formatTime(value) {
  let seconds = Math.floor(value / 1_000);

  if (seconds < 60) {
    return `${seconds}s`;
  }
  if (seconds < 3_600) {
    let minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;
    return `${minutes}m ${String(seconds).padStart(2, "0")}s`;
  }

  let hours = Math.floor(seconds / 3_600);
  let minutes = Math.floor(seconds / 60) % 60;
  seconds = seconds % 60;

  return `${hours}h ${String(minutes).padStart(2, "0")}m`;
}
function sumItems(list) {
  let sum = 0;
  for (n of list) sum += n;
  return sum;
}