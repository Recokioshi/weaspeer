import { setNewUserData } from '../../../common/Model/model';
import { IUSerData } from '../../App/UserData';

export type UserCreatorInputs = {
  newFirstName: String;
  newLastName: String;
  newUsername: String;
};

export type UserInfoValidationResults = String[];

const isValueOfKeyEmptyInObject = (obj: { [key: string]: any }) => (key: string) => !obj[key];

const isSomeValueInObjectEmpty = (obj: Object): Boolean => Object.keys(obj).some(isValueOfKeyEmptyInObject(obj));

export const validateNewUserData = (userInputs: UserCreatorInputs): UserInfoValidationResults => {
  const validationMessages = [];
  if (isSomeValueInObjectEmpty(userInputs)) {
    validationMessages.push('Some mandatory values are empty');
  }
  return validationMessages;
};

export const saveNewUserData = (userData: IUSerData, uid: string) => {
  setNewUserData(uid, userData);
};
