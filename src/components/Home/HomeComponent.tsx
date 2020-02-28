import React, { useEffect } from 'react';
import { HomeProps } from './HomeTypes';
import ChatList from '../ChatList/ChatList';

const Home: React.FC<HomeProps> = ({
  uid,
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
      <ChatList />
    </div>
  );
};

export default Home;
