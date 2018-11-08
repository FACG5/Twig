import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../../../../common/Button';
import Inputs from '../../../../../common/Inputs';
import './style.css';

export default function StageTwo(props) {
  const { onChange, logState } = props;
  return (
    <div>
      <h4 className="completeTitle"> Tell us About Your skills in English </h4>
      <hr />
      <div className="radioButtonsGroup">
        <div className="Boxes">
          <label className="container">
          Doctor (or medical student)
            <Inputs type="radio" checked="checked" name="radio" />
            <span className="checkmark" />
          </label>
          <label className="container">
          Nurse (or nursing student)
            <Inputs type="radio" name="radio" />
            <span className="checkmark" />
          </label>
          <label className="container">
          Psychologist
            <Inputs type="radio" name="radio" />
            <span className="checkmark" />
          </label>
          <label className="container">
          Medical Administrator
            <Inputs type="radio" name="radio" />
            <span className="checkmark" />
          </label>
        </div>
        <div className="Boxes">
          <label className="container">
          Dentist (or dental student)
            <Inputs type="radio" checked="checked" name="radio" />
            <span className="checkmark" />
          </label>
          <label className="container">
Two
            <Inputs type="radio" name="radio" />
            <span className="checkmark" />
          </label>
          <label className="container">
Three
            <Inputs type="radio" name="radio" />
            <span className="checkmark" />
          </label>
          <label className="container">
Four
            <Inputs type="radio" name="radio" />
            <span className="checkmark" />
          </label>
        </div>
      </div>
      <Button
        className="nextButton"
        id="nextDetails"
        onClick={logState}
        value="Next"
      />
    </div>
  );
}

StageTwo.propTypes = {
  onChange: PropTypes.func.isRequired,
  logState: PropTypes.func.isRequired,
};
