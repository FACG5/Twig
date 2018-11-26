import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import Button from '../../../../../common/Button';
import './style.css';
import { ModalConsumer } from '../../../ModalContext';
import Jobs from './Jobs';
import LoadingModal from '../../../LoadingModal';

class StageTwo extends Component {
  state = {
    jobs: [],
  };

  componentWillMount() {
    setTimeout(() => {
      axios.get('/api/v1/get-jobs').then((result) => {
        const { data } = result;
        this.setState({ jobs: data });
      });
    }, 1000);
  }

  render() {
    const { jobs } = this.state;
    if (!jobs.length) {
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
            <div className="radioButtonsGroup">
              <Jobs jobs={jobs} onChange={context.storeValue} />
            </div>
            <Button
              className="button__next"
              id="fisishSignUp"
              onClick={context.signUp}
              value="Finish"
            />
            <Button
              className="button__back"
              id="nextDetails"
              onClick={context.changeStage}
              value="Back"
            />
            {context.signingUp ? <LoadingModal /> : null}
          </div>
        )}
      </ModalConsumer>
    );
  }
}

export default StageTwo;
