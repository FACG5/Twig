import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import App from './App';
import * as serviceWorker from './serviceWorker';

library.add(faTimesCircle);
/* eslint-disable */
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
