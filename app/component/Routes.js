var React = require('react')
var Router = require('react-router-dom').BrowserRouter
var Route = require("react-router-dom").Route
var Link = require('react-router-dom').Link
var Forecast = require('./Forecast')
var Header = require('./Header')
var Home = require("./Home")



const routes = () => (
  <Router>
    <Route exact path="/" component={Home} />
    <Route path="/forecast" component={Forecast}/>
  </Router>
)


module.exports = routes;
