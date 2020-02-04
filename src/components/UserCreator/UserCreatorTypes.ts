import { RouteComponentProps } from '@reach/router';
import { IUserInfo } from '../Home/HomeTypes';

export type UserCreatorStateProps = {
  userInfo: IUserInfo;
  validateNewUserData: Function;
};

export type UserCreatorDispatchProps = {
  saveNewUserData: Function;
};

export type UserCreatorOwnProps = RouteComponentProps;

export type UserCreatorProps = UserCreatorStateProps &
  UserCreatorDispatchProps &
  UserCreatorOwnProps;
