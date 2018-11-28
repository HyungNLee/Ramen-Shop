import BearChef from '../assets/BearChef.jpg';

export default class Chef {
  constructor() {
    this.dishScores = [];
    this.score = this.calculateScore();
    this.picture = BearChef;
  }

  calculateScore() {
    if (this.dishScores.length == 0) {
      return 0;
    } else if (this.dishScores.length == 1) {
      return this.dishScores[0];
    } else {
      let getAverage = (accumulator, currentScore) => accumulator + currentScore;
      let averageScore = this.dishScores.reduce(getAverage);
      averageScore = averageScore / this.dishScores.length;
      return averageScore;
    }
  }

  addNewDishScore(score) {
    this.dishScores.push(score);
    console.log(this.dishScores);
  }

  // Temporary Function for testing
  addRandomScore() {
    let randomNumber = (Math.random() * 5 + 1);
    let roundedNumber = (Math.round(randomNumber * 4) / 4).toFixed(2);
    console.log(`Random = ${randomNumber}, Rounded = ${roundedNumber}`);
    this.addNewDishScore(roundedNumber);
  }
}