import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../../common/Button';

class AddQuestionModal extends Component {
  state = {
    validation: false,
  };

  onChange = (event) => {
    const { value } = event.target;
    this.setState({ question: value });
  }

  addQuestion = () => {
    const {
      speclalizationsId, showModal, updateValues, section,
    } = this.props;
    const { question } = this.state;
    if (question && question.trim()) {
      const data = { speclalizationsId, question, section };
      axios
        .post(`/api/v1/speclalization/question/${speclalizationsId}`, data)
        .then((results) => {
          showModal();
          updateValues(results.data);
        })
        .catch((error) => {
          const { data: message, status } = error.response;
          if (status === 500) {
            this.setState({ message });
          }
        });
    } else {
      this.setState(prevState => ({
        validation: !prevState.validation,
      }));
    }
  }

  render() {
    const { showModal } = this.props;
    const { validation } = this.state;
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
          <textarea
            className="question__textarea"
            name="add-question"
            placeholder="   Enter your question here..."
            cols="50"
            rows="4"
            onChange={this.onChange}
          />
          {validation ? <h1 className="question__validation">Please Add A Question ...</h1> : null}
          <Button onClick={this.addQuestion} value="Submit" className="question__submit" />
        </div>
      </div>
    );
  }
}

AddQuestionModal.propTypes = {
  showModal: PropTypes.isRequired,
  speclalizationsId: PropTypes.isRequired,
  updateValues: PropTypes.func.isRequired,
};

export default AddQuestionModal;
