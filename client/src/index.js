import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faTimesCircle,
  faGlobe,
  faTransgender,
  faGraduationCap,
  faMapMarkedAlt,
  faClipboardList,
  faIdCard,
} from '@fortawesome/free-solid-svg-icons';
import App from './App';
import * as serviceWorker from './serviceWorker';

library.add(
  faTimesCircle,
  faGlobe,
  faTransgender,
  faGraduationCap,
  faMapMarkedAlt,
  faClipboardList,
  faIdCard,
);
/* eslint-disable */
ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();