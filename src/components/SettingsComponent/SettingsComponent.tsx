import React from 'react';
import UserCreator from './UserCreator/UserCreator';
import PasswordCreator from './PasswordCreator/PasswordCreator';
import { RouteComponentProps } from '@reach/router';
import { Paper, Container } from '@material-ui/core';

const SettingsComponent: React.FC<RouteComponentProps> = () => {
    return (
        <Container component="main" maxWidth="xs">
            <Paper>
                <UserCreator standalone={false} />
                <PasswordCreator enforceNewPassword={true} standalone={false} />
            </Paper>
        </Container>
    );
};

export default SettingsComponent;
