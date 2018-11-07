import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

/* eslint-disable */
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
