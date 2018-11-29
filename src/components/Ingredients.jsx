import React from 'react';
import PropTypes from 'prop-types';

function Ingredients(props) {

  function onSingleFinishIngredient() {
    props.onFinishSingleIngredient(props.index);
    console.log('clicked');
  }
  return(
    <div className='ingredient-box'>
      <style jsx>{`
        .ingredient-box {
          border: 1px solid black;
        }
      `}</style>
      <div className='ingredient-body'>
        <p>{props.ingredient.name}</p>
        <p>{props.ingredient.status}</p>
        <p>{props.ingredient.currentTimeToCook}</p>
        <button onClick={onSingleFinishIngredient} className='btn btn-danger'>Finish Ingredient!</button>
      </div>
    </div>
  );
}

Ingredients.propTypes = {
  ingredient: PropTypes.object
}

export default Ingredients;