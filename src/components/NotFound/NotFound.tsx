import React from 'react';
import { RouteComponentProps } from '@reach/router';

const NotFound: React.FC<RouteComponentProps> = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>404 not found</p>
      </header>
    </div>
  );
};

export default NotFound;
