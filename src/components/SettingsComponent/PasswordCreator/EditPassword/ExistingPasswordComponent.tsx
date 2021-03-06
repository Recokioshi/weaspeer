import React, { useState, ChangeEvent } from 'react';

import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

import { backgroundColorDark } from '../../../../common/Styles/material-uiStyles';
import { makeStyles } from '@material-ui/core/styles';
import { PasswordCreatorEditProps } from '../PasswordCreatorTypes';
import { PasswordValidationResults } from '../duck/PasswordCreatorOperations';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles(theme => ({
    background: {
        backgroundColor: backgroundColorDark,
        minHeight: '100vh',
    },
    loginCardMediaLogo: {
        paddingTop: '56.25%',
    },
    createUserForm: {
        padding: theme.spacing(5),
        marginTop: '50%',
    },
    button: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const onChangeSetValue = (setValueFunction: (newVal: string) => void) => (event: ChangeEvent<HTMLInputElement>) => {
    setValueFunction(event.target.value);
};

const ExistingPasswordComponent: React.FC<PasswordCreatorEditProps> = ({
    handlePasswordSubmit,
    passwordSavedCallback,
}) => {
    const styles = useStyles();
    const [newPassword, setNewPassword] = useState('');
    const [validationMessages, setValidationMessages] = useState<PasswordValidationResults>([]);

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setValidationMessages([]);
        try {
            handlePasswordSubmit(newPassword);
            passwordSavedCallback();
        } catch (err) {
            setValidationMessages([...validationMessages, err.message]);
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Paper className={styles.createUserForm}>
                <form onSubmit={onSubmit}>
                    <Box display="flex" flexDirection="column" alignItems="center">
                        <Typography>Enter password</Typography>
                        <TextField
                            id="password"
                            label="Password"
                            onChange={onChangeSetValue(setNewPassword)}
                            value={newPassword}
                            margin="normal"
                            type="password"
                        />
                        {validationMessages.length > 0 &&
                            validationMessages.map((message: String) => (
                                <Alert severity="error" key={`${message}`}>
                                    {message}
                                </Alert>
                            ))}
                        <Button variant="contained" color="primary" type="submit" className={styles.button}>
                            Submit
                        </Button>
                    </Box>
                </form>
            </Paper>
        </Container>
    );
};

export default ExistingPasswordComponent;
