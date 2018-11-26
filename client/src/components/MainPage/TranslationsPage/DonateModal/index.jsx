import React, { Component } from 'react';
import axios from 'axios';
import './style.css';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../../common/Button';
import TextTranslation from './TextTranslation';
import AudioTranslation from './AudioTranslation';
import VideoTranslation from './VideoTranslation';

class DonateModal extends Component {
  state = {
    text: true,
    audio: false,
    video: false,
    validation: false,

  };

  switchTab = (e) => {
    const { target } = e;
    const { textContent } = target;
    const textContentLower = textContent.toLowerCase();
    this.setState({ text: false, audio: false, video: false }, () => {
      this.setState({ [textContentLower]: true });
    });
  };

  onChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value, translations: value });
  };

  onClick=(typeId) => {
    const { translation } = this.state;
    const { match, showModal, updateValues } = this.props;
    const { params } = match;
    const { questionId } = params;
    if (translation && translation.trim()) {
      const data = { typeId, translation, questionId };
      axios
        .post(`/api/v1/questions/${questionId}`, data)
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

  showTab = () => {
    const {
      text, audio, video, validation,
    } = this.state;
    if (text) {
      return (
        <TextTranslation onChange={this.onChange} onClick={this.onClick} validation={validation} />
      );
    }
    if (audio) {
      return <AudioTranslation />;
    }
    if (video) {
      return <VideoTranslation />;
    }
    return null;
  };


  render() {
    const { showModal } = this.props;
    const { text, audio, video } = this.state;

    return (

      <div className="donate__modal">
        <div className="donate__content">
          <div className="donate__header">
            <h2 className="donate__title"> Donate Translation</h2>
            <FontAwesomeIcon
              icon="times-circle"
              className="closeButton"
              onClick={showModal}
            />
          </div>
          <hr />
          <div className="donate__tabs">
            <Button
              onClick={this.switchTab}
              className={text ? 'donate__tab--clicked' : 'donate__tab'}
              value="Text"
            />
            <Button
              onClick={this.switchTab}
              className={audio ? 'donate__tab--clicked' : 'donate__tab'}
              value="Audio"
            />
            <Button
              onClick={this.switchTab}
              className={video ? 'donate__tab--clicked' : 'donate__tab'}
              value="Video"
            />
          </div>
          <hr />
          <div className="translation__box">{this.showTab()}</div>
        </div>
      </div>
    );
  }
}

DonateModal.propTypes = {
  showModal: PropTypes.func.isRequired,
  updateValues: PropTypes.func.isRequired,
  match: PropTypes.isRequired,
};
export default withRouter(DonateModal);
