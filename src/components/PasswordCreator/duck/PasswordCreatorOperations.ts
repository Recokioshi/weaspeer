import { RsaCreator } from '../../../common/Encryption/RsaCreator';
import { IUSerData } from '../../App/UserData';
import { setNewUserData } from '../../../common/Model/model';
import { navigate } from '@reach/router';
import { paths } from '../../../common/Router/constants';

export type PasswordCreatorInputs = {
  newPassword: String;
  newPasswordRepeat: String;
};

export type PasswordValidationResults = String[];

const passwordsMatch = (password: String, repeatedPassword: String) => password === repeatedPassword;

export const validateNewPassword = (userInputs: PasswordCreatorInputs): PasswordValidationResults => {
  const { newPassword, newPasswordRepeat } = userInputs;
  const validationMessages = [];

  if (!passwordsMatch(newPassword, newPasswordRepeat)) {
    validationMessages.push(`Passwords doesn't match`);
  }
  return validationMessages;
};

const saveKeydToDb = (userData: IUSerData, uid: string) => {
  setNewUserData(uid, userData);
};

const saveKeyToLocalStorage = (uid: string, rsaKey: string) => {
  localStorage.setItem(uid, rsaKey);
};

export const saveNewPassword = (uid: string, userData: IUSerData) => (password: string) => {
  const rsaCreator = new RsaCreator();
  const encryptedPass = rsaCreator.encryptWithPassphrase(password);
  saveKeydToDb({ ...userData, rsaKey: encryptedPass }, uid);
  saveKeyToLocalStorage(uid, rsaCreator.getPrivateKey());
};

export const restorePasswordFromDb = (uid: string, userData: IUSerData) => (password: String) => {
  const { rsaKey } = userData;
  const decryptedKey = new RsaCreator(rsaKey as string, password as string);
  saveKeyToLocalStorage(uid, decryptedKey.getPrivateKey());
};

export const redirectAfterPasswordEnter = () => {
  setTimeout(() => {
    navigate(paths.HOME);
  }, 300);
};
