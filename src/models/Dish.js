import Ingredient from './Ingredient';
import { v4 } from 'uuid';

export default class Dish {
  constructor() {
    this.completed = false;
    this.score = 0;
    this.ingredientList = this.initializeIngredientList();
  }

  initializeIngredientList() {
    let masterIngredientList = [
      'Noodles',
      'Pork',
      'Egg',
      'Shallots',
      'Seaweed'
    ];

    let newIngredientList = {};
    let ingredientCount = 3;

    for (let i = 1; i <= ingredientCount; i++) {
      let randomIndex = Math.floor(Math.random() * masterIngredientList.length);
      let newIngredient = new Ingredient(masterIngredientList[randomIndex]);

      newIngredientList = Object.assign({}, newIngredientList, {
        [v4()]: newIngredient
      });

      masterIngredientList.splice(randomIndex, 1);
    }
    return newIngredientList;
  }

  finishDish() {
    // **Refactored using .map**
    // let scoreArray = [];

    // this.ingredientArray.forEach(function(ingredient) {
    //   scoreArray.push(ingredient.getScore());
    // });

    let scoreArray = Object.keys(this.ingredientList).map(key => this.ingredientList[key].getScore());

    let reducer = (accumulator, currentValue) => accumulator + currentValue;
    let sum = scoreArray.reduce(reducer);

    let finalScore = parseFloat((Math.round((sum / scoreArray.length) * 4) / 4).toFixed(2));

    this.completed = true;

    return finalScore;
  }
}