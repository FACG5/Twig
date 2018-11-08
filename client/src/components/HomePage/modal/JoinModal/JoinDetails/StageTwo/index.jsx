import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../../../../../common/Button';
import Inputs from '../../../../../common/Inputs';
import './style.css';

export default class StageTwo extends Component {
  state = { other: false }

  switchOther = () => {
    this.setState(prevState => (
      { other: !prevState.other }
    ));
  }

  render() {
    const { onChange, changeStage } = this.props;
    return (
      <div className="contentOfDetails">
        <h4 className="title"> Tell us About Your skills in English </h4>
        <hr />
        <div className="radioButtonsGroup">
          <div className="boxes">
            <label className="container">
            Doctor (or medical student)
              <Inputs type="radio" checked="checked" name="jobTitle" onChange={onChange} value="Doctor" />
              <span className="mark__checkbox" />
            </label>
            <label className="container">
            Nurse (or nursing student)
              <Inputs type="radio" name="jobTitle" onChange={onChange} />
              <span className="mark__checkbox" />
            </label>
            <label className="container">
            Psychologist
              <Inputs type="radio" name="jobTitle" onChange={onChange} />
              <span className="mark__checkbox" />
            </label>
            <label className="container">
             Medical paraprofessional (or studentexamples include paramedics, physical therapists, nursing, assistants, radiology technicians, etc.
              <Inputs type="radio" name="jobTitle" onChange={onChange} />
              <span className="mark__checkbox" />
            </label>
            <label className="container">
            Medical Administrator
              <Inputs type="radio" name="jobTitle" onChange={onChange} />
              <span className="mark__checkbox" />
            </label>
          </div>
          <div className="boxes">
            <label className="container">
            Dentist (or dental student)
              <Inputs type="radio" checked="checked" name="jobTitle" onChange={onChange} />
              <span className="mark__checkbox" />
            </label>
            <label className="container">
            midwife, or specialist in Family Medicine
              <Inputs type="radio" name="jobTitle" onChange={onChange} />
              <span className="mark__checkbox" />
            </label>
            <label className="container">
            Academic: Porfessor, Lecturer, etc.
              <Inputs type="radio" name="jobTitle" onChange={onChange} />
              <span className="mark__checkbox" />
            </label>
            <label className="container">
            I am a cultural mediator or proffessional traslator
              <Inputs type="radio" name="jobTitle" onChange={onChange} />
              <span className="mark__checkbox" />
            </label>
            <label className="container">
              other
              <Inputs type="radio" name="jobTitle" />
              <span className="mark__checkbox" />
            </label>
          </div>
        </div>
        <Button
          className="button__next"
          id="nextDetails"
          onClick={null}
          value="Next"
        />
        <Button
          className="button__back"
          id="nextDetails"
          onClick={changeStage}
          value="Back"
        />
      </div>
    );
  }
}

StageTwo.propTypes = {
  onChange: PropTypes.func.isRequired,
  changeStage: PropTypes.func.isRequired,
};
