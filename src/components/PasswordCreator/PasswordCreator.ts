import PasswordCreator from './PasswordCreatorComponent';
import { connect } from 'react-redux';
import { ApplicationState } from '../../common/Redux/types';
import {
  PasswordCreatorRootComponentStateProps,
  PasswordCreatorRootComponentDispatchProps,
  PasswordCreatorRootComponentOwnProps,
} from './PasswordCreatorTypes';

const mapStateToProps = (
  state: ApplicationState,
  ownProps: PasswordCreatorRootComponentOwnProps,
): PasswordCreatorRootComponentStateProps => {
  return {
    shouldCreateNewPassword: !state.App.userData.rsaKey,
    ...ownProps,
  };
};

const mapDispatchToProps = (dispatch: any) => ({});

export default connect<
  PasswordCreatorRootComponentStateProps,
  PasswordCreatorRootComponentDispatchProps,
  PasswordCreatorRootComponentOwnProps,
  ApplicationState
>(
  mapStateToProps,
  mapDispatchToProps,
)(PasswordCreator);
