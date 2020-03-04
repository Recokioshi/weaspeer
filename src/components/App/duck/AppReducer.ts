import C from './AppConstants';
import {
    AppState,
    AppAction,
    AppUserLoggedInAction,
    AppUserDataLoadedAction,
    AppPrivateKeyLoadedAction,
} from '../AppTypes';

export const initialUserData = {
    chatList: [],
    rsaKey: '',
    userInfo: {
        creationDate: new Date(),
        firstName: '',
        lastName: '',
        username: '',
    },
};

export const appInitialState: AppState = {
    loggedIn: false,
    checkingUser: false,
    checkingAuth: false,
    checkingKey: false,
    authListening: false,
    userListening: false,
    uid: '',
    userData: initialUserData,
    userDataLoaded: false,
    privateKey: '',
};

export default (state: AppState = appInitialState, action: AppAction): AppState => {
    console.log(`App reducer ${action.type}`);
    switch (action.type) {
        case C.APP_USER_CHECK:
            return {
                ...state,
                checkingUser: true,
                userListening: true,
            };
        case C.APP_USER_OFF:
            return {
                ...state,
                userListening: false,
            };
        case C.APP_AUTH_CHECK:
            return {
                ...state,
                checkingAuth: true,
                authListening: true,
            };
        case C.APP_AUTH_OFF:
            return {
                ...state,
                authListening: false,
            };
        case C.APP_KEY_CHECK:
            return {
                ...state,
                checkingKey: true,
            };
        case C.APP_LOGGED_IN:
            return {
                ...appInitialState,
                loggedIn: true,
                authListening: state.authListening,
                userListening: state.userListening,
                checkingAuth: false,
                uid: (action as AppUserLoggedInAction).uid,
            };
        case C.APP_LOGGED_OUT:
            return {
                ...appInitialState,
                authListening: state.authListening,
                userListening: state.userListening,
            };
        case C.APP_USER_DATA_LOADED:
            return {
                ...state,
                userData: (action as AppUserDataLoadedAction).userData,
                checkingUser: false,
                userDataLoaded: true,
            };
        case C.APP_PRIVATE_KEY_LOADED:
            return { ...state, privateKey: (action as AppPrivateKeyLoadedAction).key, checkingKey: false };
        default:
            return state;
    }
};
