import { withRouter } from 'react-router';

const React = require('react');
const ReactDOM = require('react-dom');
require('./index.css');
const ReactRouter = require('react-router-dom');
const Home = require('./component/Home');

const Router = ReactRouter.BrowserRouter;
const { Route } = ReactRouter;
const Forecast = require('./component/Forecast');
const Interval = require('./component/Interval');
const Header = require('./component/Header');


class App extends React.Component {
  render() {
    const RoutedHeader = withRouter(Header);
    return (
      <div>
        <Router>
          <div className="home">
            <RoutedHeader />
            <Route exact path="/" component={Home} />
            <Route path="/forecast" component={Forecast} />
            <Route path="/detail/:interval" component={Interval} />
          </div>
        </Router>
      </div>
    );
  }
}


ReactDOM.render(
  <App />, document.getElementById('app'),
);
