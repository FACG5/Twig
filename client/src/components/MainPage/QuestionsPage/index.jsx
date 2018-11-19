import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import SearchBar from '../../common/SearchBar';
import Card from './QuestionCard';
import Select from './Select';
import './style.css';

class QuesionsPage extends Component {
  state = {
    values: [],
    section: '',
    message: '',
  };

  componentWillMount() {
    const { match } = this.props;
    const { params } = match;
    const { name } = params;

    axios.get(`/api/v1/specialization/${name}`).then((data) => {
      const results = data.data;
      this.setState({ values: results, section: name, avatarUrl: results[0].avatar_url });
    }).catch((error) => {
      const { status } = error.response;
      if (status === 404) {
        this.setState({ message: 'Not found page' });
      }
    });
  }

  search = (e) => {
    e.preventdefault();
  };

  render() {
    const { values, section, avatarUrl } = this.state;
    return (
      <div className="questions__box">
        <div className="questions__header">
          <div className="questions__header__logo">
            <img src={avatarUrl} alt="img" />
            <h2 className="questions__title">{section}</h2>
          </div>
          <SearchBar
            className="questions__search"
            submitHandler={this.search}
          />
        </div>
        <Select />
        <Card values={values} section={section} />
        <p className="questions__showmore">Show All 100 Question </p>
      </div>
    );
  }
}
QuesionsPage.propTypes = {
  match: PropTypes.isRequired,

};

export default QuesionsPage;
