import { Action } from 'redux';
import { IUSerData } from './UserData';

export type AppLoggedInActionType = 'APP_LOGGED_IN';
export type AppLoggedOutActionType = 'APP_LOGGED_OUT';
export type AppCheckUserActionType = 'APP_USER_CHECK';
export type AppUserDataLoadedActionType = 'APP_USER_DATA_LOADED';

export type AppActionType =
    | AppLoggedInActionType
    | AppLoggedOutActionType
    | AppCheckUserActionType
    | AppUserDataLoadedActionType;

export type AppActionTypesConstant = {
    APP_LOGGED_IN: AppLoggedInActionType;
    APP_LOGGED_OUT: AppLoggedOutActionType;
    APP_USER_CHECK: AppCheckUserActionType;
    APP_USER_DATA_LOADED: AppUserDataLoadedActionType;
};

export interface AppUserDataLoadedAction extends Action {
    type: AppUserDataLoadedActionType;
    userData: IUSerData;
}

export interface AppUserCheckingAction extends Action {
    type: AppCheckUserActionType;
}

export interface AppUserLoggedInAction extends Action {
    type: AppLoggedInActionType;
    uid: string;
}

export interface AppUserLoggedOutAction extends Action {
    type: AppLoggedOutActionType;
}

export type AppAction =
    | AppUserCheckingAction
    | AppUserLoggedInAction
    | AppUserLoggedOutAction
    | AppUserDataLoadedAction;

export type AppState = {
    loggedIn: boolean;
    checkingUser: boolean;
    uid: string;
    userData: IUSerData;
};

type AppStateProps = {
    checkingForAuthorization: boolean;
    authorized: boolean;
    uid: string;
};

type AppDispatchProps = {
    listenToAuthChanges: Function;
    listenToUserData: (uid: string) => void;
};

export type AppProps = AppStateProps & AppDispatchProps;
