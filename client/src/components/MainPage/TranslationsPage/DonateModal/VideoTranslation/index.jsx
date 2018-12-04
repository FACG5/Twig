import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faStop } from '@fortawesome/free-solid-svg-icons';
import Button from '../../../../common/Button';
import Input from '../../../../common/Inputs';

class VideoTranslation extends Component {
  state = { selectedFile: null };

  startRecord = () => {
    const { player } = this.refs;
    this.setState({ recording: true });
    const { recording } = this.state;
    if (!recording) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          this.mediaRecorder = new MediaRecorder(stream);
          this.chunks = [];
          player.srcObject = stream;
          player.classList.remove('no__record');
          this.chunks = [];
          this.mediaRecorder.start(10);
          this.mediaRecorder.addEventListener('dataavailable', (event) => {
            this.chunks.push(event.data);
          });
        });
    }
  };

  stop = () => {
    const { player } = this.refs;
    const { recording } = this.state;
    if (recording) {
      this.setState({ recording: false });
      this.mediaRecorder.stop();
      const videoBlob = new Blob(this.chunks);
      const video = new File(this.chunks, 'record.mp4', {
        type: 'video',
        lastModified: Date.now(),
      });
      const videoUrl = URL.createObjectURL(videoBlob);
      player.srcObject = null;
      player.pause();
      player.src = videoUrl;
      this.setState({ selectedFile: video });
    }
  };

  chooseFile = (e) => {
    const { setError } = this.props;
    setError(null);
    const { fileName } = this.refs;
    const { value, files } = e.target;
    const splitValue = value.split('\\');
    const name = splitValue[splitValue.length - 1];
    fileName.textContent = name;
    this.setState({ selectedFile: files[0] });
  };

  render() {
    const { error, onChange, generateFormData } = this.props;
    const { selectedFile, recording } = this.state;
    return (
      <div className="donate__video">
        <label className="audio__file-label">
          Click to Choose File
          <Input
            type="file"
            className="file__input"
            onChange={this.chooseFile}
          />
        </label>
        <h3 className="file__name" ref="fileName">
          No file Choosen
        </h3>
        <hr />
        <h4>Or record video</h4>
        <FontAwesomeIcon
          icon={faVideo}
          className={`record-button ${recording ? 'recording' : null}`}
          onClick={this.startRecord}
        />
        <FontAwesomeIcon
          icon={faStop}
          className={`stop__button ${
            !recording ? 'stop__button--disabled' : null
          }`}
          onClick={this.stop}
        />
        <video autoPlay loop id="player" className="no__record video__view" ref="player" />
        <textarea
          className="textarea__box"
          name="translation"
          id=""
          cols="50"
          rows="5"
          onChange={onChange}
          placeholder="Please let us know if this translation is literal, or if there are some changes you've made, and why these changes make sense if so."
        />
        {error ? <h4 className="donate__validation">{error}</h4> : null}
        <Button
          onClick={() => generateFormData('video', selectedFile)}
          value="Submit Translation"
          className="donate__submit"
        />
      </div>
    );
  }
}

VideoTranslation.propTypes = {
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  generateFormData: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
};
export default VideoTranslation;
