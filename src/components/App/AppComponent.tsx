import Home from '../Home/Home';
import Login from '../Login/Login';
import UserCreator from '../UserCreator/UserCreator';
import NotFound from '../NotFound/NotFound';

import { redirectToLoginIfNeeded } from './duck/AppOperations';
import { paths } from '../../common/Router/constants';

import React, { useEffect } from 'react';
import { Router } from '@reach/router';
import { AppProps } from './AppTypes';
import Loading from '../Loading/LoadingComponent';
import PasswordCreator from '../PasswordCreator/PasswordCreator';

let unsubscribeAuthorization: Function | null = null;
let unsubscribeUserData: Function | null = null;

const setAuthChangesListener = (listenToAuthChanges: Function) => {
    if (!unsubscribeAuthorization) {
        unsubscribeAuthorization = listenToAuthChanges();
    }
};

const setUserDataListener = (listenToUserData: Function, uid: string) => {
    if (!unsubscribeUserData) {
        unsubscribeUserData = listenToUserData(uid);
    }
};

const App: React.FC<AppProps> = ({
    authorized,
    checkingForAuthorization,
    allDataLoaded,
    listenToAuthChanges,
    listenToUserData,
    loadPrivateKeyFromStorage,
    uid,
    shouldLoadPrivateKey,
}) => {
    useEffect(() => {
        if (!unsubscribeAuthorization) {
            setAuthChangesListener(listenToAuthChanges);
        }
        if (!unsubscribeUserData && uid) {
            setUserDataListener(listenToUserData, uid);
        }
        if (shouldLoadPrivateKey) {
            loadPrivateKeyFromStorage(uid);
        }

        redirectToLoginIfNeeded(checkingForAuthorization, authorized);

        return () => {
            unsubscribeAuthorization && unsubscribeAuthorization();
            unsubscribeUserData && unsubscribeUserData();
        };
    }, [authorized]);
    const renderComponent = !allDataLoaded ? (
        <Loading />
    ) : (
        <div>
            <Router>
                <Home path={paths.HOME} />
                <Login path={paths.LOGIN} />
                <UserCreator path={paths.USER_CREATOR} />
                <PasswordCreator path={paths.PASSWORD_CREATOR} />
                <NotFound default />
            </Router>
        </div>
    );

    return renderComponent;
};

export default App;
