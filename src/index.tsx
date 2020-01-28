import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import store from './common/Redux/store';
import { Provider } from 'react-redux';

import firebaseApp from './common/Firebase/Firebase';

if (!firebaseApp) {
  console.error('Firebase app is not loaded!');
}

const StoredApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<StoredApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
