import { navigate } from '@reach/router';
import { paths } from '../../../common/Router/constants';
import { Dispatch } from 'redux';
import { AppAction } from '../AppTypes';
import { authStateChangeListener } from '../../../common/Model/model';
import { userLoggedIn, userLoggedOut, userChecking } from './AppActions';

export const redirectToLoginIfNeeded = (checkingForAuthorization: boolean, authorized: boolean) => {
  if (!checkingForAuthorization && !authorized) {
    navigate(paths.LOGIN);
  }
};

const handleLogIn = (dispatch: Dispatch<AppAction>) => {
  return () => {
    dispatch(userLoggedIn());
  };
};

const handleLogOut = (dispatch: Dispatch<AppAction>) => {
  return () => {
    dispatch(userLoggedOut());
  };
};

export const listenToAuthChanges = () => {
  return (dispatch: Dispatch<AppAction>): firebase.Unsubscribe => {
    dispatch(userChecking());
    return authStateChangeListener(handleLogIn(dispatch), handleLogOut(dispatch));
  };
};
