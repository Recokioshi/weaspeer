import { RouteComponentProps } from '@reach/router';

export type EmptyFriendsListWelcomeScreenState = {};

export type EmptyFriendsListWelcomeScreenStateProps = { redirectToAddNewFriend: () => void };

export type EmptyFriendsListWelcomeScreenDispatchProps = {};

export type EmptyFriendsListWelcomeScreenOwnProps = {} & RouteComponentProps;

export type EmptyFriendsListWelcomeScreenProps = EmptyFriendsListWelcomeScreenStateProps &
    EmptyFriendsListWelcomeScreenDispatchProps &
    EmptyFriendsListWelcomeScreenOwnProps;
