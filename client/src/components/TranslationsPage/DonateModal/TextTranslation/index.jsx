import React from 'react';
import './style.css';
import Button from '../../../common/Button';

export default function TextTranslation() {
  return (
    <div className="donate__text">
      <h3 className="textarea__titel"> Write here your translation </h3>
      <textarea
        className="textarea__box"
        name="translation"
        id=""
        cols="50"
        rows="4"
      />
      <Button onClick={null} value="Submit Translation" className="donate__submit" />
    </div>
  );
}
