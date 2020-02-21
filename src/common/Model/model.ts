import firebaseApp from '../Firebase/Firebase';
import { COLLECTIONS } from './constants';
import { UserData, IUSerData } from '../../components/App/UserData';
import { IModelUserNode } from './ModelTypes';

export const isAuthenticated = (): boolean => {
    return !!firebaseApp.auth().currentUser;
};

export const authStateChangeListener = (onLogin: Function, onLogout: Function): firebase.Unsubscribe =>
    firebaseApp.auth().onAuthStateChanged(user => {
        if (user) {
            onLogin(user.uid);
        } else {
            onLogout();
        }
    });

export const userDataListener = (uid: string, onUserDataLoaded: Function) => {
    const convertDbNodeToUserData = ({ creationDate, firstName, lastName, username }: IModelUserNode) => {
        const userData = new UserData(firstName, lastName, username);
        userData.userInfo.creationDate = creationDate;
        userData.rsaKey = 'temp';
        return userData;
    };

    const db = firebaseApp.firestore();
    //const userInfo: firebase.firestore.DocumentSnapshot | void = await
    db.collection(COLLECTIONS.USERS)
        .doc(uid)
        .onSnapshot(doc => {
            if (doc.exists) {
                console.log(doc.data());
                onUserDataLoaded(convertDbNodeToUserData(doc.data() as IModelUserNode));
            }
        });
};

export const setNewUserData = (uid: string, userData: IUSerData) => {
    const db = firebaseApp.firestore();
    const { userInfo } = userData;
    const { creationDate, firstName, lastName, username } = userInfo;
    db.collection(COLLECTIONS.USERS)
        .doc(uid)
        .set({ creationDate, firstName, lastName, username });
};
