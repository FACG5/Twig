import React, { Component } from 'react';
import axios from 'axios';
import './style.css';
import Button from '../../../../common/Button';
import Input from '../../../../common/Inputs';

class TextTranslation extends Component {
  state = { selectedFile: null };


  uploadAudio = () => {
    const { selectedFile } = this.state;
    if (selectedFile) {
      const { type } = selectedFile;
      const fileType = type.split('/');
      if (fileType === 'audio') {
        console.log('audioFile');
      } else {
        this.setState({ error: 'Please choose an audio file !' });
      }
    } else {
      this.setState({ error: 'Please choose file !' });
    }
  }

  chooseFile = (e) => {
    const { fileName } = this.refs;
    const { value, files } = e.target;
    const splitValue = value.split('\\');
    const name = splitValue[splitValue.length - 1];
    fileName.textContent = name;
    this.setState({ selectedFile: files[0] });
  };

  render() {
    const { error } = this.state;
    return (
      <div className="donate__audio">
        <label className="file__label">
          Click to Choose File
          <Input
            type="file"
            className="file__input"
            onChange={this.chooseFile}
          />
        </label>
        <h3 className="file__name" ref="fileName">
          {' '}
          No file Choosen
          {' '}
        </h3>
        <h3 className="textarea__titel"> Describe Your Translation </h3>
        <textarea
          className="textarea__box"
          name="translation"
          id=""
          cols="50"
          rows="2"
        />
        {error ? <h4>{error}</h4> : null}
        <Button
          onClick={this.uploadAudio}
          value="Submit Translation"
          className="donate__submit"
        />
      </div>
    );
  }
}

export default TextTranslation;
