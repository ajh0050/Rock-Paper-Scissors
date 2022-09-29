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
      var choices = ['water','fire','grass']
    } else {
      var choices = ['water','fire','grass','ground','electric']
    };

    var choiceIndex = Math.floor(Math.random() * choices.length);
    this.computer.choice = choices[choiceIndex];
  }

  runNormalGame () {
    if (this.human.choice == 'water' && this.computer.choice =='grass') {
      this.computer.wins++
      this.result = `${this.computer.name} wins`
    } else if (this.human.choice == 'water' && this.computer.choice =='fire') {
      this.human.wins++
      this.result = `${this.human.name} wins`
    } else if (this.human.choice == 'fire' && this.computer.choice == 'water'){
      this.computer.wins++
      this.result = `${this.computer.name} wins`
    } else if (this.human.choice == 'fire' && this.computer.choice == 'grass'){
      this.human.wins++
      this.result = `${this.human.name} wins`
    } else if (this.human.choice == 'grass' && this.computer.choice == 'fire'){
      this.computer.wins++
      this.result = `${this.computer.name} wins`
    } else if (this.human.choice == 'grass' && this.computer.choice == 'water'){
      this.human.wins++
      this.result = `${this.human.name} wins`
    } else {
        this.result = `Tie`
    }
  }

  runAdvancedGame() {
    if (this.human.choice == 'water' && (this.computer.choice == 'electric' || this.computer.choice == 'grass')) {
      this.computer.wins++
      this.result = `${this.computer.name} wins`
    } else if (this.human.choice == 'water' && (this.computer.choice == 'fire' || this.computer.choice == 'ground')){
      this.human.wins++
      this.result = `${this.human.name} wins`
    } else if (this.human.choice == 'fire' && (this.computer.choice == 'water' || this.computer.choice == 'ground' )){
      this.computer.wins++
      this.result = `${this.computer.name} wins`
    } else if (this.human.choice == 'fire' && (this.computer.choice == 'electric' || this.computer.choice == 'grass')){
      this.human.wins++
      this.result = `${this.human.name} wins`
    } else if (this.human.choice == 'grass' && (this.computer.choice == 'electric' || this.computer.choice == 'fire')){
      this.computer.wins++
      this.result = `${this.computer.name} wins`
    } else if (this.human.choice == 'grass' && (this.computer.choice == 'ground' || this.computer.choice == 'water')){
      this.human.wins++
      this.result = `${this.human.name} wins`
    } else if (this.human.choice == 'ground' && (this.computer.choice == 'grass' || this.computer.choice == 'water')){
      this.computer.wins++
      this.result = `${this.computer.name} wins`
    } else if (this.human.choice == 'ground' && (this.computer.choice == 'electric' || this.computer.choice == 'fire')){
      this.human.wins++
      this.result = `${this.human.name} wins`
    } else if (this.human.choice == 'electric' && (this.computer.choice == 'fire' || this.computer.choice == 'ground')){
      this.computer.wins++
      this.result = `${this.computer.name} wins`
    } else if (this.human.choice == 'electric' && (this.computer.choice == 'water' || this.computer.choice == 'grass')){
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
