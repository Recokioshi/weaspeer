import firebaseApp from '../Firebase/Firebase';
import { COLLECTIONS } from './constants';

export const isAuthenticated = (): boolean => {
  return !!firebaseApp.auth().currentUser;
};

export const authStateChangeListener = (
  onLogin: Function,
  onLogout: Function
): firebase.Unsubscribe =>
  firebaseApp.auth().onAuthStateChanged(user => {
    if (user) {
      onLogin(user.uid);
    } else {
      onLogout();
    }
  });

export const loadUserData = (uid: string, handleUserDataLoaded: Function) => {
  const db = firebaseApp.firestore();
  db.collection(COLLECTIONS.USERS)
    .doc(uid)
    .get()
    .then((userInfo: firebase.firestore.DocumentSnapshot) => {
      const userData = userInfo.exists ? userInfo.data() : {};
      handleUserDataLoaded(userData);
    });
};
