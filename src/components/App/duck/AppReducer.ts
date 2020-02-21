import C from './AppConstants';
import { AppState, AppAction, AppUserLoggedInAction, AppUserDataLoadedAction } from '../AppTypes';

const initialUserData = {
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
    checkingUser: true,
    uid: '',
    userData: initialUserData,
};

export default (state: AppState = appInitialState, action: AppAction): AppState => {
    switch (action.type) {
        case C.APP_USER_CHECK:
            return {
                ...appInitialState,
            };
        case C.APP_LOGGED_IN:
            return {
                ...appInitialState,
                loggedIn: true,
                checkingUser: false,
                uid: (action as AppUserLoggedInAction).uid,
            };
        case C.APP_LOGGED_OUT:
            return {
                ...appInitialState,
                loggedIn: false,
                checkingUser: false,
                uid: '',
            };
        case C.APP_USER_DATA_LOADED:
            return { ...state, userData: (action as AppUserDataLoadedAction).userData, checkingUser: false };
        default:
            return state;
    }
};
