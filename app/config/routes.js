import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import MainContainer from '../components/main/main-container';
import HomeContainer from '../components/home/home-container';

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={MainContainer}>
      <IndexRoute component={HomeContainer} />
    </Route>
  </Router>
);

export default routes;
