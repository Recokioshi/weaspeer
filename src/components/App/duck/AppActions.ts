import { ActionCreator } from 'redux';
import { UserCheckingAction, AppUserLoggedInAction, AppUserLoggedOutAction } from '../AppTypes';
import C from './AppConstants';

export const userChecking: ActionCreator<UserCheckingAction> = () => ({
  type: C.APP_USER_CHECK,
});

export const userLoggedIn: ActionCreator<AppUserLoggedInAction> = (uid: string) => ({
  type: C.APP_LOGGED_IN,
  uid,
});

export const userLoggedOut: ActionCreator<AppUserLoggedOutAction> = () => ({
  type: C.APP_LOGGED_OUT,
});
