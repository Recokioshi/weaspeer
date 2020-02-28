import React, { useEffect } from 'react';
import { HomeProps } from './HomeTypes';

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
      <header className="App-header">
        <p>Welcome {uid}</p>
      </header>
    </div>
  );
};

export default Home;
