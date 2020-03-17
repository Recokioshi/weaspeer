import { RouteComponentProps } from '@reach/router';

export type NewFriendState = {};

export type NewFriendStateProps = { redirectToAddNewFriend: () => void };

export type NewFriendDispatchProps = {};

export type NewFriendOwnProps = {} & RouteComponentProps;

export type NewFriendProps = NewFriendStateProps & NewFriendDispatchProps & NewFriendOwnProps;
