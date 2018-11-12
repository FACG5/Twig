import React from 'react';
import Overview from './Overview';
import AboutMe from './AboutMe';
import LanguageLevel from './LanguageLevel';

export default function About(props) {
  return (
    <React.Fragment>
      <Overview />
      <AboutMe />
      <LanguageLevel />
    </React.Fragment>

  );
}
