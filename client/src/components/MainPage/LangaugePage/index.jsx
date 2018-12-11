import React, { Component } from 'react';
import axios from 'axios';
import Input from '../../common/Inputs';
import Button from '../../common/Button';
import Select from '../../HomePage/modal/JoinModal/JoinDetails/StageOne/Select';
import './style.css';

class LangaugePage extends Component {
  state = {
    validationLangauge: false,
    validationDilactes: false,

  };

  componentWillMount() {
    axios.get('/api/v1/get-languages').then((result) => {
      const { data } = result;
      this.setState({ languages: data });
    });
  }

  onChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value, validationLangauge: false, validationDilactes: false });
  };

  addLangauge=() => {
    const { name } = this.state;
    const data = { name };
    if (name && name.trim()) {
      axios.post('/api/v1/languages', data).then((res) => {
        if (res.status === 200) {
          this.setState({ messageLanguage: 'Successful add language ', validationLangauge: false });
        }
      }).catch((error) => {
        const { status } = error.response;
        if (status === 404) {
          this.setState({ messageLanguage: 'Page Not Found' });
        }
      });
    } else {
      this.setState({ validationLangauge: true });
    }
  }

  getDialects = (event) => {
    const { value: languageId } = event.target;
    this.setState({ languageId });
  };

  addDialects=() => {
    const { dialects, languageId } = this.state;
    const data = { dialects, languageId };
    if (dialects && dialects.trim()) {
      axios.post('/api/v1/dialects', data).then((res) => {
        if (res.status === 200) {
          this.setState({ messageDialect: 'Successful add dialect', validationDilactes: false });
        }
      }).catch((error) => {
        const { status } = error.response;
        if (status === 404) {
          this.setState({ messageDialect: 'Page Not Found' });
        }
      });
    } else {
      this.setState({ validationDilactes: true });
    }
  }


  render() {
    const {
      validationLangauge, languages, validationDilactes, messageDialect,
      messageLanguage,
    } = this.state;
    return (
      <div>
        <div>
          <h1 className="langauge__title">Enter Language</h1>
          <Input
            className="input__langauge"
            placeholder="Enter langauge here..."
            onChange={this.onChange}
            type="text"
            name="name"
          />
          <Button
            value="Add"
            className="button__add-language"
            onClick={this.addLangauge}
          />
          {validationLangauge ? <h1 className="langauge__error">Please Enter langauge</h1> : <h1 className="langauge__message">{messageLanguage}</h1> }
        </div>
        <div>
          <h1 className="langauge__title">Enter Dialects</h1>
          <div className="langauge__select">
            <Select
              name="Langauge"
              data={languages}
              getDialects={this.getDialects}
            />
          </div>
          <Input
            className="input__dialect"
            placeholder="Enter dialects here..."
            onChange={this.onChange}
            type="text"
            name="dialects"
          />
          <Button
            value="Add"
            className="button__add-dialect"
            onClick={this.addDialects}
          />
          {validationDilactes ? <h1 className="dialect__error">Please Enter Dialect /Select Your langauge</h1> : <h1 className="dialect__message">{messageDialect}</h1>}
        </div>

      </div>
    );
  }
}


export default LangaugePage;
