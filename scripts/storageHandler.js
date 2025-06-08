let ls;

loadApp();

function loadApp() {
  loadLocalStorage();
  loadSettings();
  loadGame();
  loadUIElements();
}

function loadLocalStorage() {
  ls = localStorage.getItem("wti_data") || null;
  if (ls) {
    ls = JSON.parse(ls) // Load object data from stored JSON
  }
  if (!ls) {
    // console.log("no stored JSON object in localStorage, initializing.")
    localStorageInit();
  }
}

function updateLocalStorage() {
  localStorage.setItem("wti_data", JSON.stringify(ls)); // Store object as JSON
}

function localStorageInit() {
  ls = {
    settings: {
      gamemode: 3, // Set default gamemode to All Icons
      theme: "auto", // Set default theme to Auto
    },
    stats: {
      icons: new Array(rawIconList.length).fill(0), // Unique correct icons guessed
      highscore: [0, 0, 0, 0], // Per gamemode, in order: [Easy, Medium, Hard, All Icons]
      time: [0, 0, 0, 0], // Time spent playing in ms
      rounds: [0, 0, 0, 0], // Number of rounds played
      guesses: [0, 0, 0, 0] // Total number of correct guesses
    }
  };
  updateLocalStorage();
}

function deleteData() {
  if (confirm("Are you sure you want to reset all data?")) {
    localStorageInit();
    loadApp();
  }
}