import React from 'react';
//import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import IntroPage from './IntroPage';
import Game from './Game';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

/*
  import { Link } from 'react-router-dom';
  <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
*/

function App() {
  return (
    <div>
      <style jsx>{`
          font-family: Helvetica;
        `}</style>
      <div className='jumbotron'>Ramen Shop ** REPLACE WITH HEADER COMPONENT **</div>
      <div className='container'>
        <Switch>
          <Route exact path='/' component={IntroPage} />
          <Route path='/game' component={Game} />
        </Switch>
      </div>
    </div>
  );
}

//App.propTypes = {
//};

export default App;