import App from './AppComponent';
import { connect } from 'react-redux';
import { ApplicationState } from '../../common/Redux/types';
import {
    listenToAuthChanges,
    listenToUserData,
    loadPrivateKeyFromStorage,
    stopAllListeners,
    handleLogOutButtonClick,
} from './duck/AppOperations';

const mapStateToProps = (state: ApplicationState) => {
    const {
        checkingAuth,
        checkingUser,
        checkingKey,
        loggedIn,
        privateKey,
        userDataLoaded,
        authListening,
        userListening,
    } = state.App;
    const dataIsLoading = checkingAuth || checkingUser || checkingKey;
    console.log(
        `dataIsLoading: checkingAuth: ${checkingAuth}, checkingUser: ${checkingUser}, checkingKey ${checkingKey}`,
    );
    const authorized = loggedIn;
    const allDataLoaded = !dataIsLoading && (!authorized || (authorized && privateKey !== '' && userDataLoaded));
    console.log(
        `allDataLoaded - dataIsLoading: ${dataIsLoading}, authorized: ${authorized}, privateKey: ${privateKey}, userDataLoaded: ${userDataLoaded}`,
    );
    return {
        checkingForAuthorization: checkingAuth,
        authListening,
        userListening,
        allDataLoaded: allDataLoaded,
        authorized,
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
    stopAllListeners: () => {
        return dispatch(stopAllListeners());
    },
    handleLogOutButtonClick: () => {
        return dispatch(handleLogOutButtonClick());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
