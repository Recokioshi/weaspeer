import { navigate } from '@reach/router';
import { paths } from '../../../common/Router/constants';
import { Dispatch } from 'redux';
import { AppAction } from '../AppTypes';
import {
    authStateChangeListener,
    userDataListener,
    unsubscribeUserData,
    unsubscribeAll,
} from '../../../common/Model/model';
import {
    userLoggedIn,
    userLoggedOut,
    userChecking,
    userDataLoaded,
    privateKeyLoaded,
    authChecking,
    keyChecking,
} from './AppActions';
import { IUSerData } from '../UserData';
import { initialUserData } from './AppReducer';
import firebaseApp from '../../../common/Firebase/Firebase';

export const redirectToLoginIfNeeded = (checkingForAuthorization: boolean, authorized: boolean) => {
    if (!checkingForAuthorization && !authorized) {
        navigate(paths.LOGIN);
    }
};

const handleLogIn = (dispatch: Dispatch<AppAction>) => {
    return (uid: string) => {
        dispatch(userLoggedIn(uid));
    };
};

const handleLogOut = (dispatch: Dispatch<AppAction>) => {
    return () => {
        dispatch(userLoggedOut());
    };
};

const handleUserDataLoaded = (dispatch: Dispatch<AppAction>) => (userData: IUSerData | null) => {
    dispatch(userDataLoaded(userData || initialUserData));
};

export const listenToAuthChanges = () => {
    return (dispatch: Dispatch<AppAction>) => {
        dispatch(authChecking());
        authStateChangeListener(handleLogIn(dispatch), handleLogOut(dispatch));
    };
};

export const listenToUserData = (uid: string) => (dispatch: Dispatch<AppAction>) => {
    if (uid) {
        dispatch(userChecking());
        userDataListener(uid, handleUserDataLoaded(dispatch));
    } else {
        return null;
    }
};

export const stopUserDataListener = () => {
    unsubscribeUserData();
};

export const stopAllListeners = () => {
    unsubscribeAll();
};

export const loadPrivateKeyFromStorage = (uid: string) => (dispatch: Dispatch<AppAction>) => {
    dispatch(keyChecking());
    const key = window.localStorage.getItem(uid);
    dispatch(privateKeyLoaded(key));
};

export const handleLogOutButtonClick = () => {
    stopUserDataListener();
    try {
        firebaseApp.auth().signOut();
    } catch (error) {
        console.error(`sign out exception: ${error}`);
    }
};
