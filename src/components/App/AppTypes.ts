import { Action } from 'redux';

export type AppActionType = 'APP_LOGGED_IN' | 'APP_LOGGED_OUT' | 'APP_USER_CHECK';

export type AppActionTypesConstant = {
  [key in AppActionType]: AppActionType;
};

export interface UserCheckingAction extends Action {
  type: 'APP_USER_CHECK';
}

export interface UserLoggedInAction extends Action {
  type: 'APP_LOGGED_IN';
  uid: string;
}

export interface UserLoggedOutAction extends Action {
  type: 'APP_LOGGED_OUT';
}

export type AppAction = UserCheckingAction | UserLoggedInAction | UserLoggedOutAction;

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
