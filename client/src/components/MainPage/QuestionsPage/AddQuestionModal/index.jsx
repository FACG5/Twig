import React, { Component } from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Button from '../../../common/Button';

class AddQuestionModal extends Component {
  state = {};

  render() {
    const { showModal } = this.props;
    return (
      <div className="question__modal">
        <div className="question__content">
          <div className="question__header">
            <h2 className="question__title">Add Question</h2>
            <FontAwesomeIcon
              icon="times-circle"
              className="closeButton"
              onClick={showModal}
            />
          </div>
          <hr />
          <div>jjj</div>
        </div>
      </div>
    );
  }
}

export default AddQuestionModal;
