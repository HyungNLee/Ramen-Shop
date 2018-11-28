import React from 'react';
import Chef from '../models/Chef';
import Dish from '../models/Dish';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chef: new Chef(),
      dish: null
    }
    this.handleAddRandomScore = this.handleAddRandomScore.bind(this);
    this.handleNewDish = this.handleNewDish.bind(this);
  }

  handleAddRandomScore() {
    let newChef = this.state.chef
    newChef.addRandomScore();
    this.setState({chef: newChef});
  }

  handleNewDish() {
    let newDish = new Dish();
    this.setState({dish: newDish});
    console.log(newDish);
  }

  render() {
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
        </div>
        <button onClick={this.handleAddRandomScore} className='btn btn-info'>TEST ADD RANDOM</button>
        <button onClick={this.handleNewDish} className='btn btn-info'>NEW DISH</button>
      </div>
    );
  }
}

export default Game;