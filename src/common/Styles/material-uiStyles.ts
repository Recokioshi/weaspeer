import { makeStyles } from '@material-ui/core/styles';
import { CSSProperties } from '@material-ui/core/styles/withStyles';

const backgroundColorDark = '#595959';
const primaryColorDark = '#7F7F7F';
const primaryColor = '#A5A5A5';
const primaryColorLight = '#CCCCCC';
const selectionColorLight = '#F2F2F2';

const background: CSSProperties = {
  backgroundColor: backgroundColorDark,
  minHeight: '100vh'
};

const loginCardMediaLogo: CSSProperties = {
  paddingTop: '56.25%'
};

const useStyles = makeStyles({
  background,
  loginCardMediaLogo
});

export default useStyles;
