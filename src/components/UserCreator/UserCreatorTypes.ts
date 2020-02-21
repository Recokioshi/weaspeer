import { RouteComponentProps } from '@reach/router';
import { UserInfoValidationResults, UserCreatorInputs } from './duck/UserCreatorOperations';
import { IUserInfo, IUSerData } from '../App/UserData';

export type UserCreatorStateProps = {
    userInfo: IUserInfo;
    uid: string;
    validateNewUserData: (userInputs: UserCreatorInputs, isPasswordMandatory: Boolean) => UserInfoValidationResults;
    saveNewUserData: (userInfo: IUSerData, uid: string) => void;
};

export type UserCreatorDispatchProps = {};

export type UserCreatorOwnProps = {
    isPasswordMandatory: Boolean;
};

export type UserCreatorProps = UserCreatorStateProps &
    UserCreatorDispatchProps &
    UserCreatorOwnProps &
    RouteComponentProps;
