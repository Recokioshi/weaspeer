import UserCreator from './UserCreatorComponent';
import { connect } from 'react-redux';
import { ApplicationState } from '../../common/Redux/types';
import { UserCreatorStateProps, UserCreatorDispatchProps, UserCreatorOwnProps } from './UserCreatorTypes';
import { validateNewUserData, saveNewUserData } from './duck/UserCreatorOperations';

const mapStateToProps = (state: ApplicationState, ownProps: UserCreatorOwnProps): UserCreatorStateProps => ({
    uid: state.App.uid,
    userInfo: state.App.userData.userInfo,
    validateNewUserData,
    saveNewUserData,
    ...ownProps,
});

const mapDispatchToProps = (dispatch: any) => ({});

export default connect<UserCreatorStateProps, UserCreatorDispatchProps, UserCreatorOwnProps, ApplicationState>(
    mapStateToProps,
    mapDispatchToProps,
)(UserCreator);
