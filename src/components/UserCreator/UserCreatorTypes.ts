import { RouteComponentProps } from '@reach/router';
import { IUserInfo } from '../Home/HomeTypes';
import { UserInfoValidationResults, UserCreatorInputs } from './duck/UserCreatorOperations';

export type UserCreatorStateProps = {
  userInfo: IUserInfo;
  validateNewUserData: (
    userInputs: UserCreatorInputs,
    isPasswordMandatory: Boolean
  ) => UserInfoValidationResults;
};

export type UserCreatorDispatchProps = {
  saveNewUserData: Function;
};

export type UserCreatorOwnProps = {
  isPasswordMandatory: Boolean;
};

export type UserCreatorProps = UserCreatorStateProps &
  UserCreatorDispatchProps &
  UserCreatorOwnProps &
  RouteComponentProps;
