import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import Button from '../../../../common/Button';
import Input from '../../../../common/Inputs';

class VideoTranslation extends Component {
  state = { selectedFile: null };

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
    const { selectedFile } = this.state;
    return (
      <div className="donate__video">
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
        <h3 className="textarea__titel"> Describe Your video </h3>
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
