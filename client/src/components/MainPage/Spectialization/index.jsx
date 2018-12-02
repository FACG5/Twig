import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import SpecializationCard from './SpecializationCard';
import SearchBar from '../../common/SearchBar';
import './style.css';
import Loading from '../../common/Loading';

class Specialization extends Component {
  state = {
    values: [],
    found: true,
    items: [],
  };

  componentWillMount() {
    setTimeout(() => {
      const { history } = this.props;
      axios
        .get('/api/v1/specialization')
        .then((res) => {
          const results = res.data;
          const { status } = res;
          if (status === 204) {
            this.setState({ error: 'There are no specialty in database !' });
          } else {
            this.setState({ values: results, items: results });
          }
        })
        .catch((error) => {
          const { status, data } = error.response;
          if (status === 401) {
            history.push('/');
          } else {
            this.setState({ error: data });
          }
        });
    }, 1000);
  }

  onChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value, input: value });
    const { values } = this.state;
    let list = values;
    list = list.filter(
      item => item.name.toLowerCase().indexOf(value.toLowerCase()) !== -1,
    );
    if (list.length !== 0) {
      this.setState({ items: list, found: true });
    } else {
      this.setState({ items: null, found: false });
    }
  };

  search = (event) => {
    event.preventDefault();
  };

  render() {
    const {
      input,
      found,
      items,
      error,
      values,
    } = this.state;
    if (!error && !values.length) {
      return <Loading />;
    }
    if (error) {
      return <h4 className="error__message">{error}</h4>;
    }
    return (
      <div className="specialization__box">
        <div className="specialization__header">
          <div className="specialization__header">
            <h2 className="specialization__header--text">
              Translation Categories
            </h2>
          </div>
          <SearchBar
            className="specialization__search"
            submitHandler={this.search}
            onChange={this.onChange}
            value={input}
          />
        </div>
        {!found && (
          <h1 className="specialization__notFound">
            Sorry, No Result Was Found!
          </h1>
        )}
        <SpecializationCard values={items} />
        {found && <p className="specialization__showmore" />}
      </div>
    );
  }
}

Specialization.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
};


export default Specialization;
