import React, { useEffect } from 'react';
import { HomeProps } from './HomeTypes';
import Loading from '../Loading/LoadingComponent';

const Home: React.FC<HomeProps> = ({
  uid,
  userData,
  privateKey,
  redirectUserCreationIfNeeded,
  redirectPasswordCreationIfNeeded,
}) => {
  useEffect(() => {
    redirectUserCreationIfNeeded(userData);
    redirectPasswordCreationIfNeeded(privateKey, userData);
  });
  console.log(`hello from Home`);
  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome {uid}</p>
      </header>
    </div>
  );
};

export default Home;
