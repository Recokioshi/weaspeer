import { setNewUserData } from '../../../common/Model/model';
import { IUSerData } from '../../App/UserData';

export type UserCreatorInputs = {
    newFirstName: String;
    newLastName: String;
    newUsername: String;
    newPassword: String;
    newPasswordRepeat: String;
};

export type UserInfoValidationResults = String[];

const isValueOfKeyEmptyInObject = (obj: { [key: string]: any }) => (key: string) => !obj[key];

const isSomeValueInObjectEmpty = (obj: Object): Boolean => Object.keys(obj).some(isValueOfKeyEmptyInObject(obj));

const passwordsMatch = (password: String, repeatedPassword: String) => password === repeatedPassword;

export const validateNewUserData = (
    userInputs: UserCreatorInputs,
    isPasswordMandatory: Boolean,
): UserInfoValidationResults => {
    const { newPassword, newPasswordRepeat, ...basicFields } = userInputs;
    const objToCheck = Object.assign(basicFields, isPasswordMandatory ? { newPassword, newPasswordRepeat } : {});
    const validationMessages = [];
    if (isSomeValueInObjectEmpty(objToCheck)) {
        validationMessages.push('Some mandatory values are empty');
    }
    if (!passwordsMatch(newPassword, newPasswordRepeat)) {
        validationMessages.push(`Passwords doesn't match`);
    }
    return validationMessages;
};

export const saveNewUserData = (userData: IUSerData, uid: string) => {
    setNewUserData(uid, userData);
};
