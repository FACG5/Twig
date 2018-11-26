import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Card from './TranslationCard';
import './style.css';
import DonateModal from './DonateModal';
import Button from '../../common/Button';
import Loading from '../../common/Loading';

class TranslationsPage extends Component {
  state = {
    showModal: false,
    values: [],
  };


  componentWillMount() {
    const { match, history } = this.props;
    const { params } = match;
    const { questionId } = params;

    setTimeout(() => {
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
    }, 1000);
  }

  updateValues =(element) => {
    this.setState(
      { values: element },
    );
  }

  voteDownClick = (translationsId) => {
    const { match } = this.props;
    const { params } = match;
    const { questionId } = params;
    const voteUp = 0;
    const voteDown = 1;
    const VoteData = { voteUp, voteDown, translationsId };
    axios
      .post(`/api/v1/questions/${questionId}/voteDown`, VoteData)
      .then((result) => {
        const { message, translationResult } = result.data;
        this.setState({ values: translationResult, message });
      })
      .catch((error) => {
        const { data: message, status } = error.response;
        if (status === 500) {
          this.setState({ message });
        }
      });
  };

  voteUpClick = (translationsId) => {
    const { match } = this.props;
    const { params } = match;
    const { questionId } = params;
    const voteUp = 1;
    const voteDown = 0;
    const dataVote = { voteUp, voteDown, translationsId };
    axios
      .post(`/api/v1/questions/${questionId}/voteUp`, dataVote)
      .then((result) => {
        const { message, translationResult } = result.data;
        this.setState({ values: translationResult, message });
      })
      .catch((error) => {
        const { data: message, status } = error.response;
        if (status === 500) {
          this.setState({ message });
        }
      });
  };

  showModal = () => {
    this.setState(prevState => ({ showModal: !prevState.showModal }));
  };

  render() {
    const {
      values, question, showModal, error,
    } = this.state;
    if (!question && !error) {
      return <Loading />;
    }
    if (question) {
      return (
        <div className="translation__box">
          <div>
            <div className="translation__question">
              <h4>{question.questions}</h4>
              <div className="translation__user">
                <div>{question.username}</div>
                <div>{question.date && question.date.slice(0, 10)}</div>
              </div>
            </div>
            <div className="translation__button">
              <Button
                value="Donate Translations"
                className="button__donate"
                onClick={this.showModal}
                id="Donate"
              />
            </div>
            <h2 className="translations__list">Translations</h2>
            <hr className="translations__line" />
            {values.length ? (
              <Card
                values={values}
                voteDownClick={this.voteDownClick}
                voteUpClick={this.voteUpClick}
              />
            ) : (
              <h4> There are no available translations for this question </h4>
            )}
            {showModal ? (
              <DonateModal
                showModal={this.showModal}
                updateValues={this.updateValues}
              />
            ) : null}
          </div>
        </div>
      );
    }
    return (
      <div className="translation__box">
        <h4 className="error__message">{error}</h4>
      </div>
    );
  }
}
TranslationsPage.propTypes = {
  match: PropTypes.isRequired,
  history: PropTypes.isRequired,
};
export default TranslationsPage;
