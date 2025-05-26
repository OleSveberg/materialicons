const iconText = document.getElementById("icon-text")
const iconButtonHolder = document.getElementById("guess-form");
const numberOfAlternatives = 8;
const guessingTime = 10_000;
let correctIcon;
let currentScore = 0;
let highscore = localStorage.getItem("wtmi_highscore") || 0;
document.getElementById("highscore").innerText = highscore;

// guessing timer
let countDownTime;
let timeRemaining = 0;
let timeRemainingBar = document.getElementById("time-bar");

// random page theme
let randomHue = Math.random() * 360;
document.documentElement.style.setProperty("--random-hue", `${randomHue}deg`);

function startGame() {
  // reset score
  currentScore = 0;
  document.getElementById("score").innerText = currentScore;

  document.getElementById("start-button").hidden = true;
  newQuestion();
}
function stopGame() {
  clearInterval(countDownTime);

  // remove icon buttons functionality
  document.querySelectorAll("input[name='guess-buttons']")
  .forEach(button => {
    button.removeEventListener("change", handleGuess)
  });
  document.querySelectorAll(".guess-icon").forEach(label => {
    label.classList.remove("clickable");
  });

  // show start / retry button
  document.getElementById("start-button").value = "Try again";
  document.getElementById("start-button").hidden = false;

  // show correct option
  document.getElementById(`label-for-guess-button-${correctIcon}`).classList.add("correct");

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
  let iconList = iconListAll; // choose icon set
  let selectedList = [];
  correctIcon = Math.floor(Math.random() * numberOfAlternatives);

  // select icons to show the player
  for (i = 0; i < numberOfAlternatives; i++) {
    let rand = Math.floor(Math.random() * iconList.length);
    selectedList.push(iconList[rand]);
    iconList.splice(rand, 1);
  }
  generateButtons(correctIcon, selectedList);

  // question timer
  clearInterval(countDownTime);
  timeRemaining = guessingTime;
  timeRemainingBar.style.width = '100%';
  countDownTime = setInterval(incrementTimer, 50);
  
}
function generateButtons(correct, list) {
  iconText.innerText = list[correct];

  const fragment = document.createDocumentFragment();
  for (i = 0; i < list.length; i++) {
    const input = document.createElement("input");
    input.type = "radio";
    input.name = "guess-buttons";
    input.id = `guess-button-${i}`;
    input.value = i;
    input.hidden = true;
    fragment.appendChild(input);

    const label = document.createElement("label");
    label.htmlFor = `guess-button-${i}`;
    label.id = `label-for-guess-button-${i}`
    label.classList.add("guess-icon", "material-icons")
    label.innerText = list[i];
    fragment.appendChild(label);
  }
  iconButtonHolder.innerHTML = "";
  iconButtonHolder.appendChild(fragment);

  document.querySelectorAll("input[name='guess-buttons']")
  .forEach(button => {
    button.addEventListener("change", handleGuess)
  });
  document.querySelectorAll(".guess-icon").forEach(label => {
    label.classList.add("clickable");
  });
}
function handleGuess(event) {
  value = event.target.value;
  if (value == correctIcon) {
    currentScore++;
    document.getElementById("score").innerText = currentScore;
    newQuestion();
  }
  else {
    stopGame();
  }
}