import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import Button from '../../../../common/Button';

export default function TextTranslation(props) {
  const { onChange, onClick } = props;
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
      <Button onClick={() => onClick(typeId)} value="Submit Translation" className="donate__submit" />
    </div>
  );
}
TextTranslation.propTypes = {
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};
