import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

const Context = React.createContext();
class Provider extends Component {
  state = {
    languages: [],
    validationLangauge: false,
    validationDilactes: false,
    validationCategory: false,
    onChange: (event) => {
      const { name, value } = event.target;
      this.setState({
        [name]: value, validationCategory: false, validationLangauge: false, validationDilactes: false,
      });
    },

    addCategory: () => {
      const { category, avatarUrl } = this.state;
      const data = { category, avatarUrl };
      if (avatarUrl && avatarUrl.trim() && category && category.trim()) {
        axios.post('/api/v1/category', data).then((res) => {
          if (res.status === 200) {
            this.setState({ messageCategory: 'Successfully added ', validationCategory: false });
          }
        }).catch((error) => {
          const { status } = error.response;
          if (status === 404) {
            this.setState({ messageCategory: 'Page Not Found' });
          }
        });
      } else {
        this.setState({ validationCategory: true });
      }
    },
    addLangauge: () => {
      const { name } = this.state;
      const data = { name };
      if (name && name.trim()) {
        axios.post('/api/v1/languages', data).then((res) => {
          if (res.status === 200) {
            const { languagesResult } = res.data;
            this.setState({ messageLanguage: 'Successfully added ', validationLangauge: false, languages: languagesResult });
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
    },

    getDialects: (event) => {
      const { value: languageId } = event.target;
      this.setState({ languageId });
    },

    addDialects: () => {
      const { dialects, languageId } = this.state;
      const data = { dialects, languageId };
      if (dialects && dialects.trim() && languageId) {
        axios.post('/api/v1/dialects', data).then((res) => {
          if (res.status === 200) {
            this.setState({ messageDialect: 'Successfully added ', validationDilactes: false });
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
    },
  }

  componentDidMount() {
    axios.get('/api/v1/get-languages').then((result) => {
      const { data } = result;
      this.setState({ languages: data });
    });
  }

  render() {
    const { children } = this.props;
    return (
      <Context.Provider value={this.state}>
        {children}
      </Context.Provider>
    );
  }
}
Provider.propTypes = {
  children: PropTypes.element.isRequired,
};

export const LanguageProvider = withRouter(Provider);
export const LanguageConsumer = Context.Consumer;
