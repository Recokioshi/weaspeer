import C from './AppConstants';
import { ActionCreator } from 'redux';
import { UserCheckingAction, UserLoggedInAction, UserLoggedOutAction } from '../AppTypes';

export const userChecking: ActionCreator<UserCheckingAction> = () => ({
  type: 'APP_USER_CHECK',
});

export const userLoggedIn: ActionCreator<UserLoggedInAction> = (uid: string) => ({
  type: 'APP_LOGGED_IN',
  uid,
});

export const userLoggedOut: ActionCreator<UserLoggedOutAction> = () => ({
  type: 'APP_LOGGED_OUT',
});
