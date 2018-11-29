import React from 'react';
import PropTypes from 'prop-types';

function ScoreView(props) {
  return (
    <div className='score-container'>
      <style jsx>{`
        .score-container {

        }
      `}</style>
      <div>
        <h6>Past Score: {props.score}</h6>
      </div>
    </div>
  );
}

ScoreView.propTypes = {

}

export default ScoreView;