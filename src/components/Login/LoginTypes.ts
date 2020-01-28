import { RouteComponentProps } from '@reach/router';

export type LoginStateProps = {
  authorized: boolean;
};

export type LoginDispatchProps = {};

export type LoginOwnProps = RouteComponentProps;

export type LoginProps = LoginStateProps & LoginDispatchProps & LoginOwnProps;
