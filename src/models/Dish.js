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

    for (let i = 1; i <=3; i++) {
      let randomIndex = Math.floor(Math.random() * masterIngredientList.length);
      let newIngredient = new Ingredient(masterIngredientList[randomIndex]);
      newIngredientArray.push(newIngredient);
      masterIngredientList.splice(randomIndex, 1);
    }

    return newIngredientArray;
  }
}