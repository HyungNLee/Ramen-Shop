import React from 'react';
import ChefPic from '../assets/Chef.gif';
import { Link } from 'react-router-dom';

function IntroPage() {
  return (
    <div>
      <style jsx>{`
      .chef-picture-styles {
        width: 40%;
      }
      .intro-body {
        text-align: center;
        border: 1px solid black;
      }
      .btn {
        display: block;
        margin: 0 auto;
      }
      `}</style>
      <div className='intro-body'>
        <h1>Ramen Shop Adventures</h1>
        <h3>いらっしゃいませ！</h3>
        <h3>어서 오세요!</h3>
        <img className='chef-picture-styles' src={ChefPic} />
        <Link to='/game'><button className='btn btn-primary'>Start Cooking!</button></Link>
      </div>
    </div>
  );
}

export default IntroPage;