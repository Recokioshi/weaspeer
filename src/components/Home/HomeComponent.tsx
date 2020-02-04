import React, { useEffect } from 'react';
import { HomeProps } from './HomeTypes';

const Home: React.FC<HomeProps> = ({
  uid,
  userData,
  getUserData,
  redirectUserCreationIfNeeded,
}) => {
  useEffect(() => {
    redirectUserCreationIfNeeded(userData);
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
