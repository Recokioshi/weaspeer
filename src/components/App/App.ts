import App from './AppComponent';
import { connect } from 'react-redux';
import { ApplicationState } from '../../common/Redux/types';
import { listenToAuthChanges, listenToUserData } from './duck/AppOperations';

const mapStateToProps = (state: ApplicationState) => ({
    checkingForAuthorization: state.App.checkingUser,
    authorized: state.App.loggedIn,
    uid: state.App.uid,
});

const mapDispatchToProps = (dispatch: any) => ({
    listenToAuthChanges: (): firebase.Unsubscribe => {
        return dispatch(listenToAuthChanges());
    },
    listenToUserData: (uid: string) => {
        return dispatch(listenToUserData(uid));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
