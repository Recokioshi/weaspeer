import React from 'react';
import { RouteComponentProps } from '@reach/router';

interface IHomeProps extends RouteComponentProps {
  user: string;
}

const Home: React.FC<IHomeProps> = ({ user}) => {
  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to HomeComponent, {user}</p>
      </header>
    </div>
  );
};

export default Home;
