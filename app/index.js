var React = require('react')
var ReactDOM = require('react-dom')
require('./index.css')
var Home = require('./component/Home')
var ReactRouter = require('react-router-dom')
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link
var Forecast = require('./component/Forecast')


class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component = {Home} />
          <Route path="/forecast" component={Forecast} />
        </div>
      </ Router>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById("app")
)
