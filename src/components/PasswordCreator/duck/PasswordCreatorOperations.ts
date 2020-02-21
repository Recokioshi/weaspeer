import { RsaCreator } from '../../../common/Encryption/RsaCreator';

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

export const saveNewPassword = (uid: String) => (password: String) => {
  const rsaCreator = new RsaCreator();
  const encryptedPass = rsaCreator.encryptWithPassphrase(password as string);
  console.log(`save new key encrypted: ${encryptedPass} to user ${uid}`);
};

export const restorePasswordFromDb = (rsaKey: String, uid: String) => (password: String) => {
  const decryptedKey = new RsaCreator(rsaKey as string, password as string);
  console.log(`decrypted: ${decryptedKey.getPublicKey()}`);
};
