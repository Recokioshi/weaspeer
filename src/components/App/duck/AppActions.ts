import C from './AppConstants';

export const userWillBeChecked = () => ({
  type: C.USER_CHECK
});

export const userLoggedIn = () => ({
  type: C.LOGGED_IN
});

export const userLoggedOut = () => ({
  type: C.LOGGED_OUT
});
