import firebaseApp from '../../../../common/Firebase/Firebase';

export const handleLogOut = (handleLogoutFromParent: Function) => {
    try {
        firebaseApp.auth().signOut();
    } catch (error) {
        console.error(`sign out exception: ${error}`);
    }
};
