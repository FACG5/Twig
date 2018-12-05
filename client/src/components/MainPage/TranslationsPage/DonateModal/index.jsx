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

  generateFormData = (typeOfFile, selectedFile) => {
    if (selectedFile) {
      const { type } = selectedFile;
      const fileType = type.split('/')[0];
      if (typeOfFile === 'audio') {
        if (fileType === 'audio') {
          const data = new FormData();
          data.append('file', selectedFile);
          this.onClick(2, data);
        } else {
          this.setError('Please choose an audio file !');
        }
      } else if (typeOfFile === 'video') {
        if (fileType === 'video') {
          const data = new FormData();
          data.append('file', selectedFile);
          this.onClick(3, data);
        } else {
          this.setError('Please choose an video file !');
        }
      }
    } else {
      this.setError('Please choose file !');
    }
  };

  switchTab = (e) => {
    const { target } = e;
    const { textContent } = target;
    const textContentLower = textContent.toLowerCase();
    this.setState(
      {
        text: false,
        audio: false,
        video: false,
        error: null,
        translation: null,
      },
      () => {
        this.setState({ [textContentLower]: true });
      },
    );
  };

  setError = (error) => {
    this.setState({ error });
  };

  onChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value, error: null });
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
    const { textTranslation, audioTranslation, videoTranslation } = this.state;
    try {
      let translationData;
      if (typeId === 1) {
        if (textTranslation && textTranslation.trim()) {
          translationData = { typeId, translation: textTranslation, questionId };
          this.sendTranslation(translationData);
        } else {
          throw new Error('Please add your translation !');
        }
      }
      if (typeId === 2 || typeId === 3) {
        if ((audioTranslation && audioTranslation.trim())
         || (videoTranslation && videoTranslation.trim())) {
          this.setState({ uploading: true });
          axios.post('/api/v1/upload', file).then((result) => {
            this.setState({ uploading: false });
            const { data: fileName } = result;
            const translation = typeId === 2 ? audioTranslation : videoTranslation;
            translationData = {
              fileName,
              typeId,
              translation,
              questionId,
            };
            this.sendTranslation(translationData);
          });
        } else {
          throw new Error('Please add your translation !');
        }
      }
    } catch (err) {
      this.setError(err.message);
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
          {...this.state}
        />
      );
    }
    if (audio) {
      return (
        <AudioTranslation
          onChange={this.onChange}
          generateFormData={this.generateFormData}
          setError={this.setError}
          error={error}
          {...this.state}
        />
      );
    }
    if (video) {
      return (
        <VideoTranslation
          onChange={this.onChange}
          generateFormData={this.generateFormData}
          setError={this.setError}
          error={error}
          {...this.state}
        />
      );
    }
    return null;
  };

  render() {
    const { showModal, questionText } = this.props;
    const {
      text, audio, video, uploading,
    } = this.state;

    return (
      <div className="donate__modal">
        <div className="donate__content">
          {uploading ? (
            <div className="uploading__loading">
              <div className="double-bounce1__uploading" />
              <div className="double-bounce2__uploading" />
            </div>
          ) : null}
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
          <h1 className="translation__question-view">{questionText}</h1>
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
  questionText: PropTypes.string.isRequired,
};
export default withRouter(DonateModal);
