import React from 'react';
import PropTypes from 'prop-types';

function ScoreView(props) {
  return (
    <div className='score-container'>
      <style jsx>{`
        .score-container {
          text-align: center;
          padding: 10px;
          color: white;
          border: 1px solid white;
        }
      `}</style>
      <div>
        <h3>Chef Score: {props.chefScore}</h3>
        <h6>Past Score: {props.score}</h6>
      </div>
    </div>
  );
}

ScoreView.propTypes = {
  score: PropTypes.number.isRequired,
  chefScore: PropTypes.number.isRequired
};

export default ScoreView;