import { RouteComponentProps } from '@reach/router';
import { PasswordCreatorInputs, PasswordValidationResults } from './duck/PasswordCreatorOperations';

export type PasswordCreatorStateProps = {
  handlePasswordSubmit: (password: String) => void;
  validateNewPassword: (userInputs: PasswordCreatorInputs) => PasswordValidationResults;
};

export type PasswordCreatorDispatchProps = {};

export type PasswordCreatorOwnProps = {};

export type PasswordCreatorProps = PasswordCreatorStateProps &
  PasswordCreatorDispatchProps &
  PasswordCreatorOwnProps &
  RouteComponentProps;
