import React from 'react';
import PropTypes from 'prop-types';
import WoodGrain from '../assets/Wood_Grain_BG.jpg';

function Ingredients(props) {

  function onSingleFinishIngredient() {
    props.onFinishSingleIngredient(props.index);
  }

  let progressBarColor = {
    'Uncooked': 'orange',
    'Undercooked': 'yellow',
    'Perfectly Cooked': 'green',
    'Overcooked': 'yellow',
    'Burnt': 'red'
  };

  let finishedCooking = null;
  if (props.ingredient.completed) {
    finishedCooking = 'Completed';
  } else {
    finishedCooking = 'Cooking';
  }

  return (
    <div className='ingredient-box'>
      <style jsx>{`
        .ingredient-box {
          border: 1px solid black;
          background-image: url(${WoodGrain});
          background-repeat: no-repeat;
          background-size: cover;
          border-radius: 10px;
          width: 80%;
          margin: 10px auto;
        }
        .ingredient-body {
          text-align: center;
          font-size 20px;
          color: white;
          text-shadow: 1px 1px 1px #000000;
        }
        .progress {
          width: 80%;
          height: 30px;
          margin: 0px auto;
        }
        .progress-bar {
          width: ${props.ingredient.currentTimeToCook / props.ingredient.timeToCook * 100}%;
          background-color: ${progressBarColor[props.ingredient.status]};
          text-align: center;
        }
        .progress-bar-text {
          font-size: 24px;
          font-weight: bold;
          color: white;
          text-shadow: 2px 2px 2px #000000;
        }
        .finish-button {
          margin: 10px;
        }
      `}</style>
      <div className='ingredient-body'>
        <p>{props.ingredient.name}</p>
        <p>{finishedCooking}</p>
        <div className="progress">
          <div className='progress-bar progress-bar-striped progress-bar-animated' role="progressbar" aria-valuenow={props.ingredient.currentTimeToCook} aria-valuemin="0" aria-valuemax={props.ingredient.timeToCook}><span className='progress-bar-text'>{props.ingredient.status}</span></div>
        </div>
        <button onClick={onSingleFinishIngredient} className='btn btn-danger finish-button'>Finish Ingredient!</button>
      </div>
    </div>
  );
}

Ingredients.propTypes = {
  ingredient: PropTypes.object.isRequired,
  onFinishSingleIngredient: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired
};

export default Ingredients;