import { PasswordCreatorRootComponentProps } from './PasswordCreatorTypes';
import NewPasswordCreator from './NewPassword/NewPasswordCreator';
import ExistingPassword from './EditPassword/ExistingPassword';

import React from 'react';

const PasswordCreator: React.FC<PasswordCreatorRootComponentProps> = ({
  shouldCreateNewPassword: createNewPassword,
}) => {
  const toRender = createNewPassword ? <NewPasswordCreator /> : <ExistingPassword />;
  return <div>{toRender}</div>;
};

export default PasswordCreator;
