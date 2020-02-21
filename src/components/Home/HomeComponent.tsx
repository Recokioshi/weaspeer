import React, { useEffect } from 'react';
import { HomeProps } from './HomeTypes';
import Loading from '../Loading/LoadingComponent';

const Home: React.FC<HomeProps> = ({ uid, userData, redirectUserCreationIfNeeded, checkingUser }) => {
    useEffect(() => {
        redirectUserCreationIfNeeded(userData, checkingUser);
    });

    const renderComponent = checkingUser ? (
        <Loading />
    ) : (
        <div className="App">
            <header className="App-header">
                <p>Welcome {uid}</p>
            </header>
        </div>
    );

    return renderComponent;
};

export default Home;
