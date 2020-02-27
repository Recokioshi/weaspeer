import App from './AppComponent';
import { connect } from 'react-redux';
import { ApplicationState } from '../../common/Redux/types';
import { listenToAuthChanges, listenToUserData, loadPrivateKeyFromStorage } from './duck/AppOperations';

const mapStateToProps = (state: ApplicationState) => {
  const { checkingAuth, checkingUser, checkingKey, loggedIn, privateKey, userDataLoaded } = state.App;
  const dataIsLoading = checkingAuth || checkingUser || checkingKey;
  const allDataLoaded = !dataIsLoading && loggedIn && privateKey !== '' && userDataLoaded;
  const authorized = state.App.loggedIn;
  return {
    checkingForAuthorization: checkingUser,
    allDataLoaded: allDataLoaded,
    authorized: state.App.loggedIn,
    uid: state.App.uid,
    shouldLoadPrivateKey: authorized && !(checkingKey || privateKey),
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  listenToAuthChanges: (): firebase.Unsubscribe => {
    return dispatch(listenToAuthChanges());
  },
  listenToUserData: (uid: string) => {
    return dispatch(listenToUserData(uid));
  },
  loadPrivateKeyFromStorage: (uid: string) => {
    return dispatch(loadPrivateKeyFromStorage(uid));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
