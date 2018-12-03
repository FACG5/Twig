import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faStop } from '@fortawesome/free-solid-svg-icons';
import './style.css';
import Button from '../../../../common/Button';
import Input from '../../../../common/Inputs';

class AudioTranslation extends Component {
  state = { selectedFile: null };

  componentDidMount() {

  }

  startRecord = () => {
    const { player } = this.refs;
    this.setState({ recording: true });
    const { recording } = this.state;
    if (!recording) {
      player.classList.add('no__record');
      navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
        this.mediaRecorder = new MediaRecorder(stream);
        this.chunks = [];
        this.mediaRecorder.start(10);
        this.mediaRecorder.addEventListener('dataavailable', (event) => {
          this.chunks.push(event.data);
        });
      });
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

  stop = () => {
    const { recording } = this.state;
    if (recording) {
      const { player } = this.refs;
      this.setState({ recording: false });
      this.mediaRecorder.stop();
      const audioBlob = new Blob(this.chunks);
      const audio = new File(this.chunks, 'record.mp3', { type: 'audio', lastModified: Date.now() });
      const audioUrl = URL.createObjectURL(audioBlob);
      player.src = audioUrl;
      player.classList.remove('no__record');
      this.setState({ selectedFile: audio });
    }
  }

  render() {
    const { error, onChange, generateFormData } = this.props;
    const { selectedFile, recording } = this.state;
    return (
      <div className="donate-audio">
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
        <h4>Or record audio</h4>
        <FontAwesomeIcon
          icon={faMicrophone}
          className={`record-button ${recording ? 'recording' : null}`}
          onClick={this.startRecord}
        />
        <FontAwesomeIcon
          icon={faStop}
          className={`stop__button ${!recording ? 'stop__button--disabled' : null}`}
          onClick={this.stop}
        />
        <audio id="player" controls className="no__record" ref="player" />
        <h3 className="textarea__titel"> Describe Your Translation </h3>
        <textarea
          className="textarea__box"
          name="translation"
          id=""
          cols="50"
          rows="2"
          onChange={onChange}
        />
        {error ? <h4 className="donate__validation">{error}</h4> : null}
        <Button
          onClick={() => generateFormData('audio', selectedFile)}
          value="Submit Translation"
          className="donate__submit"
        />
      </div>
    );
  }
}

AudioTranslation.propTypes = {
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  generateFormData: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
};

export default AudioTranslation;
