import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
// import { Provider } from 'react-redux';
// import store, { history } from './store';

// import App from './components/App';
// import CreationForm from './components/creationForm/CreationForm';
// import Battle from './components/battle/Battle.js';
// import Map from './components/map/Map.js';
import HelloWorld from './components/helloWorld';

const router = (
  // <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={helloWorld}>
        
      </Route>
    </Router>
  // </Provider>
);

export default router;