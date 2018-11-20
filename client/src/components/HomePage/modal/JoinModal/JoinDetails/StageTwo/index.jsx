import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../../../../common/Button';
import Inputs from '../../../../../common/Inputs';
import './style.css';
import { ModalConsumer } from '../../../ModalContext';

export default function StageTwo() {
  return (
    <ModalConsumer>
      {context => (
        <div className="modal__details">
          <div className="modalHead">
            <h4 className="title">
              Tell us some details about your language skills
            </h4>
            <FontAwesomeIcon
              icon="times-circle"
              className="closeButton"
              onClick={context.closeModel}
            />
          </div>
          <hr />
          <div className="radioButtonsGroup">
            <div className="checkbox__container">
              <label className="container">
                Doctor (or medical student)
                <Inputs
                  type="radio"
                  name="jobTitle"
                  onChange={context.storeValue}
                  value="Doctor"
                />
                <span className="mark__checkbox" />
              </label>
              <label className="container">
                Nurse (or nursing student)
                <Inputs
                  type="radio"
                  name="jobTitle"
                  onChange={context.storeValue}
                  value="Nurse (or nursing student)"
                />
                <span className="mark__checkbox" />
              </label>
              <label className="container">
                Psychologist
                <Inputs
                  type="radio"
                  name="jobTitle"
                  onChange={context.storeValue}
                  value="Psychologist"
                />
                <span className="mark__checkbox" />
              </label>
              <label className="container">
                Medical paraprofessional (or studentexamples include paramedics,
                physical therapists, nursing, assistants, radiology technicians,
                etc.
                <Inputs
                  type="radio"
                  name="jobTitle"
                  onChange={context.storeValue}
                  value="Medical paraprofessional (or studentexamples include
                      paramedics, physical therapists, nursing, assistants,
                      radiology technicians, etc."
                />
                <span className="mark__checkbox" />
              </label>
              <label className="container">
                Medical Administrator
                <Inputs
                  type="radio"
                  name="jobTitle"
                  onChange={context.storeValue}
                  value="Medical Administrator"
                />
                <span className="mark__checkbox" />
              </label>
            </div>
            <div className="checkbox__container">
              <label className="container">
                Dentist (or dental student)
                <Inputs
                  type="radio"
                  name="jobTitle"
                  onChange={context.storeValue}
                  value=" Dentist (or dental student)"
                />
                <span className="mark__checkbox" />
              </label>
              <label className="container">
                midwife, or specialist in Family Medicine
                <Inputs
                  type="radio"
                  name="jobTitle"
                  onChange={context.storeValue}
                  value="midwife, or specialist in Family Medicine"
                />
                <span className="mark__checkbox" />
              </label>
              <label className="container">
                Academic: Porfessor, Lecturer, etc.
                <Inputs
                  type="radio"
                  name="jobTitle"
                  onChange={context.storeValue}
                  value="Academic: Porfessor, Lecturer, etc."
                />
                <span className="mark__checkbox" />
              </label>
              <label className="container">
                I am a cultural mediator or proffessional traslator
                <Inputs
                  type="radio"
                  name="jobTitle"
                  onChange={context.storeValue}
                  value="I am a cultural mediator or proffessional traslator"
                />
                <span className="mark__checkbox" />
              </label>
            </div>
          </div>
          <Button
            className="button__next"
            id="nextDetails"
            onClick={context.signUp}
            value="Next"
          />
          <Button
            className="button__back"
            id="nextDetails"
            onClick={context.changeStage}
            value="Back"
          />
        </div>
      )}
    </ModalConsumer>
  );
}
