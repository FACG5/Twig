import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import Button from '../../../../common/Button';

export default function TextTranslation(props) {
  const { onChange, onClick, validation } = props;
  const typeId = 1;

  return (
    <div className="donate__text">
      <h3 className="textarea__titel"> Write here your translation </h3>
      <textarea
        className="textarea__box"
        name="translation"
        id=""
        cols="50"
        rows="4"
        onChange={onChange}
      />
      {validation ? <h1 className="donate__validation">Please add a translations</h1> : null}
      <Button onClick={() => onClick(typeId)} value="Submit Translation" className="donate__submit" />
    </div>
  );
}
TextTranslation.propTypes = {
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  validation: PropTypes.bool,
};
