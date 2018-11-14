import React, { Fragment, Component } from 'react';
import ProgressBar from '../common/ProgressBar';
import Card from './TranslationCard';
import ProfileCard from '../common/ProfileCard';
import image from '../../assets/img_avatar.png';
import './style.css';
import DonateModal from './DonateModal';
import Button from '../common/Button';

class TranslationsPage extends Component {
  state = {
    showModal: false,
    question: {
      value: 'Have you ever had a heart attack before ?',
      user: 'Admin',
      date: '9-10-2018',
    },
    values: [
      {
        id: 1,
        value: ' هل أصبت من قبل بنوبة قلبية ',
        user: 'Admin',
        img: image,
        verified: '5 verified',
        date: '9-10-2018',
      },
      {
        id: 2,
        value: ' هل أصبت من قبل بجلطة قلبية ',
        user: 'User2',
        img: image,
        verified: '4 verified',
        date: '9-10-2018',
      },
      {
        id: 3,
        value: ' هل أصبت من قبل بذبحة قلبية ',
        user: 'User1',
        img: image,
        verified: '2 verified',
        date: '9-10-2018',
      },
      {
        id: 4,
        value: 'هل حدث وقد أصبت بأوجاع الصدر من قبل',
        user: 'User2',
        img: image,
        verified: '0 verified',
        date: '9-10-2018',
      },
    ],
  };

  search=(e) => {
    e.preventdefault();
  }

  showModal=() => {
    this.setState(prevState => (
      { showModal: !prevState.showModal }
    ));
  }

  render() {
    const { values, question, showModal } = this.state;
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
            <div className="main__content--box--card ">
              <h4>{question.value}</h4>
              <div className="box__card--content--question">
                <div>
                  {question.user}
                </div>
                {question.date}
              </div>
            </div>
            <div className="main__content--button">
              <Button
                value="Donate Translations"
                className="button_donate"
                onClick={this.showModal}
                id="Donate"
              />
            </div>
            <h2 className="main__content--header--text">Translations</h2>
            <hr className="main__content--line" />
            <Card values={values} />
          </div>
        </div>
        {showModal ? <DonateModal showModal={this.showModal} /> : null}
      </Fragment>
    );
  }
}
export default TranslationsPage;
