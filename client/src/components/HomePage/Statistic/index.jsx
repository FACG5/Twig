import React, { Component } from 'react';
import Fade from 'react-reveal';
import axios from 'axios';
import './style.css';
import satistic from './satistic.jpeg';

class Statistic extends Component {
  state = {
    values: [],
  };

  componentWillMount() {
    axios
      .get('/api/v1/statistic')
      .then((data) => {
        const results = data.data;
        this.setState({
          values: results,
        });
      })
      .catch((error) => {
        const { data: message, status } = error.response;
        if (status === 500) {
          this.setState({ message });
        }
      });
  }

  render() {
    const { values } = this.state;
    const usersCount = values[0];
    const users = usersCount && usersCount.usersCount;
    const questionsCount = values[1];
    const questions = questionsCount && questionsCount.questionsCount;
    const translationsCount = values[2];
    const translations = translationsCount && translationsCount.translationsCount;
    return (
      <Fade left>
        <div>
          <h1 className="satistic__tittel">We Have</h1>
          <hr className="satistic_line" />
        </div>
        <div className="satistic">
          <img className="satistic__image" src={satistic} alt="satistic" />
          <div>
            { usersCount && (
            <div className="satistic__Volunteers">
              <h1 className="number">{users}</h1>
              <h2 className="satistic__text">Volunteers</h2>
            </div>
            )}
            { questionsCount && (
              <div className="satistic__Questions">
                <h1 className="number">{questions}</h1>
                <h2 className="satistic__text">Questions</h2>
              </div>
            )}
            { translationsCount && (
              <div className="satistic__Translations">
                <h1 className="number">{translations}</h1>
                <h2 className="satistic__text">Translations</h2>
              </div>
            )}
          </div>
        </div>
      </Fade>
    );
  }
}

export default Statistic;
