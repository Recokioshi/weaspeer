import { ActionCreator } from 'redux';
import {
    AppUserCheckingAction,
    AppUserLoggedInAction,
    AppUserLoggedOutAction,
    AppUserDataLoadedAction,
    AppPrivateKeyLoadedAction,
    AppAuthCheckingAction,
    AppKeyCheckingAction,
    AppUserOffAction,
    AppAuthOffAction,
} from '../AppTypes';
import C from './AppConstants';
import { IUSerData } from '../UserData';

export const userChecking: ActionCreator<AppUserCheckingAction> = () => ({
    type: C.APP_USER_CHECK,
});

export const userStopListening: ActionCreator<AppUserOffAction> = () => ({
    type: C.APP_USER_OFF,
});

export const authChecking: ActionCreator<AppAuthCheckingAction> = () => ({
    type: C.APP_AUTH_CHECK,
});

export const authStopListening: ActionCreator<AppAuthOffAction> = () => ({
    type: C.APP_AUTH_OFF,
});

export const keyChecking: ActionCreator<AppKeyCheckingAction> = () => ({
    type: C.APP_KEY_CHECK,
});

export const userLoggedIn: ActionCreator<AppUserLoggedInAction> = (uid: string) => ({
    type: C.APP_LOGGED_IN,
    uid,
});

export const userLoggedOut: ActionCreator<AppUserLoggedOutAction> = () => ({
    type: C.APP_LOGGED_OUT,
});

export const userDataLoaded: ActionCreator<AppUserDataLoadedAction> = (userData: IUSerData) => ({
    type: C.APP_USER_DATA_LOADED,
    userData,
});

export const privateKeyLoaded: ActionCreator<AppPrivateKeyLoadedAction> = (privateKey: string) => ({
    type: C.APP_PRIVATE_KEY_LOADED,
    key: privateKey,
});
