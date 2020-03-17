import React from 'react';
import { FriendsListProps } from './FriendsListTypes';
import EmptyFriendsListWelcomeScreen from './EmptyFriendsListWelcomeScreen/EmptyFriendsListWelcomeScreen';

const FriendsList: React.FC<FriendsListProps> = ({ friendsList }) => {
    return <div>{!friendsList.length ? <EmptyFriendsListWelcomeScreen /> : 'FriendsList'}</div>;
};

export default FriendsList;
