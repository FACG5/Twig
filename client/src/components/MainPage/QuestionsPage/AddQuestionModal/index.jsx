import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../../common/Button';

class AddQuestionModal extends Component {
  state = {};

  onChange = (event) => {
    const { value } = event.target;
    this.setState({ question: value });
  }

  addQuestion = () => {
    const { speclalizationsId, showModal } = this.props;
    const { question } = this.state;
    console.log(question);
    if (question && question.trim()) {
      const data = { speclalizationsId, question };
      console.log(data);
      axios
        .post(`/api/v1/speclalization/question/${speclalizationsId}`, data)
        .then(() => {
          showModal();
        })
        .catch((error) => {
          const { data: message, status } = error.response;
          if (status === 500) {
            this.setState({ message });
          }
        });
    }
  }

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
          <textarea
            className="question__textarea"
            name="add-question"
            placeholder="   Enter your question here..."
            cols="50"
            rows="4"
            onChange={this.onChange}
          />
          <Button onClick={this.addQuestion} value="Submit" className="question__submit" />
        </div>
      </div>
    );
  }
}

AddQuestionModal.propTypes = {
  showModal: PropTypes.isRequired,
};

export default AddQuestionModal;
