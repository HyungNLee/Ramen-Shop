import React from 'react';
import PropTypes from 'prop-types';

function Ingredients(props) {
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
      </div>
    </div>
  );
}

Ingredients.propTypes = {
  ingredient: PropTypes.object
}

export default Ingredients;