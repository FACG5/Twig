import React, { Component } from 'react';
import Card from './TranslationCard';
import image from '../../../assets/img_avatar.png';
import './style.css';
import DonateModal from './DonateModal';
import Button from '../../common/Button';

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

  search = (e) => {
    e.preventdefault();
  };

  showModal = () => {
    this.setState(prevState => ({ showModal: !prevState.showModal }));
  };

  render() {
    const { values, question, showModal } = this.state;
    return (
      <div className="translation__box">
        <div className="translation__question">
          <h4>{question.value}</h4>
          <div className="translation__user">
            <div>{question.user}</div>
            {question.date}
          </div>
        </div>
        <div className="translation__button">
          <Button
            value="Donate Translations"
            className="button_donate"
            onClick={this.showModal}
            id="Donate"
          />
        </div>
        <h2 className="translations__list">Translations</h2>
        <hr className="translations__line" />
        <Card values={values} />
        {showModal ? <DonateModal showModal={this.showModal} /> : null}
      </div>
    );
  }
}
export default TranslationsPage;
