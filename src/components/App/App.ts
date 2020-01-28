import App from './AppComponent';
import { connect } from 'react-redux';
import { ApplicationState } from '../../common/Redux/types';
import { listenToAuthChanges } from './duck/AppOperations';

const mapStateToProps = (state: ApplicationState) => ({
  checkingForAuthorization: state.App.checkingUser,
  authorized: state.App.loggedIn
});

const mapDispatchToProps = (dispatch: any) => ({
  listenToAuthChanges: (): firebase.Unsubscribe => {
    return dispatch(listenToAuthChanges());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
