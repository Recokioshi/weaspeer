import { RouteComponentProps } from '@reach/router';

export type FriendsListState = {};

export type FriendsListStateProps = {
    friendsList: string[];
};

export type FriendsListDispatchProps = {};

export type FriendsListOwnProps = {} & RouteComponentProps;

export type FriendsListProps = FriendsListStateProps & FriendsListDispatchProps & FriendsListOwnProps;
