import C from './AppConstants';
import { AppState, AppAction, AppUserLoggedInAction } from '../AppTypes';

export const appInitialState: AppState = {
  loggedIn: false,
  checkingUser: true,
  uid: '',
};

export default (state: AppState = appInitialState, action: AppAction): AppState => {
  switch (action.type) {
    case C.APP_USER_CHECK:
      return {
        ...appInitialState,
      };
    case C.APP_LOGGED_IN:
      return {
        loggedIn: true,
        checkingUser: false,
        uid: (action as AppUserLoggedInAction).uid,
      };
    case C.APP_LOGGED_OUT:
      return {
        loggedIn: false,
        checkingUser: false,
        uid: '',
      };
    default:
      return state;
  }
};
