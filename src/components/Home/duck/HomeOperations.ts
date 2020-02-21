import { navigate } from '@reach/router';
import { paths } from '../../../common/Router/constants';
import { IUSerData } from '../../App/UserData';

export const redirectUserCreationIfNeeded = (userData: IUSerData, checkingUser: Boolean) => {
  if (!checkingUser && !isUserDataComplete(userData)) {
    navigate(paths.USER_CREATOR);
  }
};

export const redirectPasswordCreationIfNeeded = (userData: IUSerData, checkingUser: Boolean) => {
  if (!checkingUser && !isPasswordComplete(userData)) {
    navigate(paths.PASSWORD_CREATOR);
  }
};

export const isUserDataComplete = ({ userInfo }: IUSerData): Boolean => {
  const { creationDate, firstName, lastName, username } = userInfo;
  return !!creationDate && !!firstName && !!lastName && !!username;
};

export const isPasswordComplete = ({ rsaKey }: IUSerData): Boolean => {
  return !!rsaKey;
};
