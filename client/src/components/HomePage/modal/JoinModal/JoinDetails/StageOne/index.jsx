import React, { Component } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../../../../common/Button';
import Inputs from '../../../../../common/Inputs';
import './style.css';
import Select from './Select';
import PopUp from '../../../../../common/PopUp';
import { ModalConsumer } from '../../../ModalContext';
import CheckBoxes from './CheckBoxes';

class StageOne extends Component {
  state = {
    skills: [],
  };

  componentWillMount() {
    axios.get('/api/v1/get-skills').then((result) => {
      const { data } = result;
      this.setState({ skills: data });
    });
  }

  checkLanuageAndDialect = (context) => {
    const { language, dialect } = context.data;
    if (!language || !dialect) {
      context.setPopUpMessage({
        message: 'please choose Your Language / dialect',
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
    const { skills } = this.state;
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
              <CheckBoxes skills={skills} onChange={context.storeValue} />
              <Inputs
                className="input__other"
                placeholder="Please specify here..."
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
            {context.popUpMessage ? (
              <PopUp
                title={context.popUpMessage.title}
                message={context.popUpMessage.message}
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
