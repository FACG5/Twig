import React, { Component } from 'react';
import SpecializationCard from './SpecializationCard';
import SearchBar from '../../common/SearchBar';
import cardiacImg from '../../../assets/cardiac.png';
import orthoImg from '../../../assets/orthopedics.png';
import generalImg from '../../../assets/general.png';
import psychImg from '../../../assets/psychiatry.png';
import './style.css';

class Specialization extends Component {
  state = {
    values: [
      {
        id: 1,
        imagePath: cardiacImg,
        section: 'Cardiac Section',
        questions: '50 Question',
      },
      {
        id: 2,
        imagePath: orthoImg,
        section: 'Orthopedics Section',
        questions: '50 Question',
      },
      {
        id: 3,
        imagePath: generalImg,
        section: 'General Section',
        questions: '50 Question',
      },
      {
        id: 4,
        imagePath: psychImg,
        section: 'Psychiatry Section',
        questions: '50 Question',
      },
    ],
  };

  render() {
    const { values } = this.state;
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
          />
        </div>

        <SpecializationCard values={values} />
        <p className="specialization__showmore">Show All Sections </p>
      </div>
    );
  }
}

export default Specialization;
