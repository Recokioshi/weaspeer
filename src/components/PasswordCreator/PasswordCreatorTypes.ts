import { RouteComponentProps } from '@reach/router';
import { PasswordCreatorInputs, PasswordValidationResults } from './duck/PasswordCreatorOperations';

export type PasswordCreatorEditStateProps = {
  handlePasswordSubmit: (password: string) => void;
  validateNewPassword: (userInputs: PasswordCreatorInputs) => PasswordValidationResults;
};

export type PasswordCreatorEditDispatchProps = {};

export type PasswordCreatorEditOwnProps = {
  passwordSavedCallback: Function;
};

export type PasswordCreatorEditProps = PasswordCreatorEditStateProps &
  PasswordCreatorEditDispatchProps &
  PasswordCreatorEditOwnProps;

export type PasswordCreatorRootComponentStateProps = {
  shouldCreateNewPassword: boolean;
  handlePasswordEntered: Function;
};

export type PasswordCreatorRootComponentDispatchProps = {};

export type PasswordCreatorRootComponentOwnProps = {};

export type PasswordCreatorRootComponentProps = PasswordCreatorRootComponentStateProps &
  PasswordCreatorRootComponentDispatchProps &
  PasswordCreatorRootComponentOwnProps &
  RouteComponentProps;
