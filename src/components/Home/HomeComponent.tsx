import React from 'react';
import { HomeProps } from './HomeTypes';

const Home: React.FC<HomeProps> = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to HomeComponent</p>
      </header>
    </div>
  );
};

export default Home;
