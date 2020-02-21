import PasswordCreator from './PasswordCreatorComponent';
import { connect } from 'react-redux';
import { ApplicationState } from '../../common/Redux/types';
import {
  PasswordCreatorStateProps,
  PasswordCreatorDispatchProps,
  PasswordCreatorOwnProps,
} from './PasswordCreatorTypes';
import { validateNewPassword, restorePasswordFromDb, saveNewPassword } from './duck/PasswordCreatorOperations';

const mapStateToProps = (state: ApplicationState, ownProps: PasswordCreatorOwnProps): PasswordCreatorStateProps => {
  const rsaKey = state.App.userData.rsaKey;
  const uid = state.App.uid;
  return {
    handlePasswordSubmit: rsaKey ? restorePasswordFromDb(rsaKey, uid) : saveNewPassword(uid),
    validateNewPassword,
    ...ownProps,
  };
};

const mapDispatchToProps = (dispatch: any) => ({});

export default connect<
  PasswordCreatorStateProps,
  PasswordCreatorDispatchProps,
  PasswordCreatorOwnProps,
  ApplicationState
>(
  mapStateToProps,
  mapDispatchToProps,
)(PasswordCreator);
