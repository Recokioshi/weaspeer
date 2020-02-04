import React, { useState } from 'react';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import uiStyles from '../../common/Styles/material-uiStyles';
import { UserCreatorProps } from './UserCreatorTypes';

const UserCreator: React.FC<UserCreatorProps> = ({
  userInfo,
  saveNewUserData,
  validateNewUserData,
}) => {
  const styles = uiStyles();
  const { firstName, lastName, username } = userInfo;
  const [formFirstName, setFirstName] = useState(firstName);
  const [formLastName, setLastName] = useState(lastName);
  const [formUsername, setUsername] = useState(username);

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
        <Paper>
          <form
            onSubmit={() => {
              if (validateNewUserData()) {
                saveNewUserData();
              }
            }}
          >
            
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default UserCreator;
