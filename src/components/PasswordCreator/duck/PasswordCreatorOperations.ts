import { RsaCreator } from '../../../common/Encryption/RsaCreator';
import { IUSerData } from '../../App/UserData';

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

export const saveNewPassword = (uid: String, userData: IUSerData) => (password: String) => {
  const rsaCreator = new RsaCreator();
  const encryptedPass = rsaCreator.encryptWithPassphrase(password as string);
  console.log('saveNewPassword clicked');
};

export const restorePasswordFromDb = (uid: String, userData: IUSerData) => (password: String) => {
  const { rsaKey } = userData;
  const decryptedKey = new RsaCreator(rsaKey as string, password as string);
};
