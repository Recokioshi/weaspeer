import Home from '../Home/Home';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';

import reducer from '../../common/Redux/reducer';

import React from 'react';
import { Router } from '@reach/router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk));

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Home path="/" />
        <Login path="login" />
        <NotFound default />
      </Router>
    </Provider>
  );
};

export default App;
