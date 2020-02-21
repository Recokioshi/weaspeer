import { navigate } from '@reach/router';
import { paths } from '../../../common/Router/constants';
import { Dispatch } from 'redux';
import { AppAction } from '../AppTypes';
import { authStateChangeListener, userDataListener } from '../../../common/Model/model';
import { userLoggedIn, userLoggedOut, userChecking, userDataLoaded } from './AppActions';
import { IUSerData } from '../UserData';

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

const handleUserDataLoaded = (dispatch: Dispatch<AppAction>) => (userData: IUSerData) => {
    dispatch(userDataLoaded(userData));
};

export const listenToAuthChanges = () => {
    return (dispatch: Dispatch<AppAction>): firebase.Unsubscribe => {
        dispatch(userChecking());
        return authStateChangeListener(handleLogIn(dispatch), handleLogOut(dispatch));
    };
};

export const listenToUserData = (uid: string) => (dispatch: Dispatch<AppAction>) => {
    if (uid) {
        dispatch(userChecking());
        return userDataListener(uid, handleUserDataLoaded(dispatch));
    } else {
        return null;
    }
};
