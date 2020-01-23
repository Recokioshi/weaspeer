import Home from '../Home/Home';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';

import { redirectIfUnauthorized } from './duck/AppOperations';
import { paths } from '../../common/Router/constants';

import React, { useEffect } from 'react';
import { Router } from '@reach/router';
import { AppProps } from './AppTypes';

let unsubscribeAuthorization = () => {};

const App: React.FC<AppProps> = ({ authorized, checkingForAuthorization, listenToAuthChanges }) => {
  useEffect(() => {
    unsubscribeAuthorization = listenToAuthChanges();
    console.log(`App component init authorized: ${authorized}, checkingForAuthorization: ${checkingForAuthorization}`);
    if (!checkingForAuthorization) {
      redirectIfUnauthorized(authorized);
    }

    return () => {
      console.log(`App component remove`);
      unsubscribeAuthorization();
    };
  }, []);

  const renderComponent = checkingForAuthorization ? (
    <p>Loading...</p>
  ) : (
    <Router>
      <Home path={paths.HOME} />
      <Login path={paths.LOGIN} />
      <NotFound default />
    </Router>
  );

  return renderComponent;
};

export default App;
