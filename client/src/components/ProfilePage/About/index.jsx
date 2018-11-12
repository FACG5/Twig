import React, { Fragment } from 'react';
import Overview from './Overview';
import AboutMe from './AboutMe';
import LanguageLevel from './LanguageLevel';

export default function About(props) {
  return (
    <Fragment>
      <Overview />
      <AboutMe />
      <LanguageLevel />
    </Fragment>

  );
}
