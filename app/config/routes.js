import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Main from '../components/main/main';
import HomeContainer from '../components/home/home-container';
import CityForecastContainer from '../components/city-forecast/city-forecast-container';
import ForecastDetailsContainer from '../components/forecast-details/forecast-details-container';

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={HomeContainer} />
      <Route path='/forecast/:city' component={CityForecastContainer} />
      <Route path='/forecast/details/:city' component={ForecastDetailsContainer} />
    </Route>
  </Router>
);

export default routes;
