import Home from '../Home/Home';
import Login from '../Login/Login';
import UserCreator from '../SettingsComponent/UserCreator/UserCreator';
import Settings from '../SettingsComponent/Settings';
import NotFound from '../NotFound/NotFound';

import { redirectToLoginIfNeeded } from './duck/AppOperations';
import { paths } from '../../common/Router/constants';

import React, { useEffect } from 'react';
import { Router } from '@reach/router';
import { AppProps } from './AppTypes';
import Loading from '../Loading/LoadingComponent';
import PasswordCreator from '../SettingsComponent/PasswordCreator/PasswordCreator';
import AppBarComponent from '../AppBar/AppBarComponent';

const App: React.FC<AppProps> = ({
    authorized,
    checkingForAuthorization,
    allDataLoaded,
    listenToAuthChanges,
    listenToUserData,
    handleLogOutButtonClick,
    authListening,
    userListening,
    loadPrivateKeyFromStorage,
    uid,
    shouldLoadPrivateKey,
    stopAllListeners,
}) => {
    useEffect(() => {
        if (!authListening) {
            listenToAuthChanges();
        }
        if (authorized && !userListening) {
            listenToUserData(uid);
        }
        if (shouldLoadPrivateKey) {
            loadPrivateKeyFromStorage(uid);
        }

        redirectToLoginIfNeeded(checkingForAuthorization, authorized);
    });
    const renderComponent = !allDataLoaded ? (
        <Loading />
    ) : (
        <div>
            {authorized ? (
                <AppBarComponent handleLogOut={handleLogOutButtonClick}>
                    <Router>
                        <Login path={paths.LOGIN} />
                        <Home path={paths.HOME} />
                        <Settings path={paths.SETTINGS} />
                        <NotFound default />
                    </Router>
                </AppBarComponent>
            ) : (
                <Router>
                    <Login path={paths.LOGIN} />
                    <UserCreator path={paths.CREATE_USER} />
                    <PasswordCreator path={paths.CREATE_PASSWORD} />
                </Router>
            )}
            <Router>
                <NotFound default />
            </Router>
        </div>
    );

    return renderComponent;
};

export default App;
