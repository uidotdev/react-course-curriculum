import React from 'react';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';
var ReactRouter = require('react-router');
// import { Provider } from 'react-redux';
// import store, { history } from './store';

// import App from './components/App';
// import CreationForm from './components/creationForm/CreationForm';
// import Battle from './components/battle/Battle.js';
// import Map from './components/map/Map.js';
import Main from '../components/Main';
import Home from '../components/Home';
import PromptContainer from '../container/PromptContainer';
// var hashHistory = ReactRouter.hashHistory;
// const router = (
//   // <Provider store={store}>
//     <Router history={history}>
//       </Route>
//     </Router>
//   // </Provider>
// );

var routes = (
<Router history={hashHistory}>
	<Route path='/' component={Main}>
		<IndexRoute header='GitHub Battle' component={Home} />
		<Route path='/playerOne' header='Player One' component={PromptContainer} />
		<Route path='/playerTwo/:playerOne' header= 'Player Two' component={PromptContainer} />
	</Route>

</Router>

)

export default routes;