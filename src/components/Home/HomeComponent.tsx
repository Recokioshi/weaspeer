import React, { useEffect } from 'react';
import { HomeProps } from './HomeTypes';
import ChatList from '../ChatList/ChatList';
import AppBarComponent from './AppBar/AppBar';

const Home: React.FC<HomeProps> = ({
    userData,
    privateKey,
    redirectUserCreationIfNeeded,
    redirectPasswordCreationIfNeeded,
}) => {
    useEffect(() => {
        if (!redirectUserCreationIfNeeded(userData)) {
            redirectPasswordCreationIfNeeded(privateKey, userData);
        }
    });
    return (
        <div className="App">
            <AppBarComponent />
            <ChatList />
        </div>
    );
};

export default Home;
