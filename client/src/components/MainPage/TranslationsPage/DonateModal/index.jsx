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
  };

  switchTab = (e) => {
    const { target } = e;
    const { textContent } = target;
    const textContentLower = textContent.toLowerCase();
    this.setState({ text: false, audio: false, video: false }, () => {
      this.setState({ [textContentLower]: true });
    });
  };

  setError = (error) => {
    this.setState({ error });
  }

  onChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value, translations: value, error: null });
  };

  sendTranslation = (translationData) => {
    const { match, showModal, updateValues } = this.props;
    const { params } = match;
    const { questionId } = params;
    axios
      .post(`/api/v1/questions/${questionId}`, translationData)
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
  };

  onClick = (typeId, file) => {
    this.setError(null);
    const { match } = this.props;
    const { params } = match;
    const { questionId } = params;
    const { translation } = this.state;
    let translationData;
    if (translation && translation.trim()) {
      if (typeId === 1) {
        translationData = { typeId, translation, questionId };
        this.sendTranslation(translationData);
      }
      if (typeId === 2) {
        axios.post('/api/v1/upload', file).then((result) => {
          const { data: fileName } = result;

          translationData = {
            fileName,
            typeId,
            translation,
            questionId,
          };
          this.sendTranslation(translationData);
        });
      }
    } else {
      this.setError('Please add your translation !');
    }
  };

  showTab = () => {
    const {
      text, audio, video, error,
    } = this.state;
    if (text) {
      return (
        <TextTranslation
          onChange={this.onChange}
          onClick={this.onClick}
          setError={this.setError}
          error={error}
        />
      );
    }
    if (audio) {
      return (
        <AudioTranslation
          onChange={this.onChange}
          onClick={this.onClick}
          setError={this.setError}
          error={error}
        />
      );
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
