import ChefPic from '../assets/Chef.gif';

export default class Chef {
  constructor() {
    this.dishScores = [];
    this.score = 0;
    this.picture = ChefPic;
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
  }

}