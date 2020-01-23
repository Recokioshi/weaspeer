import React from 'react';
import { RouteComponentProps } from '@reach/router';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import { uiConfig } from '../../common/Firebase/config';
import uiStyles from '../../common/Styles/material-uiStyles';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';

import logo from '../../assets/Weaspeer-logo.png';

const Login: React.FC<RouteComponentProps> = () => {
  const styles = uiStyles();
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      className={styles.background}
    >
      <Grid item xs={3}>
        <Card>
          <CardMedia image={logo} title="Weaspeer logo" className={styles.loginCardMediaLogo} />
          <CardContent>
            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
              <Typography variant="h5">Weaspeer</Typography>
              <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Login;
