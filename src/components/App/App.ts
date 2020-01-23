import App from './AppComponent';
import { connect } from 'react-redux';
import { State } from '../../common/Redux/types';
import { listenToAuthChanges, checkIfUserIsCurrentlyLoggedIn } from './duck/AppOperations';

const mapStateToProps = (state: State) => ({
  checkingForAuthorization: state.App.checkingUser,
  authorized: state.App.loggedIn
});

const mapDispatchToProps = (dispatch: any) => ({
  listenToAuthChanges: (): firebase.Unsubscribe => {
    return dispatch(listenToAuthChanges());
  },
  checkIfUserIsCurrentlyLoggedIn: () => {
    dispatch(checkIfUserIsCurrentlyLoggedIn());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
