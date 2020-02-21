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
    listenToAuthChanges,
    listenToUserData,
    uid,
}) => {
    useEffect(() => {
        setAuthChangesListener(listenToAuthChanges);
        setUserDataListener(listenToUserData, uid);
        redirectToLoginIfNeeded(checkingForAuthorization, authorized);

        return () => {
            unsubscribeAuthorization && unsubscribeAuthorization();
            unsubscribeUserData && unsubscribeUserData();
        };
    }, [authorized]);

    const renderComponent = checkingForAuthorization ? (
        <Loading />
    ) : (
        <div>
            <Router>
                <Home path={paths.HOME} />
                <Login path={paths.LOGIN} />
                <UserCreator path={paths.USER_CREATOR} isPasswordMandatory={true} />
                <NotFound default />
            </Router>
        </div>
    );

    return renderComponent;
};

export default App;
