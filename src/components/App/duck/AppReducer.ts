import C from './AppConstants';
import { AppState, AppAction } from '../AppTypes';

const initialState: AppState = {
  loggedIn: false,
  checkingUser: false
};

export default (state: AppState = initialState, action: AppAction): AppState => {
  console.log(action.type)
  switch (action.type) {
    case C.USER_CHECK:
      return {
        loggedIn: false,
        checkingUser: true
      };
    case C.LOGGED_IN:
      return {
        loggedIn: true,
        checkingUser: false
      };
    case C.LOGGED_OUT:
      return {
        loggedIn: false,
        checkingUser: false
      };
    default:
      return state;
  }
};
