import { ActionCreator } from 'redux';
import {
    AppUserCheckingAction,
    AppUserLoggedInAction,
    AppUserLoggedOutAction,
    AppUserDataLoadedAction,
} from '../AppTypes';
import C from './AppConstants';
import { IUSerData } from '../UserData';

export const userChecking: ActionCreator<AppUserCheckingAction> = () => ({
    type: C.APP_USER_CHECK,
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
