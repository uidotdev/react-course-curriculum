const React = require('react');
const Router = require('react-router-dom').BrowserRouter;
const Route = require('react-router-dom').Route;
const Link = require('react-router-dom').Link;
const Forecast = require('./Forecast');
const Header = require('./Header');
const Home = require('./Home');


const routes = () => (
  <Router>
    <Route exact path="/" component={Home} />
    <Route path="/forecast" component={Forecast} />
  </Router>
);


module.exports = routes;
