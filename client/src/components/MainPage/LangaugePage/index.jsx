import React, { Component } from 'react';
import Input from '../../common/Inputs';
import Button from '../../common/Button';
import Select from '../../HomePage/modal/JoinModal/JoinDetails/StageOne/Select';
import './style.css';


class LangaugePage extends Component {
  state = {};

  onChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value, input: value });
  };

  render() {
    return (
      <div>
        <div>
          <h1 className="langauge__title">Enter Langauge</h1>
          <Input
            className="input__langauge"
            placeholder="Enter langauge here..."
            onChange=""
            type="text"
            name="langauge"
          />
          <Button
            value="Add"
            className="button__add-language"
          />
        </div>
        <div>
          <h1 className="langauge__title">Enter Dialects</h1>
          <div className="langauge__select">
            <Select
              name="Langauge"
            />
          </div>
          <Input
            className="input__langauge"
            placeholder="Enter dialects here..."
            onChange=""
            type="text"
            name="langauge"
          />
          <Button
            value="Add"
            className="button__add-language"
          />
        </div>

      </div>
    );
  }
}


export default LangaugePage;
