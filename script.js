const overlay = document.getElementById("overlay");
const settingsOverlay = document.getElementById("settings-overlay");
const pauseOverlay = document.getElementById("pause-overlay");
const statsOverlay = document.getElementById("stats-overlay");

const difficultySettingButtons = document.querySelectorAll("input[name='difficulty']");
const themeSettingButtons = document.querySelectorAll("input[name='theme']");

const iconText = document.getElementById("icon-text")
const guessForm = document.getElementById("guess-form");
const numberOfAlternatives = 8;
const guessingTime = 10_000;
let gameState = "stopped";
let correctIcon;
let currentScore = 0;
let highscore = localStorage.getItem("wti_highscore") || 0;
document.getElementById("highscore").innerText = highscore;

// guessing timer
let countDownTime;
let timeRemaining = 0;
let timeRemainingBar = document.getElementById("time-bar");

// random page theme
let randomHue = Math.floor(Math.random() * 360);
document.documentElement.style.setProperty("--random-hue", `${randomHue}deg`);
setInterval(hueRotate, 1500);
function hueRotate() {
  randomHue = (randomHue + 1) % 360;
  document.documentElement.style.setProperty("--random-hue", `${randomHue}deg`);
}

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

function startGame() {
  gameState = "playing";

  for (i = 0; i < numberOfAlternatives; i++) {
    document.getElementById(`guess-button-${i}`).classList.remove("disabled");
  }

  // reset score
  currentScore = 0;
  document.getElementById("score").innerText = currentScore;
  document.getElementById("menu-buttons").hidden = true;
  document.getElementById("game-buttons").hidden = false;
  newQuestion();

  for (const element of guessForm.children) {
    element.classList.add("clickable");
  }
}
function pauseGame() {
  clearInterval(countDownTime);
  toggleOverlay("pause");
}
function resumeGame() {
  countDownTime = setInterval(incrementTimer, 50);
  toggleOverlay();
}
function stopGame() {
  gameState = "stopped";
  clearInterval(countDownTime);

  for (const element of guessForm.children) {
    element.classList.remove("clickable");
  }

  // show start / retry button
  document.getElementById("start-button").value = "Try again";
  document.getElementById("menu-buttons").hidden = false;
  document.getElementById("game-buttons").hidden = true;

  // show correct option
  for (i = 0; i < numberOfAlternatives; i++) {
    if (i != correctIcon) {
      document.getElementById(`guess-button-${i}`).classList.add("disabled");
    }
  }

  // update highscore
  if (currentScore > highscore) {
    highscore = currentScore;
    document.getElementById("highscore").innerText = highscore;
    localStorage.setItem("wtmi_highscore", highscore);
  }
}
function incrementTimer() {
  timeRemaining -= 50;
  timeRemainingBar.style.width = (timeRemaining * 100 / guessingTime) + '%';
  if (timeRemaining <= 0) stopGame();
}
function newQuestion() {
  let newIconList = materialIconsAll; // choose icon set
  let selectedList = [];
  correctIcon = Math.floor(Math.random() * numberOfAlternatives);

  // select icons to show the player
  for (i = 0; i < numberOfAlternatives; i++) {
    let rand = Math.floor(Math.random() * newIconList.length);
    selectedList.push(newIconList[rand]);
    newIconList.splice(rand, 1);
  }
  
  // load icon name and guessing alternative icons
  iconText.innerText = selectedList[correctIcon];
  for (i = 0; i < selectedList.length; i++) {
    document.getElementById(`guess-button-${i}`).value = selectedList[i];
  }

  // question timer
  clearInterval(countDownTime);
  timeRemaining = guessingTime;
  timeRemainingBar.style.width = '100%';
  countDownTime = setInterval(incrementTimer, 50);
}
function handleGuess(value) {
  if (gameState != "playing") return;

  if (value == correctIcon) {
    currentScore++;
    document.getElementById("score").innerText = currentScore;
    newQuestion();
  }
  else {
    stopGame();
  }
}
function saveSettings() {
  toggleOverlay();
}
function changeDifficulty(value) {
  console.log("difficulty: "+ value);
}
function changeTheme(value) {
  console.log("theme: "+ value);
}

difficultySettingButtons.forEach(button => {
  button.addEventListener("change", () => {
    changeDifficulty(button.value);
  })
});
themeSettingButtons.forEach(button => {
  button.addEventListener("change", () => {
    changeTheme(button.value);
  })
});