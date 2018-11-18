import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../../../../common/Button';
import Inputs from '../../../../../common/Inputs';
import './style.css';
import { ModalConsumer } from '../../../ModalContext';

export default function StageOne() {
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
          <div className="checkbox__container">
            <label className="container__checkbox">
              I’m a native speaker / mothertongue.
              <Inputs
                className=""
                placeholder=""
                id="native"
                onChange={context.storeValue}
                type="checkbox"
                name="native"
              />
              <span className="span__checkbox" />
            </label>
            <label className="container__checkbox">
              I have tested at upper intermediate or advanced level.
              <Inputs
                className=""
                placeholder=""
                onChange={context.storeValue}
                type="checkbox"
                name="intemediate"
                id="intemediate"
              />
              <span className="span__checkbox" />
            </label>
            <label className="container__checkbox">
              I have completed University or professional training this
              language.
              <Inputs
                className=""
                placeholder=""
                onChange={context.storeValue}
                type="checkbox"
                name="university"
              />
              <span className="span__checkbox" />
            </label>
            <label className="container__checkbox">
              I’m self-taught.
              <Inputs
                className=""
                placeholder=""
                onChange={context.storeValue}
                type="checkbox"
                name="self"
              />
              <span className="span__checkbox" />
            </label>
            <Inputs
              className="input__other"
              placeholder="Write here if you have other details .."
              onChange={context.storeValue}
              type="text"
              name="otherSkills"
            />
          </div>
          <Button
            className="button__next"
            id="nextDetails"
            onClick={context.changeStage}
            value="Next"
          />
          <Button
            className="button__back"
            id="nextDetails"
            onClick={context.backFromDetails}
            value="Back"
          />
        </div>
      )}
    </ModalConsumer>
  );
}
