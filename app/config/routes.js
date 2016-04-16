import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Main from '../components/main/main';
import HomeContainer from '../components/home/home-container';
import CityForecastContainer from '../components/city-forecast/city-forecast-container';

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={HomeContainer} />
      <Route path='forecast/:city' component={CityForecastContainer} header='City Forecast' />
    </Route>
  </Router>
);

export default routes;
