import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const LanguageLevel = (props) => {
  const { languageResult } = props;

  return (
    <div className="language__box">
      <h3 className="language__title">Language Level</h3>
      <div className="language__content">
        <hr />
        <ul>
          {languageResult.length ? (
            languageResult.map((element) => {
              const { skillsDescription, skillsId } = element;
              return <li key={skillsId}>{skillsDescription}</li>;
            })
          ) : (
            <h4> No Languages level Specified !</h4>
          )}
        </ul>
      </div>
    </div>
  );
};
LanguageLevel.propTypes = {
  languageResult: PropTypes.instanceOf(Array).isRequired,
};

export default LanguageLevel;
