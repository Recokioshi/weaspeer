import React, { useEffect } from 'react';
import { HomeProps } from './HomeTypes';
import ChatList from '../ChatList/ChatList';

const Home: React.FC<HomeProps> = ({
    userData,
    privateKey,
    redirectUserCreationIfNeeded,
    redirectPasswordCreationIfNeeded,
}) => {
    useEffect(() => {
        console.log(`userData: ${userData}`);
        if (!redirectUserCreationIfNeeded(userData)) {
            redirectPasswordCreationIfNeeded(privateKey, userData);
        }
    });
    console.log('HOME');
    return (
        <div className="App">
            <ChatList />
        </div>
    );
};

export default Home;
