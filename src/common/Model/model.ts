import firebaseApp from '../Firebase/Firebase';

export const isAuthenticated = (): boolean => !!firebaseApp.auth().currentUser;

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
