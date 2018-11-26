import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Overview from './Overview';
import AboutMe from './AboutMe';
import LanguageLevel from './LanguageLevel';

const About = (props) => {
  const { values, languageResult } = props;
  return (
    <Fragment>
      <Overview values={values} />
      <AboutMe values={values} />
      <LanguageLevel values={values} languageResult={languageResult} />
    </Fragment>

  );
};

About.propTypes = {
  values: PropTypes.instanceOf(Object).isRequired,
  languageResult: PropTypes.instanceOf(Array).isRequired,
};


export default About;
