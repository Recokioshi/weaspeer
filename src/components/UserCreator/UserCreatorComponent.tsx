import React, { useState, ChangeEvent } from 'react';

import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

import { backgroundColorDark } from '../../common/Styles/material-uiStyles';
import { UserCreatorProps } from './UserCreatorTypes';
import { makeStyles } from '@material-ui/core/styles';
import { UserCreatorInputs, UserInfoValidationResults } from './duck/UserCreatorOperations';
import Alert from '../Alert/AlertComponent';
import { UserData } from '../App/UserData';

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

const UserCreator: React.FC<UserCreatorProps> = ({
    userInfo,
    saveNewUserData,
    validateNewUserData,
    isPasswordMandatory,
    uid,
}) => {
    const styles = useStyles();
    const { firstName, lastName, username } = userInfo;
    const [newFirstName, setNewFirstName] = useState(firstName);
    const [newLastName, setNewLastName] = useState(lastName);
    const [newUsername, setNewUsername] = useState(username);
    const [newPassword, setNewPassword] = useState(username);
    const [newPasswordRepeat, setNewPasswordRepeat] = useState(username);
    const [validationMessages, setValidationMessages] = useState<UserInfoValidationResults>([]);

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const userInputs: UserCreatorInputs = {
            newFirstName,
            newLastName,
            newUsername,
            newPassword,
            newPasswordRepeat,
        };
        const validationResults = validateNewUserData(userInputs, isPasswordMandatory);
        if (validationResults.length === 0) {
            saveNewUserData(new UserData(newFirstName, newLastName, newUsername), uid);
        } else {
            setValidationMessages(validationResults);
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Paper className={styles.createUserForm}>
                <form onSubmit={onSubmit}>
                    <Box display="flex" flexDirection="column" alignItems="center">
                        <Typography>User Info</Typography>
                        <TextField
                            id="new-first-name"
                            label="First name"
                            onChange={onChangeSetValue(setNewFirstName)}
                            value={newFirstName}
                            margin="normal"
                        />
                        <TextField
                            id="new-last-name"
                            label="Last name"
                            onChange={onChangeSetValue(setNewLastName)}
                            value={newLastName}
                            margin="normal"
                        />
                        <TextField
                            id="new-username"
                            label="Username"
                            onChange={onChangeSetValue(setNewUsername)}
                            value={newUsername}
                            margin="normal"
                        />
                        <TextField
                            id="new-password"
                            label="Password"
                            onChange={onChangeSetValue(setNewPassword)}
                            value={newPassword}
                            margin="normal"
                            type="password"
                            required={isPasswordMandatory ? true : false}
                        />
                        <TextField
                            id="new-password-repeat"
                            label="Repeat password"
                            onChange={onChangeSetValue(setNewPasswordRepeat)}
                            value={newPasswordRepeat}
                            margin="normal"
                            type="password"
                            required={isPasswordMandatory ? true : false}
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

export default UserCreator;
