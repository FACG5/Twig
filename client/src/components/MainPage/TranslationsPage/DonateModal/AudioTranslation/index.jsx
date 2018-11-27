import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import Button from '../../../../common/Button';
import Input from '../../../../common/Inputs';

class TextTranslation extends Component {
  state = { selectedFile: null };

  uploadAudio = () => {
    const { onClick, setError } = this.props;
    const { selectedFile } = this.state;
    if (selectedFile) {
      const { type } = selectedFile;
      const fileType = type.split('/')[0];
      if (fileType === 'audio') {
        const data = new FormData();
        data.append('file', selectedFile);
        onClick(2, data);
      } else {
        setError('Please choose an audio file !');
      }
    } else {
      setError('Please choose file !');
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
    const { error, onChange } = this.props;
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
          No file Choosen
        </h3>
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
          onClick={this.uploadAudio}
          value="Submit Translation"
          className="donate__submit"
        />
      </div>
    );
  }
}

TextTranslation.propTypes = {
  onChange: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
  error: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default TextTranslation;
