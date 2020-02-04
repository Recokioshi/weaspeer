import { Action } from 'redux';

export type AppLoggedInActionType = 'APP_LOGGED_IN';
export type AppLoggedOutActionType = 'APP_LOGGED_OUT';
export type AppCheckUserActionType = 'APP_USER_CHECK';
export type AppActionType = AppLoggedInActionType | AppLoggedOutActionType | AppCheckUserActionType;

export type AppActionTypesConstant = {
  APP_LOGGED_IN: AppLoggedInActionType;
  APP_LOGGED_OUT: AppLoggedOutActionType;
  APP_USER_CHECK: AppCheckUserActionType;
};

export interface UserCheckingAction extends Action {
  type: AppCheckUserActionType;
}

export interface AppUserLoggedInAction extends Action {
  type: AppLoggedInActionType;
  uid: string;
}

export interface AppUserLoggedOutAction extends Action {
  type: AppLoggedOutActionType;
}

export type AppAction = UserCheckingAction | AppUserLoggedInAction | AppUserLoggedOutAction;

export type AppState = {
  loggedIn: boolean;
  checkingUser: boolean;
  uid: string;
};

type AppStateProps = {
  checkingForAuthorization: boolean;
  authorized: boolean;
};

type AppDispatchProps = {
  listenToAuthChanges: Function;
};

export type AppProps = AppStateProps & AppDispatchProps;
