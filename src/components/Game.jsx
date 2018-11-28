import React from 'react';
import Chef from '../models/Chef';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chef: new Chef()
    }
    this.addRandomScore = this.addRandomScore.bind(this);
  }

  addRandomScore() {
    this.state.chef.addRandomScore();
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
        <button onClick={this.addRandomScore} className='btn btn-info'>TEST ADD RANDOM</button>
      </div>
    );
  }
}

export default Game;