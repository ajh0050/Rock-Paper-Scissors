// Global variables
var human = {name:'Player1'}
var computer = {name:'Gary'}
var currentGame = new Game(human,computer)

// DOM elements go here
var normalWaterIcon = document.querySelector('.normal-Water-icon');
var normalFireIcon = document.querySelector('.normal-Fire-icon');
var normalGrassIcon = document.querySelector('.normal-Grass-icon');
var humanScoreColumn = document.querySelector('.human-score-column')
var computerScoreColumn = document.querySelector('.computer-score-column')
var advancedWaterIcon = document.querySelector('.advanced-Water-icon');
var advancedFireIcon = document.querySelector('.advanced-Fire-icon');
var advancedGrassIcon = document.querySelector('.advanced-Grass-icon');
var groundIcon = document.querySelector('.Ground-icon')
var electricIcon = document.querySelector('.Electric-icon')
var humanScore = document.querySelector('.human-score-number')
var computerScore = document.querySelector('.computer-score-number')

var normalGameView = document.querySelector('.normal-game-view')
var chooseGameModeView = document.querySelector('.choose-game-mode-view')
var advancedGameView = document.querySelector('.advanced-game-view')
var resultView = document.querySelector('.result-view')

var normalGameButton = document.querySelector('.normal-game-button')
var advancedGameButton = document.querySelector('.advanced-game-button')
var changeGameButton = document.querySelector('.change-game-button')
var resetGameButton = document.querySelector('.reset-game-button')

// Event listeners that use anon functions
normalWaterIcon.addEventListener('click', function(event){
  event.preventDefault();
  currentGame.makeChoice([event.target.id]);
  currentGame.runNormalGame();
  updateScores();
  showResult();
})

normalFireIcon.addEventListener('click', function(event){
  event.preventDefault();
  currentGame.makeChoice([event.target.id]);
  currentGame.runNormalGame();
  updateScores();
  showResult();
})

normalGrassIcon.addEventListener('click', function(event){
  event.preventDefault();
  currentGame.makeChoice([event.target.id]);
  currentGame.runNormalGame();
  updateScores();
  showResult();
})

advancedWaterIcon.addEventListener('click', function(event){
  event.preventDefault();
  currentGame.makeChoice([event.target.id]);
  currentGame.runAdvancedGame();
  updateScores();
  showResult();
})

advancedFireIcon.addEventListener('click', function(event){
  event.preventDefault();
  currentGame.makeChoice([event.target.id]);
  currentGame.runAdvancedGame();
  updateScores();
  showResult();
})

advancedGrassIcon.addEventListener('click', function(event){
  event.preventDefault();
  currentGame.makeChoice([event.target.id]);
  currentGame.runAdvancedGame();
  updateScores();
  showResult();
})

groundIcon.addEventListener('click', function(event){
  event.preventDefault();
  currentGame.makeChoice([event.target.id]);
  currentGame.runAdvancedGame();
  updateScores();
  showResult();
})

electricIcon.addEventListener('click', function(event){
  event.preventDefault();
  currentGame.makeChoice([event.target.id]);
  currentGame.runAdvancedGame();
  updateScores();
  showResult();
})

// Event listeners that use event handler functions
normalGameButton.addEventListener('click', showNormalGameView)
advancedGameButton.addEventListener('click', showAdvancedGameView)
changeGameButton.addEventListener('click', changeGameModeView)
resetGameButton.addEventListener('click', resetGameScore)

function showNormalGameView(event) {
  event.preventDefault();
  currentGame.advancedGame = false;
  normalGameView.className = "normal-game-view"
  chooseGameModeView.className = "choose-game-mode-view hidden"
  advancedGameView.className = "advanced-game-view hidden"
  resultView.className = "result-view hidden"
  changeGameButton.className = "change-game-button button"
  resetGameButton.className = "reset-game-button button"
}

function showAdvancedGameView (event) {
  event.preventDefault();
  currentGame.advancedGame = true;
  normalGameView.className = "normal-game-view hidden"
  chooseGameModeView.className = "choose-game-mode-view hidden"
  advancedGameView.className = "advanced-game-view"
  resultView.className = "result-view hidden"
  changeGameButton.className = "change-game-button button"
  resetGameButton.className = "reset-game-button button"
}

function changeGameModeView(event) {
event.preventDefault();
normalGameView.className = "normal-game-view hidden"
advancedGameView.className = "advanced-game-view hidden"
resultView.className = "result-view hidden"
chooseGameModeView.className = "choose-game-mode-view"
changeGameButton.className = "change-game-button button hidden"
resetGameButton.className = "reset-game-button button"
}

function resetGameScore() {
  currentGame.resetGame()
  updateScores()
}

// Additional DOM manipulation functions
function showResult () {
  resultView.innerHTML = `
  <h1 class="result-title">${currentGame.result}</h1>
  <p class="result-choices">
    <img class="result-icon icon" src="./assets/${currentGame.human.choice}.png" />
    <img class="result-icon icon" src="./assets/${currentGame.computer.choice}.png" />
  </p>
  `;
  resultView.className = "result-view"
  normalGameView.className = "normal-game-view hidden"
  chooseGameModeView.className = "choose-game-mode-view hidden"
  advancedGameView.className = "advanced-game-view hidden"
  changeGameButton.className = "change-game-button button hidden"
  resetGameButton.className = "reset-game-button button hidden"
  if (currentGame.advancedGame){
    setTimeout(timeoutAdvancedView, 3000)
  } else {
    setTimeout(timeoutNormalView, 3000)
  }
}

function timeoutNormalView () {
  normalGameView.className = "normal-game-view"
  chooseGameModeView.className = "choose-game-mode-view hidden"
  advancedGameView.className = "advanced-game-view hidden"
  resultView.className = "result-view hidden"
  changeGameButton.className = "change-game-button button"
  resetGameButton.className = "reset-game-button button"
}

function timeoutAdvancedView () {
  normalGameView.className = "normal-game-view hidden"
  chooseGameModeView.className = "choose-game-mode-view hidden"
  advancedGameView.className = "advanced-game-view"
  resultView.className = "result-view hidden"
  changeGameButton.className = "change-game-button button"
  resetGameButton.className = "reset-game-button button"
}

function updateScores(){
  humanScore.innerText = `Wins: ${currentGame.human.wins}`;
  computerScore.innerText = `Wins: ${currentGame.computer.wins}`;
}
