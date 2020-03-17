import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

const Wrapper: React.FC<{ standalone: boolean; styles: any }> = ({ standalone, styles, children }) => {
    return standalone ? (
        <Container component="main" maxWidth="xs">
            <Paper className={styles.createUserForm}>{children}</Paper>
        </Container>
    ) : (
        <div>{children}</div>
    );
};

export default Wrapper;
