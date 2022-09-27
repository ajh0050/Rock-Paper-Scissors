var human = {name:'Human',token:'🤓'}
var computer = {name:'Computer',token:'🤖'}
var currentGame = new Game(human,computer)

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
console.log(changeGameButton);

// window.addEventListener('load', chooseGameModeView)
normalGameButton.addEventListener('click', showNormalGameView)
advancedGameButton.addEventListener('click', showAdvancedGameView)
changeGameButton.addEventListener('click', changeGameModeView)

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

function showResult () {
  resultView.innerHTML = `
  <h1 class="result-title">${currentGame.result}</h1>
  `;
  resultView.className = "result-view"
  normalGameView.className = "normal-game-view hidden"
  chooseGameModeView.className = "choose-game-mode-view hidden"
  advancedGameView.className = "advanced-game-view hidden"
  changeGameButton.className = "change-game-button hidden"
  if (currentGame.advancedGame){
    setTimeout(timeoutAdvancedView, 3000)
  } else {
    setTimeout(timeoutNormalView, 3000)
  }

}

function showAdvancedGameView (event) {
  event.preventDefault();
  currentGame.advancedGame = true;
  normalGameView.className = "normal-game-view hidden"
  chooseGameModeView.className = "choose-game-mode-view hidden"
  advancedGameView.className = "advanced-game-view"
  resultView.className = "result-view hidden"
  changeGameButton.className = "change-game-button"
}

function timeoutAdvancedView () {
  normalGameView.className = "normal-game-view hidden"
  chooseGameModeView.className = "choose-game-mode-view hidden"
  advancedGameView.className = "advanced-game-view"
  resultView.className = "result-view hidden"
  changeGameButton.className = "change-game-button"
}

function changeGameModeView(event) {
event.preventDefault();
normalGameView.className = "normal-game-view hidden"
advancedGameView.className = "advanced-game-view hidden"
resultView.className = "result-view hidden"
chooseGameModeView.className = "choose-game-mode-view"
changeGameButton.className = "change-game-button hidden"
}

function showNormalGameView(event) {
  event.preventDefault();
  currentGame.advancedGame = false;
  normalGameView.className = "normal-game-view"
  chooseGameModeView.className = "choose-game-mode-view hidden"
  advancedGameView.className = "advanced-game-view hidden"
  resultView.className = "result-view hidden"
  changeGameButton.className = "change-game-button"
}

function timeoutNormalView () {
  normalGameView.className = "normal-game-view"
  chooseGameModeView.className = "choose-game-mode-view hidden"
  advancedGameView.className = "advanced-game-view hidden"
  resultView.className = "result-view hidden"
  changeGameButton.className = "change-game-button"
}

function updateScores(){
  humanScoreColumn.innerHTML = `
  <h2 class="human-title">${currentGame.human.name}</h2>
  <h3 class="human-token">${currentGame.human.token}</h3>
  <p class="human-score-number">${currentGame.human.wins}</p>
  `

  computerScoreColumn.innerHTML = `
  <h2 class="computer-title">${currentGame.computer.name}</h2>
  <h3 class="computer-token">${currentGame.computer.token}</h3>
  <p class="computer-score-number">${currentGame.computer.wins}</p>
  `
}
