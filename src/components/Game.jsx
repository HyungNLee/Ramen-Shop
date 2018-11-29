import React from 'react';
import Chef from '../models/Chef';
import Dish from '../models/Dish';
import Ingredients from './Ingredients';
import ScoreView from './ScoreView';
import RamenBG from '../assets/Ramen_BG.jpg';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chef: new Chef(),
      dish: null
    };
    this.ingredientTimer = null;
    this.handleAddNewDishScore = this.handleAddNewDishScore.bind(this);

    this.handleNewDish = this.handleNewDish.bind(this);
    this.handleIngredientTimers = this.handleIngredientTimers.bind(this);
    this.handleUpdateIngredient = this.handleUpdateIngredient.bind(this);
    this.handleEndIngredientTimer = this.handleEndIngredientTimer.bind(this);
    this.handleFinishDish = this.handleFinishDish.bind(this);
    this.handleFinishSingleIngredient = this.handleFinishSingleIngredient.bind(this);

    this.ingredientView = null;
    this.dishButtonView = null;
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
        <ScoreView
          chefScore={this.state.chef.score}
          dishScores={this.state.chef.dishScores}
        />
      </div>;
  }

  handleNewDish() {
    let newDish = new Dish();
    this.setState({ dish: newDish });
    this.handleIngredientTimers();
  }

  handleIngredientTimers() {
    if (this.ingredientTimer == null) {
      this.ingredientTimer = setInterval(() =>
        this.handleUpdateIngredient(),
      1000
      );
    }
  }

  handleEndIngredientTimer() {
    clearInterval(this.ingredientTimer);
    this.ingredientTimer = null;
  }

  handleUpdateIngredient() {
    let newDish = this.state.dish;
    for(let key in newDish.ingredientList) {
      newDish.ingredientList[key].timerCountdown();
    }
    // newDish.ingredientList.forEach((ingredient) =>
    //   ingredientList[ingredient].timerCountdown()
    // );
    this.setState({ dish: newDish });
  }

  handleFinishDish() {
    let currentDish = this.state.dish;
    let dishScore = currentDish.finishDish();
    this.handleAddNewDishScore(dishScore);
  }

  handleFinishSingleIngredient(key) {
    let currentDish = this.state.dish;
    currentDish.ingredientList[key].finishIngredient();
    this.setState({
      dish: currentDish
    });
  }

  render() {
    let buttonStyles = {
      margin: '10px'
    };

    if (this.state.dish != null) {
      this.ingredientView =
        <div className='ingredient-container'>
          {Object.keys(this.state.dish.ingredientList).map((key) =>
            <Ingredients
              ingredient={this.state.dish.ingredientList[key]}
              onFinishSingleIngredient={this.handleFinishSingleIngredient}
              key={key}
              uniqueId={key}
            />
          )}
        </div>;
      this.dishButtonView = <button style={buttonStyles} onClick={this.handleFinishDish} className='btn btn-info'>Finish Cooking Ramen!</button>;
    } else {
      this.dishButtonView = <button style={buttonStyles} onClick={this.handleNewDish} className='btn btn-info'>Start New Dish</button>;
    }

    return (
      <div className='game-board'>
        <style jsx>{`
          .game-board {
            padding: 15px;
          }
          .chef-info-container {
            border: 1px solid #d8302b;
            border-radius: 15px;
            padding: 15px;
            text-align: center;
            background-image: url(${RamenBG});
            background-size: cover;
            background-repeat: no-repeat;
          }
          img {
            width: 35%;
            border-radius: 50%;
          }
          .score-style {
            color: white;
            text-shadow: 1px 1px 1px #000000;
          }
        `}</style>
        <div className='chef-info-container'>
          <img src={this.state.chef.picture} />
          <h3 className='score-style'>Score: {this.state.chef.score}/5</h3>
          {this.dishButtonView}
        </div>
        {this.ingredientView}
      </div>
    );
  }
}

export default Game;