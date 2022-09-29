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
      var choices = ['Water','Fire','Grass']
    } else {
      var choices = ['Water','Fire','Grass','Ground','Electric']
    };

    var choiceIndex = Math.floor(Math.random() * choices.length);
    this.computer.choice = choices[choiceIndex];
  }

  runNormalGame () {
    if (this.human.choice == 'Water' && this.computer.choice =='Grass') {
      this.computer.wins++
      this.result = `${this.computer.name} wins`
    } else if (this.human.choice == 'Water' && this.computer.choice =='Fire') {
      this.human.wins++
      this.result = `${this.human.name} wins`
    } else if (this.human.choice == 'Fire' && this.computer.choice == 'Water'){
      this.computer.wins++
      this.result = `${this.computer.name} wins`
    } else if (this.human.choice == 'Fire' && this.computer.choice == 'Grass'){
      this.human.wins++
      this.result = `${this.human.name} wins`
    } else if (this.human.choice == 'Grass' && this.computer.choice == 'Fire'){
      this.computer.wins++
      this.result = `${this.computer.name} wins`
    } else if (this.human.choice == 'Grass' && this.computer.choice == 'Water'){
      this.human.wins++
      this.result = `${this.human.name} wins`
    } else {
        this.result = `Tie`
    }
  }

  runAdvancedGame() {
    if (this.human.choice == 'Water' && (this.computer.choice == 'Electric' || this.computer.choice == 'Grass')) {
      this.computer.wins++
      this.result = `${this.computer.name} wins`
    } else if (this.human.choice == 'Water' && (this.computer.choice == 'Fire' || this.computer.choice == 'Ground')){
      this.human.wins++
      this.result = `${this.human.name} wins`
    } else if (this.human.choice == 'Fire' && (this.computer.choice == 'Water' || this.computer.choice == 'Ground' )){
      this.computer.wins++
      this.result = `${this.computer.name} wins`
    } else if (this.human.choice == 'Fire' && (this.computer.choice == 'Electric' || this.computer.choice == 'Grass')){
      this.human.wins++
      this.result = `${this.human.name} wins`
    } else if (this.human.choice == 'Grass' && (this.computer.choice == 'Electric' || this.computer.choice == 'Fire')){
      this.computer.wins++
      this.result = `${this.computer.name} wins`
    } else if (this.human.choice == 'Grass' && (this.computer.choice == 'Ground' || this.computer.choice == 'Water')){
      this.human.wins++
      this.result = `${this.human.name} wins`
    } else if (this.human.choice == 'Ground' && (this.computer.choice == 'Grass' || this.computer.choice == 'Water')){
      this.computer.wins++
      this.result = `${this.computer.name} wins`
    } else if (this.human.choice == 'Ground' && (this.computer.choice == 'Electric' || this.computer.choice == 'Fire')){
      this.human.wins++
      this.result = `${this.human.name} wins`
    } else if (this.human.choice == 'Electric' && (this.computer.choice == 'Fire' || this.computer.choice == 'Ground')){
      this.computer.wins++
      this.result = `${this.computer.name} wins`
    } else if (this.human.choice == 'Electric' && (this.computer.choice == 'Water' || this.computer.choice == 'Grass')){
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
