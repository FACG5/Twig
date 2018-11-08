import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from '../../../../../common/Button';
import Inputs from '../../../../../common/Inputs';
import './style.css';


export default function StageOne(props) {
  const { onChange, logState, changeStage } = props;
  return (
    <Fragment>
      <h4 className="completeTitle"> Tell us About Your skills in English </h4>
      <hr />
        <div className="Boxes">
          <label className="containerCheckBox">
          I’m a native speaker / mothertongue.
            <Inputs className="" placeholder="" onChange={onChange} type="checkbox" checked="checked" name="native" />
            <span className="checkBox" />
          </label>
          <label className="containerCheckBox">
          I have tested at upper intermediate or advanced level.
            <Inputs className="" placeholder="" onChange={onChange} type="checkbox" name="intemediate" />
            <span className="checkBox" />
          </label>
          <label className="containerCheckBox">
          I have completed University or professional training this language.
            <Inputs className="" placeholder="" onChange={onChange} type="checkbox" name="university" />
            <span className="checkBox" />
          </label>
          <label className="containerCheckBox">
          I’m self-taught.
            <Inputs className="" placeholder="" onChange={onChange} type="checkbox" name="self" />
            <span className="checkBox" />
          </label>
        </div>
      <Button
        className="nextButton"
        id="nextDetails"
        onClick={changeStage}
        value="Next"
      />
    </Fragment>
  );
}
StageOne.propTypes = {
  onChange: PropTypes.func.isRequired,
  changeStage: PropTypes.func.isRequired,
};
