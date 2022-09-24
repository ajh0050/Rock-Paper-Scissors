class Game {
  constructor (player1, player2) {
    this.human = new Player(player1);
    this.computer = new Player(player2);
    this.advancedGame = false;
  }
  makeChoice(choice){
    this.human.choice = choice;

    var choices = ['rock','paper','scissors']
    var choiceIndex = Math.floor(Math.random() * choices.length);
    console.log('computerChoice',[choices[choiceIndex]])
    this.computer.choice = [choices[choiceIndex]];
  }
  runNormalGame () {
    if (this.human.choice == this.computer.choice) {
      return console.log(`this is a tie`)
    }

    if (this.human.choice == 'paper' && this.computer.choice =='rock') {
      this.human.wins++
      return console.log(`${this.human.name} wins`)
    }

    if (this.computer.choice == 'paper' && this.human.choice =='rock') {
      this.computer.wins++
      return console.log(`${this.computer.name} wins`)
    }

    if (this.human.choice == 'scissors' && this.computer.choice == 'rock'){
      this.computer.wins++
      return console.log(`${this.computer.name} wins`)
    }

    if (this.computer.choice == 'scissors' && this.human.choice == 'rock'){
      this.human.wins++
      return console.log(`${this.human.name} wins`)
    }

    if (this.human.choice == 'scissors' && this.computer.choice == 'paper'){
      this.human.wins++
      return console.log(`${this.human.name} wins`)
    }

    if (this.computer.choice == 'scissors' && this.human.choice == 'paper'){
      this.computer.wins++
      return console.log(`${this.computer.name} wins`)
    }
  }
  resetGame(){
    this.human.wins = 0;
    this.computer.wins = 0;
  }
}
