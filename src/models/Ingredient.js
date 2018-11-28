export default class Ingredient {
  constructor(name) {
    this.completed = false;
    this.name = '';
    this.timeToCook = 0;
    this.getProperties(name);
  }

  getProperties(ingredientName) {
    let propertyList = [
      {
        name: 'Noodles',
        timeToCook: 10
      },
      {
        name: 'Pork',
        timeToCook: 30
      },
      {
        name: 'Egg',
        timeToCook: 15
      },
      {
        name: 'Shallots',
        timeToCook: 10
      },
      {
        name: 'Seaweed',
        timeToCook: 20
      }
    ];

    propertyList.forEach(ingredient => {
      if (ingredientName == ingredient.name) {
        this.name = ingredient.name;
        this.timeToCook = ingredient.timeToCook;
      }
    });
  }

}