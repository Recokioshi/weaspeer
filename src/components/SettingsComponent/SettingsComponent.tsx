import React from 'react';
import UserCreator from './UserCreator/UserCreator';
import PasswordCreator from './PasswordCreator/PasswordCreator';
import { RouteComponentProps } from '@reach/router';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';

const SettingsComponent: React.FC<RouteComponentProps> = () => {
    return (
        <Container component="main" maxWidth="xs">
            <Paper>
                <Box p={2}>
                    <UserCreator standalone={false} />
                </Box>
                <Divider />
                <Box p={2}>
                    <PasswordCreator enforceNewPassword={true} standalone={false} />
                </Box>
            </Paper>
        </Container>
    );
};

export default SettingsComponent;
