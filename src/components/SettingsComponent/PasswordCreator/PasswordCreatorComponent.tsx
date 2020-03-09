import { PasswordCreatorRootComponentProps } from './PasswordCreatorTypes';
import NewPasswordCreator from './NewPassword/NewPasswordCreator';
import ExistingPassword from './EditPassword/ExistingPassword';

import React from 'react';

const PasswordCreator: React.FC<PasswordCreatorRootComponentProps> = ({
    shouldCreateNewPassword: createNewPassword,
    handlePasswordEntered,
    standalone = true,
}) => {
    const toRender = createNewPassword ? (
        <NewPasswordCreator passwordSavedCallback={handlePasswordEntered} standalone={standalone} />
    ) : (
        <ExistingPassword passwordSavedCallback={handlePasswordEntered} standalone={standalone} />
    );
    return <div>{toRender}</div>;
};

export default PasswordCreator;
