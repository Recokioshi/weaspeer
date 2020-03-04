import firebaseApp from '../Firebase/Firebase';
import { COLLECTIONS } from './constants';
import { UserData, IUSerData } from '../../components/App/UserData';
import { IModelUserNode } from './ModelTypes';

export const isAuthenticated = (): boolean => {
    return !!firebaseApp.auth().currentUser;
};

let unsubscribeAuthorizationFunction: Function | null = null;
let unsubscribeUserDataFunction: Function | null = null;

export const unsubscribeAuthorization = () => {
    if (unsubscribeAuthorizationFunction) {
        console.log(`auth unsubscribe`);
        unsubscribeAuthorizationFunction();
        unsubscribeAuthorizationFunction = null;
    }
};

export const unsubscribeUserData = () => {
    if (unsubscribeUserDataFunction) {
        console.log(`user data unsubscribe`);
        unsubscribeUserDataFunction();
        unsubscribeUserDataFunction = null;
    }
};

export const unsubscribeAll = () => {
    console.log(`all unsubscribe`);
    unsubscribeAuthorization();
    unsubscribeUserData();
};

export const authStateChangeListener = (onLogin: Function, onLogout: Function) => {
    if (!unsubscribeAuthorizationFunction) {
        console.log('listen to auth');
        unsubscribeAuthorizationFunction = firebaseApp.auth().onAuthStateChanged(user => {
            console.group(`onAuthStateChanged user: '${user}'`);
            if (user) {
                console.log('login');
                onLogin(user.uid);
            } else {
                console.log('logout');
                onLogout();
            }
            console.groupEnd();
        });
    }
};

export const userDataListener = (uid: string, onUserDataLoaded: Function) => {
    const convertDbNodeToUserData = ({
        creationDate,
        firstName,
        lastName,
        username,
        rsaKey,
        chatList,
    }: IModelUserNode) => {
        const userData = new UserData(firstName, lastName, username, rsaKey, chatList);
        userData.userInfo.creationDate = creationDate;
        return userData;
    };
    if (!unsubscribeUserDataFunction) {
        const db = firebaseApp.firestore();
        //const userInfo: firebase.firestore.DocumentSnapshot | void = await
        console.log('listen to user data');
        unsubscribeUserDataFunction = db
            .collection(COLLECTIONS.USERS)
            .doc(uid)
            .onSnapshot(doc => {
                if (doc.exists) {
                    console.log('user data loaded');
                    onUserDataLoaded(convertDbNodeToUserData(doc.data() as IModelUserNode));
                } else {
                    onUserDataLoaded(null);
                }
            });
    }
};

export const setNewUserData = (uid: string, userData: IUSerData) => {
    const db = firebaseApp.firestore();
    const { userInfo, rsaKey, chatList } = userData;
    const { creationDate, firstName, lastName, username } = userInfo;
    db.collection(COLLECTIONS.USERS)
        .doc(uid)
        .set({ creationDate, firstName, lastName, username, rsaKey, chatList });
};
