import Home from '../Home/Home';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';

import { redirectToLoginIfNeeded } from './duck/AppOperations';
import { paths } from '../../common/Router/constants';

import React, { useEffect } from 'react';
import { Router } from '@reach/router';
import { AppProps } from './AppTypes';
import Loading from '../Loading/LoadingComponent';

let unsubscribeAuthorization = () => {};

const setAuthorizationListener = (listenToAuthChanges: Function) => {
  unsubscribeAuthorization = listenToAuthChanges();
};

const App: React.FC<AppProps> = ({ authorized, checkingForAuthorization, listenToAuthChanges }) => {
  useEffect(() => {
    setAuthorizationListener(listenToAuthChanges);
    redirectToLoginIfNeeded(checkingForAuthorization, authorized);

    return () => {
      unsubscribeAuthorization();
    };
  }, []);

  const renderComponent = checkingForAuthorization ? (
    <Loading />
  ) : (
    <div>
      <Router>
        <Home path={paths.HOME} />
        <Login path={paths.LOGIN} />
        <NotFound default />
      </Router>
    </div>
  );

  return renderComponent;
};

export default App;
