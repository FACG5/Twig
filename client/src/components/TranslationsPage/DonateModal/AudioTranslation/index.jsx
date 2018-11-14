import React, { Component } from 'react';
import './style.css';
import Button from '../../../common/Button';
import Input from '../../../common/Inputs';

class TextTranslation extends Component {
  state = {};

  chooseFile = (e) => {
    const { fileName } = this.refs;
    const { value } = e.target;
    const splitValue = value.split('\\');
    const name = splitValue[splitValue.length - 1];
    fileName.textContent = name;
  };

  render() {
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
        <h3 className="file__name" ref="fileName"> No file Choosen </h3>
        <h3 className="textarea__titel"> Describe Your Translation </h3>
        <textarea
          className="textarea__box"
          name="translation"
          id=""
          cols="50"
          rows="2"
        />
        <Button
          onClick={null}
          value="Submit Translation"
          className="donate__submit"
        />
      </div>
    );
  }
}

export default TextTranslation;
