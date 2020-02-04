import { HomeAction, IUSerData } from '../HomeTypes';
import { Dispatch } from 'react';
import { userDataLoaded } from './HomeActions';
import { loadUserData } from '../../../common/Model/model';
import { navigate } from '@reach/router';
import { paths } from '../../../common/Router/constants';

export const redirectUserCreationIfNeeded = (userData: IUSerData) => {
  if (!isUserDataComplete(userData)) {
    console.log('navigate to user creator');
    navigate(paths.USER_CREATOR);
  }
};

export const isUserDataComplete = ({ rsaKey, userInfo }: IUSerData): Boolean => {
  const { creationDate, firstName, lastName, username } = userInfo;
  return !!rsaKey && !!creationDate && !!firstName && !!lastName && !!username;
};

export const getUserData = async (dispatch: Dispatch<HomeAction>, uid: string) => {
  const loadedData = await loadUserData(uid);
  if (loadedData) {
    dispatch(userDataLoaded(loadedData));
  }
};
