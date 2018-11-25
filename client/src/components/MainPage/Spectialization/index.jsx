import React, { Component } from 'react';
import axios from 'axios';
import SpecializationCard from './SpecializationCard';
import SearchBar from '../../common/SearchBar';
import './style.css';

class Specialization extends Component {
  state = {
    values: [],
    found: true,
    items: [],
  };

  componentWillMount() {
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
  }

  onChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value, input: value });
  };

  search = (event) => {
    event.preventDefault();
    const { values, input } = this.state;
    let list = values;
    list = list.filter(
      item => item.name.toLowerCase().indexOf(input.toLowerCase()) !== -1,
    );
    if (list.length !== 0) {
      this.setState({ items: list, found: true });
    } else {
      this.setState({ items: null, found: false });
    }
  };

  render() {
    const {
      input, found, items, error,
    } = this.state;
    return error ? (
      <h4 className="error__message">{error}</h4>
    ) : (
      <div className="specialization__box">
        <div className="specialization__header">
          <div className="specialization__header">
            <h2 className="specialization__header--text">
              Specializations Categories
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
        {found && <p className="specialization__showmore">Show All </p>}
      </div>
    );
  }
}

export default Specialization;
