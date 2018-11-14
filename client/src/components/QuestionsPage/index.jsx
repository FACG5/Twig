import React, { Fragment, Component } from 'react';
import ProgressBar from '../common/ProgressBar';
import SearchBar from '../common/SearchBar';
import Card from './QuestionCard';
import ProfileCard from '../common/ProfileCard';
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

  search=(e) => {
    e.preventdefault();
  }

  render() {
    const { values, section } = this.state;
    return (
      <Fragment>
        <div className="main">
          <div>
            <ProfileCard
              name="Ali ALI"
              location="Gaza - Palestine"
              language="Arabic"
              dialect="Palestinian"
            />
            <ProgressBar />
          </div>
          <div className="main__content">
            <div className="main__content--header">
              <div className="main__content--header">
                <img src={image} alt="img" />
                <h2 className="main__content--header--text">Cardiac Section</h2>
              </div>

              <SearchBar className="main__content--header--search" submitHandler={this.search} />
            </div>
            <Select />
            <Card values={values} section={section} />
            <p className="main__content--text">Show All 100 Question </p>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default QuesionsPage;
