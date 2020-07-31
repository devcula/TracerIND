import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
// import App from './App';
import Root from './components/Root/Root';
import * as serviceWorker from './serviceWorker';
import { configureFakeBackend } from './helpers';

configureFakeBackend();

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

export const uri = process.env.REACT_APP_SERVER_URI;
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
