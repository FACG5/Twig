import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Card from './TranslationCard';
import './style.css';
import DonateModal from './DonateModal';
import Button from '../../common/Button';

class TranslationsPage extends Component {
  state = {
    showModal: false,
    question: {},
    values: [],
  };

  componentWillMount() {
    const { match, history } = this.props;
    const { params } = match;
    const { questionId } = params;

    axios
      .get(`/api/v1/questions/${questionId}`)
      .then((data) => {
        const results = data.data;
        const { resultquestions, resulttranslation } = results;
        this.setState({
          question: resultquestions[0],
          values: resulttranslation,
        });
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

  showModal = () => {
    this.setState(prevState => ({ showModal: !prevState.showModal }));
  };

  render() {
    const {
 values, question, showModal, error 
} = this.state;
    const { questions, username, date } = question;
    return (
      <div className="translation__box">
        {error ? (
          <h4 className="error__message">{error}</h4>
        ) : (
          <div>
            {' '}
            <div className="translation__question">
              <h4>{questions}</h4>
              <div className="translation__user">
                <div>{username}</div>
                <div>{date && date.slice(0, 10)}</div>
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
            {values.length ? (
              <Card values={values} />
            ) : (
              <h4> There are no available translations for this question </h4>
            )}
            {showModal ? <DonateModal showModal={this.showModal} /> : null}
          </div>
        )}
      </div>
    );
  }
}
TranslationsPage.propTypes = {
  match: PropTypes.isRequired,
};
export default TranslationsPage;
