import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function ScoreView(props) {
  return (
    <div className='score-container'>
      <style jsx>{`
        .score-container {
          margin: 10px auto;
          padding: 15px;
          text-align: center;
          padding: 10px;
          color: black;
          border: 1px solid white;
          border-radius: 10px;
          width: 40%;
          background-color: #ffd73a;
        }
      `}</style>
      <div>
        <h3>Chef Score: {props.chefScore}</h3>
        {props.dishScores.map((score) =>
          <h6 key={v4()}>Previous Dish Score: {score}</h6>
        )}
      </div>
    </div>
  );
}

ScoreView.propTypes = {
  dishScores: PropTypes.array.isRequired,
  chefScore: PropTypes.number.isRequired
};

export default ScoreView;