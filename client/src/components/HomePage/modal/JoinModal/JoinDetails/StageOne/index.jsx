import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../../../../common/Button';
import Inputs from '../../../../../common/Inputs';
import './style.css';

export default function StageOne(props) {
  const {
    onChange, changeStage, backFromDetails,
  } = props;
  return (
    <div className="contentOfDetails">
      <h4 className="title"> Tell us some details about your language skills </h4>
      <hr />
      <div className="boxes">
        <label className="container__checkbox">
          I’m a native speaker / mothertongue.
          <Inputs
            className=""
            placeholder=""
            id="native"
            onChange={onChange}
            type="checkbox"
            name="native"
          />
          <span className="checkBox" />
        </label>
        <label className="container__checkbox">
          I have tested at upper intermediate or advanced level.
          <Inputs
            className=""
            placeholder=""
            onChange={onChange}
            type="checkbox"
            name="intemediate"
            id="intemediate"
          />
          <span className="checkBox" />
        </label>
        <label className="container__checkbox">
          I have completed University or professional training this language.
          <Inputs
            className=""
            placeholder=""
            onChange={onChange}
            type="checkbox"
            name="university"
          />
          <span className="checkBox" />
        </label>
        <label className="container__checkbox">
          I’m self-taught.
          <Inputs
            className=""
            placeholder=""
            onChange={onChange}
            type="checkbox"
            name="self"
          />
          <span className="checkBox" />
        </label>
      </div>
      <Button
        className="button__next"
        id="nextDetails"
        onClick={changeStage}
        value="Next"
      />
      <Button
        className="button__back"
        id="nextDetails"
        onClick={backFromDetails}
        value="Back"
      />
    </div>
  );
}
StageOne.propTypes = {
  onChange: PropTypes.func.isRequired,
  changeStage: PropTypes.func.isRequired,
  backFromDetails: PropTypes.func.isRequired,
};
