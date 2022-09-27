// Global variables
var human = {name:'Human',token:'🤓'}
var computer = {name:'Computer',token:'🤖'}
var currentGame = new Game(human,computer)

// DOM elements go here
var normalRockIcon = document.querySelector('.normal-rock-icon');
var normalPaperIcon = document.querySelector('.normal-paper-icon');
var normalScissorsIcon = document.querySelector('.normal-scissors-icon');
var humanScoreColumn = document.querySelector('.human-score-column')
var computerScoreColumn = document.querySelector('.computer-score-column')
var advancedRockIcon = document.querySelector('.advanced-rock-icon');
var advancedPaperIcon = document.querySelector('.advanced-paper-icon');
var advancedScissorsIcon = document.querySelector('.advanced-scissors-icon');
var lizardIcon = document.querySelector('.lizard-icon')
var spockIcon = document.querySelector('.spock-icon')

var normalGameView = document.querySelector('.normal-game-view')
var chooseGameModeView = document.querySelector('.choose-game-mode-view')
var advancedGameView = document.querySelector('.advanced-game-view')
var resultView = document.querySelector('.result-view')

var normalGameButton = document.querySelector('.normal-game-button')
var advancedGameButton = document.querySelector('.advanced-game-button')
var changeGameButton = document.querySelector('.change-game-button')
var resetGameButton = document.querySelector('.reset-game-button')

// Event listeners that use anon functions
normalRockIcon.addEventListener('click', function(event){
  event.preventDefault();
  currentGame.makeChoice([event.target.id]);
  currentGame.runNormalGame();
  updateScores();
  showResult();
})

normalPaperIcon.addEventListener('click', function(event){
  event.preventDefault();
  currentGame.makeChoice([event.target.id]);
  currentGame.runNormalGame();
  updateScores();
  showResult();
})

normalScissorsIcon.addEventListener('click', function(event){
  event.preventDefault();
  currentGame.makeChoice([event.target.id]);
  currentGame.runNormalGame();
  updateScores();
  showResult();
})

advancedRockIcon.addEventListener('click', function(event){
  event.preventDefault();
  currentGame.makeChoice([event.target.id]);
  currentGame.runAdvancedGame();
  updateScores();
  showResult();
})

advancedPaperIcon.addEventListener('click', function(event){
  event.preventDefault();
  currentGame.makeChoice([event.target.id]);
  currentGame.runAdvancedGame();
  updateScores();
  showResult();
})

advancedScissorsIcon.addEventListener('click', function(event){
  event.preventDefault();
  currentGame.makeChoice([event.target.id]);
  currentGame.runAdvancedGame();
  updateScores();
  showResult();
})

lizardIcon.addEventListener('click', function(event){
  event.preventDefault();
  currentGame.makeChoice([event.target.id]);
  currentGame.runAdvancedGame();
  updateScores();
  showResult();
})

spockIcon.addEventListener('click', function(event){
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
    You chose - ${currentGame.human.choice} <br />
    Computer chose - ${currentGame.computer.choice} <br />
  </p>
  `;
  resultView.className = "result-view"
  normalGameView.className = "normal-game-view hidden"
  chooseGameModeView.className = "choose-game-mode-view hidden"
  advancedGameView.className = "advanced-game-view hidden"
  changeGameButton.className = "change-game-button button hidden"
  resetGameButton.className = "reset-game-button button hidden"
  if (currentGame.advancedGame){
    setTimeout(timeoutAdvancedView, 2500)
  } else {
    setTimeout(timeoutNormalView, 2500)
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
  humanScoreColumn.innerHTML = `
  <h3 class="human-token score-token">${currentGame.human.token}</h3>
  <p class="human-title score-contents">${currentGame.human.name}</p>
  <p class="human-score-number score-contents">Wins: ${currentGame.human.wins}</p>
  `

  computerScoreColumn.innerHTML = `
  <h3 class="computer-token score-token">${currentGame.computer.token}</h3>
  <p class="computer-title score-contents">${currentGame.computer.name}</p>
  <p class="computer-score-number score-contents">Wins: ${currentGame.computer.wins}</p>
  `
}
