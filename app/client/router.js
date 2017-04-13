import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
// import { Provider } from 'react-redux';
// import store, { history } from './store';

// import App from './components/App';
// import CreationForm from './components/creationForm/CreationForm';
// import Battle from './components/battle/Battle.js';
// import Map from './components/map/Map.js';
import Main from '../components/Main';
import Home from '../components/Home';
// import HelloUser from './components/DisplayNames';

// const router = (
//   // <Provider store={store}>
//     <Router history={history}>
//       </Route>
//     </Router>
//   // </Provider>
// );

var routes = (
	<Router>
		<Route path='/' component={Main}> </Route>
		<Route path='/home' component={Home}> </Route>


	</Router>

)

export default router;
      // <Route path='/displaynames' component={DisplayNames}>
      // </Route>
      // <Route path="/" component={helloWorld}>