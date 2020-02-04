import UserCreator from './UserCreatorComponent';
import { connect } from 'react-redux';
import { ApplicationState } from '../../common/Redux/types';
import {
  UserCreatorStateProps,
  UserCreatorDispatchProps,
  UserCreatorOwnProps,
} from './UserCreatorTypes';
import { validateNewUserData, saveNewUserData } from './duck/UserCreatorOperations';

const mapStateToProps = (state: ApplicationState, ownProps: any): UserCreatorStateProps => ({
  userInfo: state.Home.userData.userInfo,
  validateNewUserData,
});

const mapDispatchToProps = (dispatch: any) => ({
  saveNewUserData,
});

export default connect<
  UserCreatorStateProps,
  UserCreatorDispatchProps,
  UserCreatorOwnProps,
  ApplicationState
>(
  mapStateToProps,
  mapDispatchToProps
)(UserCreator);
