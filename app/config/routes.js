import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Main from '../containers/main';

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={Main}/>
  </Router>
);

export default routes;
