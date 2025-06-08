// Overlay Elements
const overlay = document.getElementById("overlay");
const settingsOverlay = document.getElementById("settings-overlay");
const pauseOverlay = document.getElementById("pause-overlay");
const statsOverlay = document.getElementById("stats-overlay");

// Elements in Stats overlay
const statUniqueIconsGuessed = document.getElementById("stat-uniqueiconsguessed");
const statHighscoreEasy = document.getElementById("stat-highscore-easy");
const statHighscoreMedium = document.getElementById("stat-highscore-medium");
const statHighscoreHard = document.getElementById("stat-highscore-hard");
const statHighscoreAllIcons = document.getElementById("stat-highscore-allicons");
const statTimePlayedTotal = document.getElementById("stat-timeplayed-total");
const statTimePlayedEasy = document.getElementById("stat-timeplayed-easy");
const statTimePlayedMedium = document.getElementById("stat-timeplayed-medium");
const statTimePlayedHard = document.getElementById("stat-timeplayed-hard");
const statTimePlayedAllIcons = document.getElementById("stat-timeplayed-allicons");
const statRoundsPlayedTotal = document.getElementById("stat-roundsplayed-total");
const statRoundsPlayedEasy = document.getElementById("stat-roundsplayed-easy");
const statRoundsPlayedMedium = document.getElementById("stat-roundsplayed-medium");
const statRoundsPlayedHard = document.getElementById("stat-roundsplayed-hard");
const statRoundsPlayedAllIcons = document.getElementById("stat-roundsplayed-allicons");
const statCorrectGuessesTotal = document.getElementById("stat-correctguesses-total");
const statCorrectGuessesEasy = document.getElementById("stat-correctguesses-easy");
const statCorrectGuessesMedium = document.getElementById("stat-correctguesses-medium");
const statCorrectGuessesHard = document.getElementById("stat-correctguesses-hard");
const statCorrectGuessesAllIcons = document.getElementById("stat-correctguesses-allicons");

// Elements in Settings overlay
const gamemodeSettingButtons = document.querySelectorAll("input[name='gamemode']");
const themeSettingButtons = document.querySelectorAll("input[name='theme']");

// Gameplay info
const displayedScore = document.getElementById("score");
const displayedHighscore = document.getElementById("highscore");
const timeRemainingBar = document.getElementById("time-bar");
// Gameplay elements
const iconText = document.getElementById("icon-text")
const guessForm = document.getElementById("guess-form");
const guessingButtons = [
  document.getElementById("guess-button-0"),
  document.getElementById("guess-button-1"),
  document.getElementById("guess-button-2"),
  document.getElementById("guess-button-3"),
  document.getElementById("guess-button-4"),
  document.getElementById("guess-button-5"),
  document.getElementById("guess-button-6"),
  document.getElementById("guess-button-7"),
];

function loadUIElements() {
  displayedScore.innerText = "-";
  displayedHighscore.innerText = highscore;
}

// Set random color theme for page
let randomHue = Math.floor(Math.random() * 360);
document.documentElement.style.setProperty("--random-hue", `${randomHue}deg`);
setInterval(hueRotate, 1500);
function hueRotate() {
  randomHue = (randomHue + 1) % 360;
  document.documentElement.style.setProperty("--random-hue", `${randomHue}deg`);
}

// Opens or closes screen overlays
function toggleOverlay(action) {
  overlay.hidden = true;
  for (const child of overlay.children) {
    child.hidden = true;
  }
  if (action == "settings") settingsOverlay.hidden = false;
  else if (action == "pause") pauseOverlay.hidden = false;
  else if (action == "stats") statsOverlay.hidden = false;
  else return;
  overlay.hidden = false;
}