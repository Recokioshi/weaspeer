import PasswordCreator from './PasswordCreatorComponent';
import { connect } from 'react-redux';
import { ApplicationState } from '../../../common/Redux/types';
import {
    PasswordCreatorRootComponentStateProps,
    PasswordCreatorRootComponentDispatchProps,
    PasswordCreatorRootComponentOwnProps,
} from './PasswordCreatorTypes';
import { redirectAfterPasswordEnter } from './duck/PasswordCreatorOperations';

const mapStateToProps = (
    state: ApplicationState,
    ownProps: PasswordCreatorRootComponentOwnProps,
): PasswordCreatorRootComponentStateProps => {
    return {
        shouldCreateNewPassword: ownProps.enforceNewPassword || !state.App.userData.rsaKey,
        handlePasswordEntered: redirectAfterPasswordEnter,
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
