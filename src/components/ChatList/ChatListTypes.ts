import { RouteComponentProps } from '@reach/router';

export type ChatListState = {};

export type ChatListStateProps = {
    roomList: string[];
};

export type ChatListDispatchProps = {};

export type ChatListOwnProps = {} & RouteComponentProps;

export type ChatListProps = ChatListStateProps & ChatListDispatchProps & ChatListOwnProps;
