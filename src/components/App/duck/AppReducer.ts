import C from './AppConstants';
import { AppState, AppAction } from '../AppTypes';

export const appInitialState: AppState = {
  loggedIn: false,
  checkingUser: true
};

export default (state: AppState = appInitialState, action: AppAction): AppState => {
  switch (action.type) {
    case C.APP_USER_CHECK:
      return {
        loggedIn: false,
        checkingUser: true
      };
    case C.APP_LOGGED_IN:
      return {
        loggedIn: true,
        checkingUser: false
      };
    case C.APP_LOGGED_OUT:
      return {
        loggedIn: false,
        checkingUser: false
      };
    default:
      return state;
  }
};
