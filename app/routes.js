import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import rootReducer from '~/reducers';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

export default [{
  component: Provider,
  childRoutes: [
    {
      path: '/edit',
      component: require('components/App'),
      childRoutes: [
        require('./Dashboard'),
        require('./Reports')
      ],
      onEnter: (_, replaceState) => replaceState(null, "/dashboard")
    },
    {
      path: "*",
      component: require('components/NoMatch')
    },
  ],
}]

const Routes = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={PureComponent} >
        {/* <IndexRedirect to="/list" /> */}
        {/* <ChildRoute /> */}
      </Route>
      <Route path="*">
        <IndexRedirect to="/" />
      </Route>
    </Router>
  </Provider>
);
