const tickRate = 20; // Time in ms between game clock updates
const numberOfAlternatives = 8; // How many guessing options will be displayed
const gamemodeProperties = [
  {
    name: "Easy",
    defaultTime: 12_000, // Time per guess in ms
    timeReduction: 320, // Reduction of time per guess after each correct guess in ms
    minimumTime: 3_000, // Minimum time per guess after reducing guessing time in ms
    iconList: easyIconList.slice() // Filtered list of icons
  },
  {
    name: "Normal",
    defaultTime: 10_000,
    timeReduction: 280,
    minimumTime: 2_500,
    iconList: normalIconList.slice()
  },
  {
    name: "Hard",
    defaultTime: 8_000,
    timeReduction: 280,
    minimumTime: 2_000,
    iconList: hardIconList.slice()
  },
  {
    name: "All Icons",
    defaultTime: 10_000,
    timeReduction: 200,
    minimumTime: 2_000,
    iconList: gradedIconList.slice()
  },
];

let gameState = "stopped";
let correctListId;
let currentScore;
let highscore;
let countDownTime;
let timeForQuestion;
let timeRemaining;

let totalGameTime;
let guessedIds = [];

function loadGame() {
  highscore = ls.stats.highscore[currentGamemode];
}

function startGame() {
  gameState = "playing";
  totalGameTime = 0;
  timeForQuestion = gamemodeProperties[currentGamemode].defaultTime;
  guessedIds = [];

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
  countDownTime = setInterval(incrementTimer, tickRate);
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
    if (i != correctListId) {
      document.getElementById(`guess-button-${i}`).classList.add("disabled");
    }
  }

  updateStats();
}

function incrementTimer() {
  totalGameTime += tickRate;
  timeRemaining -= tickRate;
  timeRemainingBar.style.width = (timeRemaining * 100 / timeForQuestion) + '%';
  if (timeRemaining <= 0) stopGame();
}

function newQuestion() {
  let gamemodeList = gamemodeProperties[currentGamemode].iconList.slice(); // Alternatives for correct icon
  let fullList = gradedIconList.slice(); // Alternatives for incorrect icons

  // Select correct icon
  correctIconId = gamemodeList[Math.floor(Math.random() * gamemodeList.length)].id;
  fullList.splice(correctIconId, 1); // Ensures the correct icon cannot be selected as an incorrect alternative

  let selectedIconIdList = []; // List of ids for selected icon options

  // Randomizes the position of the correct icon
  let insertBefore = Math.floor(Math.random() * numberOfAlternatives);
  correctListId = insertBefore; // Sets correct id in the selected icon list
  for (i = 0; i < insertBefore; i++) {
    newIncorrectIconId = fullList[Math.floor(Math.random() * fullList.length)].id;
    selectedIconIdList.push(newIncorrectIconId);
    fullList.splice(newIncorrectIconId, 1); // Ensures no duplicate incorrect options
  }
  selectedIconIdList.push(correctIconId)
  while(selectedIconIdList.length < 8) {
    newIncorrectIconId = fullList[Math.floor(Math.random() * fullList.length)].id;
    selectedIconIdList.push(newIncorrectIconId);
    fullList.splice(newIncorrectIconId, 1); // Ensures no duplicate incorrect options
  }
  
  // load icon name and guessing alternative icons
  iconText.innerText = gradedIconList[selectedIconIdList[correctListId]].name;
  for (i = 0; i < selectedIconIdList.length; i++) {
    guessingButtons[i].value = gradedIconList[selectedIconIdList[i]].name;
  }

  // question timer
  clearInterval(countDownTime);
  timeRemaining = timeForQuestion;
  timeRemainingBar.style.width = '100%';
  countDownTime = setInterval(incrementTimer, tickRate);
}

function guess(value) {
  if (gameState != "playing") return;

  if (value == correctListId) {
    // Increments score
    currentScore++;
    document.getElementById("score").innerText = currentScore;

    // Adds correctly guessed icon id to guessed list
    guessedIds.push(correctIconId);

    // Reduces guessing time for next guess
    timeForQuestion -= gamemodeProperties[currentGamemode].timeReduction;
    if(timeForQuestion < gamemodeProperties[currentGamemode].minimumTime) {
      timeForQuestion = gamemodeProperties[currentGamemode].minimumTime;
    }
    newQuestion();
  }
  else {
    stopGame();
  }
}

function updateStats() {
  console.log("updating stats")
  updateUniqueIcons(guessedIds);

  // Update Highscore
  if (currentScore > highscore) {
    setHighscore(currentScore, currentGamemode);
  }

  updateRoundsPlayed(1, currentGamemode);
  updateTimePlayed(totalGameTime, currentGamemode);
  updateCorrectGuesses(guessedIds.length, currentGamemode);
}