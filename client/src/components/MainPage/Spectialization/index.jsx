import React, { Component } from 'react';
import axios from 'axios';
import SpecializationCard from './SpecializationCard';
import SearchBar from '../../common/SearchBar';
import './style.css';

class Specialization extends Component {
  state = {
    values: [],
  };

  componentWillMount() {
    axios.get('/api/v1/specialization').then((res) => {
      const results = res.data;
      this.setState({ values: results });
    }).catch((error) => {
      const { status } = error.response;
      if (status === 404) {
        this.setState({ message: 'Page Not Found' });
      }
    });
  }

  render() {
    const { values } = this.state;
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
          />
        </div>

        <SpecializationCard values={values} />
        <p className="specialization__showmore">Show All Sections </p>
      </div>
    );
  }
}

export default Specialization;
