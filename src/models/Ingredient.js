export default class Ingredient {
  constructor(name) {
    this.completed = false;
    this.name = '';
    this.timeToCook = 0;
    this.score = 0;
    this.status = 'Uncooked';
    this.getProperties(name);
    this.currentTimeToCook = this.timeToCook;
  }

  getProperties(ingredientName) {
    let propertyList = [
      {
        name: 'Noodles',
        timeToCook: 8
      },
      {
        name: 'Pork',
        timeToCook: 15
      },
      {
        name: 'Egg',
        timeToCook: 10
      },
      {
        name: 'Shallots',
        timeToCook: 5
      },
      {
        name: 'Seaweed',
        timeToCook: 6
      }
    ];

    propertyList.forEach(ingredient => {
      if (ingredientName == ingredient.name) {
        this.name = ingredient.name;
        this.timeToCook = ingredient.timeToCook;
      }
    });
  }

  moveToNextStatus() {
    let statusArray = ['Uncooked', 'Undercooked', 'Perfectly Cooked', 'Overcooked', 'Burnt'];

    let findIndex = statusArray.indexOf(this.status);
    if (findIndex == statusArray.length - 1) {
      this.finishIngredient();
    } else {
      this.status = statusArray[findIndex + 1];
    }
  }

  finishIngredient() {
    let scorePairs = {
      'Uncooked': 2, 
      'Undercooked': 3, 
      'Perfectly Cooked': 5, 
      'Overcooked': 4, 
      'Burnt': 1
    };

    this.completed = true;
    this.score = scorePairs[this.status];
  }

  timerCountdown() {
    if (this.completed != true) {
      this.currentTimeToCook--;
      if (this.currentTimeToCook < 0) {
        this.moveToNextStatus();
        this.currentTimeToCook = this.timeToCook;
      }
    }
  }

  getScore() {
    if (this.completed == false) {
      this.finishIngredient();
    }
    return this.score;
  }

}