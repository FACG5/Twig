import React, { Component } from 'react';
import SearchBar from '../../common/SearchBar';
import Card from './QuestionCard';
import Select from './Select';
import './style.css';
import image from './image.png';

class QuesionsPage extends Component {
  state = {
    values: [
      {
        id: 1,
        value: 'Have you ever had a heart attack before ?',
        user: 'Admin',
        translations: '4 translations',
        verified: '5 verified',
      },
      {
        id: 2,
        value: 'Have you ever been in a hospital  ?',
        user: 'User2',
        translations: '4 translations',
        verified: '5 verified',
      },
      {
        id: 3,
        value: 'Where is the pain exactly  ?',
        user: 'User1',
        translations: '4 translations',
        verified: '5 verified',
      },
      {
        id: 4,
        value: 'Where is the pain exactly  ?',
        user: 'User2',
        translations: '4 translations',
        verified: '5 verified',
      },
    ],
    section: 'Cardiac Section',
  };

  search = (e) => {
    e.preventdefault();
  };

  render() {
    const { values, section } = this.state;
    return (
      <div className="questions__box">
        <div className="questions__header">
          <div className="questions__header__logo">
            <img src={image} alt="img" />
            <h2 className="questions__title">Cardiac Section</h2>
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
export default QuesionsPage;
