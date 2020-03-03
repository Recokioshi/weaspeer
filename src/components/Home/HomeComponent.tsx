import React, { useEffect } from 'react';
import { HomeProps } from './HomeTypes';
import ChatList from '../ChatList/ChatList';
import AppBarComponent from './AppBar/AppBar';

const Home: React.FC<HomeProps> = ({
    userData,
    privateKey,
    redirectUserCreationIfNeeded,
    redirectPasswordCreationIfNeeded,
    handleLogout,
}) => {
    useEffect(() => {
        if (!redirectUserCreationIfNeeded(userData)) {
            redirectPasswordCreationIfNeeded(privateKey, userData);
        }
    });
    return (
        <div className="App">
            <AppBarComponent handleLogOut={handleLogout} />
            <ChatList />
        </div>
    );
};

export default Home;
