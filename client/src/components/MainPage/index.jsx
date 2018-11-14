import React, { Fragment, Component } from 'react';
import ProgressBar from '../common/ProgressBar';
import ProfileCard from '../common/ProfileCard';
import SpecializationCard from './SpecializationCard';
import SearchBar from '../common/SearchBar';
import cardiacImg from '../../assets/cardiac.png';
import orthoImg from '../../assets/orthopedics.png';
import generalImg from '../../assets/general.png';
import psychImg from '../../assets/psychiatry.png';
import './style.css';

class MainPage extends Component {
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
      <Fragment>
        <div className="mainpage">
          <div>
            <ProfileCard
              name="Ali ALI"
              location="Gaza - Palestine"
              language="Arabic"
              dialect="Palestinian"
            />
            <ProgressBar />
          </div>
          <div className="mainpage__content">
            <div className="mainpage__content-header">
              <div className="mainpage__content-header">
                <h2 className="mainpage__content-header--text">Translation Categories</h2>
              </div>

              <SearchBar className="mainpage__content-header--search" submitHandler={this.search} />
            </div>
            <SpecializationCard values={values} />
            <p className="mainpage__content--text">Show All Sections </p>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default MainPage;
