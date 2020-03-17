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
import ChatList from '../ChatList/ChatList';
import FriendsList from '../FriendsList/FriendsList';
import NewFriend from '../FriendsList/NewFriend/NewFriend';

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
    stopAllListeners
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
                        <ChatList path={paths.CHATS} />
                        <FriendsList path={paths.FRIENDS} />
                        <NewFriend path={paths.NEW_FRIEND} />
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
        </div>
    );

    return renderComponent;
};

export default App;
