import ExistingPasswordComponent from './ExistingPasswordComponent';
import { connect } from 'react-redux';
import { ApplicationState } from '../../../../common/Redux/types';
import {
  PasswordCreatorEditStateProps,
  PasswordCreatorEditDispatchProps,
  PasswordCreatorEditOwnProps,
} from '../PasswordCreatorTypes';
import { validateNewPassword, restorePasswordFromDb } from '../duck/PasswordCreatorOperations';

const mapStateToProps = (
  state: ApplicationState,
  ownProps: PasswordCreatorEditOwnProps,
): PasswordCreatorEditStateProps => {
  const uid = state.App.uid;
  return {
    handlePasswordSubmit: restorePasswordFromDb(uid, state.App.userData),
    validateNewPassword,
    ...ownProps,
  };
};

const mapDispatchToProps = (dispatch: any) => ({});

export default connect<
  PasswordCreatorEditStateProps,
  PasswordCreatorEditDispatchProps,
  PasswordCreatorEditOwnProps,
  ApplicationState
>(
  mapStateToProps,
  mapDispatchToProps,
)(ExistingPasswordComponent);
