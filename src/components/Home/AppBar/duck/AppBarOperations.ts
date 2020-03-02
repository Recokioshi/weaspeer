import firebaseApp from '../../../../common/Firebase/Firebase';

export const handleLogOut = async () => {
    try {
        console.log('before sign out');
        await firebaseApp.auth().signOut();
        console.log('after sign out');
    } catch (error) {
        console.error(`sign out exception: ${error}`);
    }
};
