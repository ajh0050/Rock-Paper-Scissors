var human = {name:'Human',token:'🤓'}
var computer = {name:'Computer',token:'🤖'}
var currentGame = new Game(human,computer)

var rockIcon = document.querySelector('.rock-icon');
var paperIcon = document.querySelector('.paper-icon');
var scissorsIcon = document.querySelector('.scissors-icon');
var humanScoreColumn = document.querySelector('.human-score-column')
var computerScoreColumn = document.querySelector('.computer-score-column')
var normalGameView = document.querySelector('.normal-game-view')
var normalGameButton = document.querySelector('.normal-game-button')
var chooseGameModeView = document.querySelector('.choose-game-mode-view')

window.addEventListener('load', chooseGameModeView)
normalGameButton.addEventListener('click', showRockPaperScissorsView)

rockIcon.addEventListener('click', function(event){
  event.preventDefault();
  currentGame.makeChoice([event.target.id])
  currentGame.runNormalGame()
  updateScores()
})

paperIcon.addEventListener('click', function(event){
  event.preventDefault();
  currentGame.makeChoice([event.target.id])
  currentGame.runNormalGame()
  updateScores()
})

scissorsIcon.addEventListener('click', function(event){
  event.preventDefault();
  currentGame.makeChoice([event.target.id])
  currentGame.runNormalGame()
  updateScores()
  console.log('currentGame', currentGame);
})


function chooseGameModeView() {
normalGameView.className = "normal-game-view hidden"}

function showRockPaperScissorsView(event) {
  event.preventDefault();
  normalGameView.className = "normal-game-view"
  chooseGameModeView.className = "choose-game-mode-view hidden"

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
