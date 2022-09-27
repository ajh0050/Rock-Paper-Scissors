class Game {
  constructor (player1, player2) {
    this.human = new Player(player1);
    this.computer = new Player(player2);
    this.advancedGame = false;
    this.result = null;
  }
  makeChoice(choice){
    this.human.choice = choice;
    if (!this.advancedGame) {
      var choices = ['rock','paper','scissors']
    } else {
      var choices = ['rock','paper','scissors','lizard','spock']
    };

    var choiceIndex = Math.floor(Math.random() * choices.length);
    this.computer.choice = choices[choiceIndex];
  }

  runNormalGame () {
    if (this.human.choice == 'rock' && this.computer.choice =='scissors') {
      this.human.wins++
      this.result = `${this.human.name} wins`
    } else if (this.human.choice == 'rock' && this.computer.choice =='paper') {
      this.computer.wins++
      this.result = `${this.computer.name} wins`
    } else if (this.human.choice == 'paper' && this.computer.choice == 'rock'){
      this.human.wins++
      this.result = `${this.computer.name} wins`
    } else if (this.human.choice == 'paper' && this.computer.choice == 'scissors'){
      this.computer.wins++
      this.result = `${this.computer.name} wins`
    } else if (this.human.choice == 'scissors' && this.computer.choice == 'paper'){
      this.human.wins++
      this.result = `${this.human.name} wins`
    } else if (this.human.choice == 'scissors' && this.computer.choice == 'rock'){
      this.computer.wins++
      this.result = `${this.computer.name} wins`
    } else {
        this.result = `Tie`
    }
  }

  runAdvancedGame() {
    if (this.human.choice == 'rock' && (this.computer.choice == 'spock' || this.computer.choice == 'paper')) {
      this.computer.wins++
      this.result = `${this.computer.name} wins`
    } else if (this.human.choice == 'rock' && (this.computer.choice == 'scissors' || this.computer.choice == 'lizard')){
      this.human.wins++
      this.result = `${this.human.name} wins`
    } else if (this.human.choice == 'paper' && (this.computer.choice == 'scissors' || this.computer.choice == 'lizard' )){
      this.computer.wins++
      this.result = `${this.computer.name} wins`
    } else if (this.human.choice == 'paper' && (this.computer.choice == 'spock' || this.computer.choice == 'rock')){
      this.human.wins++
      this.result = `${this.human.name} wins`
    } else if (this.human.choice == 'scissors' && (this.computer.choice == 'spock' || this.computer.choice == 'rock')){
      this.computer.wins++
      this.result = `${this.computer.name} wins`
    } else if (this.human.choice == 'scissors' && (this.computer.choice == 'lizard' || this.computer.choice == 'paper')){
      this.human.wins++
      this.result = `${this.human.name} wins`
    } else if (this.human.choice == 'lizard' && (this.computer.choice == 'scissors' || this.computer.choice == 'rock')){
      this.computer.wins++
      this.result = `${this.computer.name} wins`
    } else if (this.human.choice == 'lizard' && (this.computer.choice == 'spock' || this.computer.choice == 'paper')){
      this.human.wins++
      this.result = `${this.human.name} wins`
    } else if (this.human.choice == 'spock' && (this.computer.choice == 'paper' || this.computer.choice == 'lizard')){
      this.computer.wins++
      this.result = `${this.computer.name} wins`
    } else if (this.human.choice == 'spock' && (this.computer.choice == 'rock' || this.computer.choice == 'scissors')){
      this.human.wins++
      this.result = `${this.human.name} wins`
    } else {
      this.result = `Tie`
    }
  }

  resetGame(){
    this.human.wins = 0;
    this.computer.wins = 0;
  }
}
