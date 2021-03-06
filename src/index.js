import React from 'react';
import ReactDOM from 'react-dom';
import './assets/style';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';

import App from './containers/App';
import myStore from './store';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={myStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
