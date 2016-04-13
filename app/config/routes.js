import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Main from '../components/main/main';
import HomeContainer from '../components/home/home-container';

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={HomeContainer}/>
    </Route>
  </Router>
);

export default routes;
