import { Action } from 'redux';
import { IUSerData } from './UserData';

export type AppLoggedInActionType = 'APP_LOGGED_IN';
export type AppLoggedOutActionType = 'APP_LOGGED_OUT';
export type AppCheckUserActionType = 'APP_USER_CHECK';
export type AppCheckAuthActionType = 'APP_AUTH_CHECK';
export type AppCheckKeyActionType = 'APP_KEY_CHECK';
export type AppUserDataLoadedActionType = 'APP_USER_DATA_LOADED';
export type AppPrivateKeyLoadedActionType = 'APP_PRIVATE_KEY_LOADED';

export type AppActionType =
  | AppLoggedInActionType
  | AppLoggedOutActionType
  | AppCheckUserActionType
  | AppCheckAuthActionType
  | AppCheckKeyActionType
  | AppUserDataLoadedActionType
  | AppPrivateKeyLoadedActionType;

export type AppActionTypesConstant = {
  APP_LOGGED_IN: AppLoggedInActionType;
  APP_LOGGED_OUT: AppLoggedOutActionType;
  APP_USER_CHECK: AppCheckUserActionType;
  APP_AUTH_CHECK: AppCheckAuthActionType;
  APP_KEY_CHECK: AppCheckKeyActionType;
  APP_USER_DATA_LOADED: AppUserDataLoadedActionType;
  APP_PRIVATE_KEY_LOADED: AppPrivateKeyLoadedActionType;
};

export interface AppUserDataLoadedAction extends Action {
  type: AppUserDataLoadedActionType;
  userData: IUSerData;
}

export interface AppUserCheckingAction extends Action {
  type: AppCheckUserActionType;
}

export interface AppAuthCheckingAction extends Action {
  type: AppCheckAuthActionType;
}

export interface AppKeyCheckingAction extends Action {
  type: AppCheckKeyActionType;
}

export interface AppUserLoggedInAction extends Action {
  type: AppLoggedInActionType;
  uid: string;
}

export interface AppUserLoggedOutAction extends Action {
  type: AppLoggedOutActionType;
}

export interface AppPrivateKeyLoadedAction extends Action {
  type: AppPrivateKeyLoadedActionType;
  key: string;
}

export type AppAction =
  | AppUserCheckingAction
  | AppAuthCheckingAction
  | AppKeyCheckingAction
  | AppUserLoggedInAction
  | AppUserLoggedOutAction
  | AppUserDataLoadedAction
  | AppPrivateKeyLoadedAction;

export type AppState = {
  loggedIn: boolean;
  checkingAuth: boolean;
  checkingUser: boolean;
  checkingKey: boolean;
  uid: string;
  userData: IUSerData;
  userDataLoaded: boolean;
  privateKey: string;
};

type AppStateProps = {
  checkingForAuthorization: boolean;
  allDataLoaded: boolean;
  authorized: boolean;
  uid: string;
  shouldLoadPrivateKey: boolean;
};

type AppDispatchProps = {
  listenToAuthChanges: Function;
  listenToUserData: (uid: string) => void;
  loadPrivateKeyFromStorage: (uid: string) => void;
};

export type AppProps = AppStateProps & AppDispatchProps;
