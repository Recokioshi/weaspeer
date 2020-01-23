import { navigate } from '@reach/router';
import { paths } from '../../../common/Router/constants';
import { Dispatch } from 'redux';
import { AppAction } from '../AppTypes';
import { authStateChangeListener, isAuthenticated } from '../../../common/Model/model';
import { userLoggedIn, userLoggedOut, userWillBeChecked } from './AppActions';

export const redirectIfUnauthorized = (authorized: boolean) => {
  if (!authorized) {
    navigate(paths.LOGIN);
  }
};

const handleLogIn = (dispatch: Dispatch<AppAction>) => {
  return () => {
    console.log('user logged in');
    dispatch(userLoggedIn());
  };
};

const handleLogOut = (dispatch: Dispatch<AppAction>) => {
  return () => {
    console.log('user logged out');
    dispatch(userLoggedOut());
  };
};

export const checkIfUserIsCurrentlyLoggedIn = () => {
  return (dispatch: Dispatch<AppAction>) => {
    if (isAuthenticated()) {
      handleLogIn(dispatch);
    }
  };
};

export const listenToAuthChanges = () => {
  return (dispatch: Dispatch<AppAction>): firebase.Unsubscribe => {
    dispatch(userWillBeChecked());
    return authStateChangeListener(handleLogIn(dispatch), handleLogOut(dispatch));
  };
};
