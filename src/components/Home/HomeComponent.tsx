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
        console.log(`userData: ${userData}`);
        if (!redirectUserCreationIfNeeded(userData)) {
            redirectPasswordCreationIfNeeded(privateKey, userData);
        }
    });
    console.log('HOME');
    return (
        <div className="App">
            <AppBarComponent handleLogOut={handleLogout}>
                <ChatList />
            </AppBarComponent>
        </div>
    );
};

export default Home;
