const iconText = document.getElementById("icon-text")
const guessForm = document.getElementById("guess-form");
const numberOfAlternatives = 8;
const guessingTime = 10_000;
let gameState = "stopped";
let correctIcon;
let currentScore = 0;
let highscore = localStorage.getItem("wtmi_highscore") || 0;
document.getElementById("highscore").innerText = highscore;

// guessing timer
let countDownTime;
let timeRemaining = 0;
let timeRemainingBar = document.getElementById("time-bar");

// random page theme
let randomHue = Math.floor(Math.random() * 360);
document.documentElement.style.setProperty("--random-hue", `${randomHue}deg`);
setInterval(hueRotate, 3000);
function hueRotate() {
  randomHue = (randomHue + 1) % 360;
  document.documentElement.style.setProperty("--random-hue", `${randomHue}deg`);
}

function startGame() {
  gameState = "playing";

  // remove previous correct icon
  if (correctIcon != null) {
    document.getElementById(`guess-button-${correctIcon}`).classList.remove("correct");
  }

  // reset score
  currentScore = 0;
  document.getElementById("score").innerText = currentScore;
  document.getElementById("start-button").hidden = true;
  newQuestion();

  for (const element of guessForm.children) {
    element.classList.add("clickable");
  }
}
function stopGame() {
  gameState = "stopped";
  clearInterval(countDownTime);

  for (const element of guessForm.children) {
    element.classList.remove("clickable");
  }

  // show start / retry button
  document.getElementById("start-button").value = "Try again";
  document.getElementById("start-button").hidden = false;

  // show correct option
  document.getElementById(`guess-button-${correctIcon}`).classList.add("correct");

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
  let newIconList = iconListAll; // choose icon set
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