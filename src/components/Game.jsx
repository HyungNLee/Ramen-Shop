import React from 'react';
import Chef from '../models/Chef';
import Dish from '../models/Dish';
import Ingredients from './Ingredients';
import ScoreView from './ScoreView';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chef: new Chef(),
      dish: null
    }
    this.ingredientTimer = null;
    this.handleAddNewDishScore = this.handleAddNewDishScore.bind(this);
    this.handleAddRandomScore = this.handleAddRandomScore.bind(this);
    this.handleNewDish = this.handleNewDish.bind(this);
    this.handleIngredientTimers = this.handleIngredientTimers.bind(this);
    this.handleUpdateIngredient = this.handleUpdateIngredient.bind(this);
    this.handleEndIngredientTimer = this.handleEndIngredientTimer.bind(this);
    this.handleFinishDish = this.handleFinishDish.bind(this);

    this.ingredientView = null;
  }

  handleAddNewDishScore(score) {
    let newChef = this.state.chef;
    newChef.addNewDishScore(score);
    this.handleEndIngredientTimer();
    this.setState({
      chef: newChef,
      dish: null
    });

    this.ingredientView =
      <div>
        <h3>Chef Score: {this.state.chef.score}</h3>
        {this.state.chef.dishScores.map((score, index) =>
          <ScoreView
            score={score}
            key={index}
          />
        )}
      </div>
  }

  handleAddRandomScore() {
    let newChef = this.state.chef
    newChef.addRandomScore();
    this.setState({ chef: newChef });
  }

  handleNewDish() {
    let newDish = new Dish();
    this.setState({ dish: newDish });
    this.handleIngredientTimers();
  }

  handleIngredientTimers() {
    this.ingredientTimer = setInterval(() =>
      this.handleUpdateIngredient(),
      1000
    );
  }

  handleEndIngredientTimer() {
    clearInterval(this.ingredientTimer);
  }

  handleUpdateIngredient() {
    let newDish = this.state.dish;
    newDish.ingredientArray.forEach((ingredient) =>
      ingredient.timerCountdown()
    );
    this.setState({ dish: newDish });
  }

  handleFinishDish() {
    let currentDish = this.state.dish;
    let dishScore = currentDish.finishDish();
    this.handleAddNewDishScore(dishScore);
  }

  render() {

    if (this.state.dish != null) {
      this.ingredientView =
        <div className='ingredient-container'>
          {this.state.dish.ingredientArray.map((ingredient, index) =>
            <Ingredients
              ingredient={ingredient}
              key={index}
            />
          )}
        </div>
    }

    return (
      <div className='game-board'>
        <style jsx>{`
          .game-board {
            border: 1px solid green;
          }
          .chef-info-container {
            border: 1px solid blue;
          }
        `}</style>
        <div className='chef-info-container'>
          <img src={this.state.chef.picture} />
          <p>Score: {this.state.chef.score}</p>
          <button onClick={this.handleFinishDish} className='btn btn-info'>TEST ADD CURRENT SCORE</button>
          <button onClick={this.handleAddRandomScore} className='btn btn-info'>TEST ADD RANDOM</button>
          <button onClick={this.handleNewDish} className='btn btn-info'>NEW DISH</button>
        </div>
        {this.ingredientView}
      </div>
    );
  }
}

export default Game;