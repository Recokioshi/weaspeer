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

export const loadUserData = async (uid: string) => {
  const db = firebaseApp.firestore();
  const userInfo: firebase.firestore.DocumentSnapshot | void = await db
    .collection(COLLECTIONS.USERS)
    .doc(uid)
    .get();
  return userInfo.exists ? userInfo.data() : null;
};
