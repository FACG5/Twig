import React, { Component } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../../../../common/Button';
import Inputs from '../../../../../common/Inputs';
import './style.css';
import Select from './Select';
import { ModalConsumer } from '../../../ModalContext';
import CheckBoxes from './CheckBoxes';
import LoadingModal from '../../../LoadingModal';

class StageOne extends Component {
  state = {
    skills: [],
    languages: [],
    dialects: [],
  };

  componentWillMount() {
    setTimeout(() => {
      axios
        .get('/api/v1/get-skills')
        .then((result) => {
          const { data } = result;
          this.setState({ skills: data });
        })
        .then(() => {
          axios.get('/api/v1/get-languages').then((result) => {
            const { data } = result;
            this.setState({ languages: data });
          });
        });
    }, 1000);
  }

  getDialects = (event) => {
    const { value: languageId } = event.target;
    axios.get(`/api/v1/get-dialcets/${languageId}`).then((result) => {
      const { data } = result;
      this.setState({ dialects: data });
    });
  };

  checkLanuageAndDialect = (context) => {
    const { language } = context.data;
    if (!language) {
      context.setPopUpMessage({
        message: 'please choose Your Language',
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
    const { skills, languages, dialects } = this.state;
    if (!skills.length && !languages.length) {
      return <LoadingModal />;
    }
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
                <Select
                  data={languages}
                  name="language"
                  getDialects={this.getDialects}
                />
                <Select data={dialects} name="dialect" />
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
          </div>
        )}
      </ModalConsumer>
    );
  }
}

export default StageOne;
