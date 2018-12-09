import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faMicrophone,
  faTimesCircle,
  faGlobe,
  faTransgender,
  faGraduationCap,
  faMapMarkedAlt,
  faClipboardList,
  faIdCard,
  faLanguage,
  faBirthdayCake,
  faStop,
  faVideo,
  faEdit,
  faSave,
  faQuestionCircle,
  faNotesMedical,
} from '@fortawesome/free-solid-svg-icons';
import App from './App';
import * as serviceWorker from './serviceWorker';

library.add(
  faTimesCircle,
  faGlobe,
  faTransgender,
  faGraduationCap,
  faMapMarkedAlt,
  faStop,
  faVideo,
  faClipboardList,
  faIdCard,
  faLanguage,
  faBirthdayCake,
  faMicrophone,
  faEdit,
  faSave,
  faQuestionCircle,
  faNotesMedical,
);
/* eslint-disable */
ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();
