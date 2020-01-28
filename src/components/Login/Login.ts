import Login from './LoginComponent';
import { connect } from 'react-redux';
import { ApplicationState } from '../../common/Redux/types';
import { LoginStateProps, LoginDispatchProps, LoginOwnProps } from './LoginTypes';
import { Dispatch } from 'redux';

const mapStateToProps = (state: ApplicationState, ownProps: LoginOwnProps): LoginStateProps => ({
  authorized: state.App.loggedIn
});

const mapDispatchToProps = (dispatch: Dispatch, ownProps: LoginOwnProps) => ({});

export default connect<LoginStateProps, LoginDispatchProps, LoginOwnProps, ApplicationState>(
  mapStateToProps,
  mapDispatchToProps
)(Login);
