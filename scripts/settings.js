let currentGamemode;
let currentTheme;

function loadSettings() {
  setGamemode(ls.settings.gamemode);
  setTheme(ls.settings.theme);

  document.getElementById(`gamemode-${currentGamemode}`).checked = true;
  document.getElementById(`theme-${currentTheme}`).checked = true;
}

function setGamemode(value) {
  currentGamemode = value;
  setHighscore(ls.stats.highscore[currentGamemode], currentGamemode);
}

function setTheme(value) {
  currentTheme = value;
  document.documentElement.setAttribute("color-theme", currentTheme);
}

function saveSettings() {
  ls.settings.gamemode = currentGamemode;
  ls.settings.theme = currentTheme;
  updateLocalStorage();
  toggleOverlay();
}

// Renders radio buttons for difficulty and theme selection
gamemodeSettingButtons.forEach(button => {
  button.addEventListener("change", () => {
    setGamemode(button.value);
  })
});
themeSettingButtons.forEach(button => {
  button.addEventListener("change", () => {
    setTheme(button.value);
  })
});