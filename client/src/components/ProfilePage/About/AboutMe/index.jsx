import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const AboutMe = (props) => {
  const { values } = props;
  const { bio } = values;
  return (
    <div className="aboutme__box">
      <h3 className="aboutme__title">About Me</h3>
      <hr />
      <div className="aboutme__content">
        <p>{bio}</p>
      </div>
    </div>
  );
};

AboutMe.propTypes = {
  values: PropTypes.instanceOf(Object).isRequired,
};

export default AboutMe;
