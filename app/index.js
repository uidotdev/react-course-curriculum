import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import MainContainer from 'containers/MainContainer'
import HomeContainer from 'containers/HomeContainer'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path='/' component={MainContainer}>
      <IndexRoute component={HomeContainer} />
      <Route path='home' component={HomeContainer} />
    </Route>
  </Router>
),  document.getElementById('app'))
