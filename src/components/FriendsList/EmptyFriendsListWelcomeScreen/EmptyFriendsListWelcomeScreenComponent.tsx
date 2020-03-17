import React from 'react';
import { EmptyFriendsListWelcomeScreenProps } from './EmptyFriendsListWelcomeScreenTypes';
import { Button } from '@material-ui/core';

const EmptyFriendsListWelcomeScreen: React.FC<EmptyFriendsListWelcomeScreenProps> = ({ redirectToAddNewFriend }) => {
    return (
        <div>
            You have no Friendss yet. Lets create one! You have no Friendss yet. Lets create one! You have no Friendss
            yet. Lets create one! You have no Friendss yet. Lets create one!
            <Button onClick={redirectToAddNewFriend}>Add friend</Button>
        </div>
    );
};

export default EmptyFriendsListWelcomeScreen;
