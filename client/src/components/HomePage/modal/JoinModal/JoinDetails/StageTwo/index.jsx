import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import Button from '../../../../../common/Button';
import './style.css';
import { ModalConsumer } from '../../../ModalContext';
import Jobs from './Jobs';

class StageTwo extends Component {
  state = {
    jobs: [],
  }

  componentWillMount() {
    axios.get('/api/v1/getJobs').then((result) => {
      const { data } = result;
      this.setState({ jobs: data });
    });
  }

  render() {
    const { jobs } = this.state;
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
              <Jobs jobs={jobs} onChange={context.storeValue} />
            </div>
            <Button
              className="button__next"
              id="nextDetails"
              onClick={context.logState}
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
}

export default StageTwo;
