import React from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import HomePage from '../pages/home-page';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
      </Switch>
    </Router>
  );
};

export default App;
