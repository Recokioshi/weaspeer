import UserCreator from './UserCreatorComponent';
import { connect } from 'react-redux';
import { ApplicationState } from '../../../common/Redux/types';
import { UserCreatorStateProps, UserCreatorDispatchProps, UserCreatorOwnProps } from './UserCreatorTypes';
import { validateNewUserData, saveNewUserData } from './duck/UserCreatorOperations';

const mapStateToProps = (state: ApplicationState, ownProps: UserCreatorOwnProps): UserCreatorStateProps => {
    const { userData, uid } = state.App;
    return {
        uid: uid,
        userInfo: userData.userInfo,
        validateNewUserData,
        saveNewUserData: saveNewUserData(userData),
        ...ownProps,
    };
};

const mapDispatchToProps = (dispatch: any) => ({});

export default connect<UserCreatorStateProps, UserCreatorDispatchProps, UserCreatorOwnProps, ApplicationState>(
    mapStateToProps,
    mapDispatchToProps,
)(UserCreator);
