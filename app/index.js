var React = require('react')
var ReactDOM = require('react-dom')
require('./index.css')
var Home = require('./component/Home')
var ReactRouter = require('react-router-dom')
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link
var Forecast = require('./component/Forecast')
var Interval = require('./component/Interval')
var Header = require('./component/Header');
import { withRouter } from 'react-router';


class App extends React.Component {
  render() {

    const RoutedHeader = withRouter(Header);
    return (
      <div>
        <Router>
          <div>
            <RoutedHeader />
            <Route exact path="/" component = {Home} />
            <Route path="/forecast" component={Forecast} />
            <Route path="/detail/:interval" component = {Interval} />
          </div>
        </Router>
      </div>
    )
  }
};


ReactDOM.render(
  <App />,
  document.getElementById("app")
);
