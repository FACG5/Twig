import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../../../../common/Button';
import Inputs from '../../../../../common/Inputs';
import './style.css';
import Select from './Select';
import PopUp from '../../../../../common/PopUp';
import { ModalConsumer } from '../../../ModalContext';

class StageOne extends Component {
  state = {};

  checkLanuageAndDialect = (context) => {
    const { language, dialect } = context.data;
    if (!language || !dialect) {
      context.setPopUpMessage({
        message: 'please fill all of the fileds !',
        title: ' Error !',
      });
    } else {
      context.updateState(prevStat => ({ firstStage: !prevStat.firstStage }));
    }
  };

  backFromDetails = (context) => {
    context.updateState({ completeJoin: false });
  };

  render() {
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
              <div className="select__container">
                <Select data={context.languages} name="language" />
                <Select data={context.dialects} name="dialect" />
              </div>
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
              onClick={() => this.checkLanuageAndDialect(context)}
              value="Next"
            />
            <Button
              className="button__back"
              id="nextDetails"
              onClick={() => this.backFromDetails(context)}
              value="Back"
            />
            {context.err ? (
              <PopUp
                title="Wrong"
                message="please choose Your Language / dialect"
                closePopUp={context.closePopUp}
              />
            ) : null}
          </div>
        )}
      </ModalConsumer>
    );
  }
}

export default StageOne;
