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
    found: true,
    items: [],
  };

  componentWillMount() {
    const { match } = this.props;
    const { params } = match;
    const { name } = params;

    axios.get(`/api/v1/specialization/${name}`).then((data) => {
      const results = data.data;
      this.setState({
        values: results, items: results, section: name, avatarUrl: results[0].avatar_url,
      });
    }).catch((error) => {
      const { status } = error.response;
      if (status === 404) {
        this.setState({ message: 'Not found page' });
      }
    });
  }

  onChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value, input: event.target.value }, () => {});
  };


  search = (event) => {
    event.preventDefault();
    const { values, input } = this.state;
    let list = values;
    list = list.filter(item => item.questions.toLowerCase().indexOf(
      input.toLowerCase(),
    ) !== -1);
    if (list.length !== 0) {
      this.setState({ items: list, found: true });
    } else {
      this.setState({ items: null, found: false });
    }
  }

  sortDate = () => {
    const { items } = this.state;
    const sorteListByDate = items.sort((a, b) => a.date > b.date);
    this.setState({ items: sorteListByDate, found: true });
  }

  render() {
    const {
      items, section, avatarUrl, found, input,
    } = this.state;
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
            onChange={this.onChange}
            value={input}
          />
        </div>
        <Select onChange={this.sortDate} />
        {!found && <h1 className="questions__notFound">Sorry Not Found Searching</h1>}
        <Card values={items} section={section} />
        {found && <p className="questions__showmore">Show All 100 Question </p>}
      </div>
    );
  }
}
QuesionsPage.propTypes = {
  match: PropTypes.isRequired,

};

export default QuesionsPage;
