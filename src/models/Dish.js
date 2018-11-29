import Ingredient from './Ingredient';

export default class Dish {
  constructor() {
    this.completed = false;
    this.score = 0;
    this.ingredientArray = this.initializeIngredientArray();
  }

  initializeIngredientArray() {
    let masterIngredientList = [
      'Noodles',
      'Pork',
      'Egg',
      'Shallots',
      'Seaweed'
    ];

    let newIngredientArray = [];
    let ingredientCount = 3;

    for (let i = 1; i <= ingredientCount; i++) {
      let randomIndex = Math.floor(Math.random() * masterIngredientList.length);
      let newIngredient = new Ingredient(masterIngredientList[randomIndex]);
      newIngredientArray.push(newIngredient);
      masterIngredientList.splice(randomIndex, 1);
    }

    return newIngredientArray;
  }

  finishDish() {
    // **Refactored using .map**
    // let scoreArray = [];

    // this.ingredientArray.forEach(function(ingredient) {
    //   scoreArray.push(ingredient.getScore());
    // });

    let scoreArray = this.ingredientArray.map(ingredient => ingredient.getScore());

    let reducer = (accumulator, currentValue) => accumulator + currentValue;
    let sum = scoreArray.reduce(reducer);

    let finalScore = parseFloat((Math.round((sum / scoreArray.length) * 4) / 4).toFixed(2));

    this.completed = true;

    return finalScore;
  }
}