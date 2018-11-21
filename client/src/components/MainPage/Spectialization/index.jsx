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
    axios.get('/api/v1/specialization').then((res) => {
      const results = res.data;
      this.setState({ values: results, items: results });
    }).catch((error) => {
      const { status } = error.response;
      if (status === 404) {
        this.setState({ message: 'Page Not Found' });
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
    list = list.filter(item => item.name.toLowerCase().indexOf(
      input.toLowerCase(),
    ) !== -1);
    if (list.length !== 0) {
      this.setState({ items: list, found: true });
    } else {
      this.setState({ items: null, found: false });
    }
  }


  render() {
    const { input, found, items } = this.state;
    return (
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
        {!found && <h1 className="specialization__notFound">Sorry, No Result Was Found!</h1>}
        <SpecializationCard values={items} />
        {found && <p className="specialization__showmore">Show All </p>}
      </div>
    );
  }
}

export default Specialization;
