import { makeStyles } from '@material-ui/core/styles';
import { CSSProperties } from '@material-ui/core/styles/withStyles';

export const backgroundColorDark = '#595959';
const primaryColorDark = '#7F7F7F';
const primaryColor = '#A5A5A5';
const primaryColorLight = '#CCCCCC';
const selectionColorLight = '#F2F2F2';

const useStyles = makeStyles(theme => ({
  background: {
    backgroundColor: backgroundColorDark,
    minHeight: '100vh',
  },
  loginCardMediaLogo: {
    paddingTop: '56.25%',
  },
  createUserForm: {
    padding: '2em',
  },
  button: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default useStyles;
