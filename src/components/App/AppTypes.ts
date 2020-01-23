export type AppActionType = 'LOGGED_IN' | 'LOGGED_OUT' | 'USER_CHECK';

export type AppActionTypesConstant = {
  [key in AppActionType]: AppActionType;
};

export type AppState = {
  loggedIn: boolean;
  checkingUser: boolean;
};

export type AppAction = {
  type: AppActionType;
};

type AppStateProps = {
  checkingForAuthorization: boolean;
  authorized: boolean;
};

type AppDispatchProps = {
  listenToAuthChanges: Function;
};

export type AppProps = AppStateProps & AppDispatchProps;
