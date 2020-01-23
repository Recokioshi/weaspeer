import React, { useEffect } from 'react';
import { RouteComponentProps, navigate } from '@reach/router';

const NotFound: React.FC<RouteComponentProps> = () => {
  useEffect(() => {
    navigate(`/`);
  });

  return (
    <div className="App">
      <header className="App-header">
        <p>404 not found</p>
      </header>
    </div>
  );
};

export default NotFound;
