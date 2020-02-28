import { PasswordCreatorRootComponentProps } from './PasswordCreatorTypes';
import NewPasswordCreator from './NewPassword/NewPasswordCreator';
import ExistingPassword from './EditPassword/ExistingPassword';

import React from 'react';

const PasswordCreator: React.FC<PasswordCreatorRootComponentProps> = ({
  shouldCreateNewPassword: createNewPassword,
  handlePasswordEntered,
}) => {
  const toRender = createNewPassword ? (
    <NewPasswordCreator passwordSavedCallback={handlePasswordEntered} />
  ) : (
    <ExistingPassword passwordSavedCallback={handlePasswordEntered} />
  );
  return <div>{toRender}</div>;
};

export default PasswordCreator;
