import BearChef from '../assets/BearChef.jpg';

export default class Chef {
  constructor() {
    this.dishScores = [];
    this.score = 0;
    this.picture = BearChef;
  }

  calculateScore() {
    if (this.dishScores.length == 0) {
      this.score = 0;
    } else if (this.dishScores.length == 1) {
      this.score =  this.dishScores[0];
    } else {
      let getAverage = (accumulator, currentScore) => accumulator + currentScore;
      let averageScore = this.dishScores.reduce(getAverage);
      averageScore = parseFloat((Math.round((averageScore / this.dishScores.length) * 4) / 4).toFixed(2));
      this.score =  averageScore;
    }
  }

  addNewDishScore(score) {
    this.dishScores.push(score);
    this.calculateScore();
    console.log(this.dishScores);
    console.log(`Score: ${this.score}`);
  }

  // Temporary Function for testing
  addRandomScore() {
    let randomNumber = (Math.random() * (5 - 1) + 1);
    let roundedNumber = parseFloat((Math.round(randomNumber * 4) / 4).toFixed(2));
    console.log(`Random = ${randomNumber}, Rounded = ${roundedNumber}`);
    this.addNewDishScore(roundedNumber);
  }
}