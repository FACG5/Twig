import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './style.css';

class Card extends Component {
  state = {
    edit: false,
  };

  componentWillMount() {
    const { values } = this.props;
    this.setState({ values });
  }

  editQuestion = (index) => {
    const { values } = this.state;
    values[index].editable = true;
    values[index].message = null;
    this.setState(values);
  };

  onChangeQuestion = (event, index) => {
    const { values } = this.state;
    const { value } = event.target;
    values[index].question = value;
    this.setState(values);
  };

  savaQuestion = (id, speclalizationsId, userId, index) => {
    const { values } = this.state;
    const { question } = values[index];
    axios
      .put(`/api/v1/specialization/question/${speclalizationsId}`, {
        question,
        userId,
        questionId: id,
      })
      .then((result) => {
        const { data: message } = result;
        values[index].message = message;
        values[index].editable = false;
        this.setState(values);
      })
      .catch((error) => {
        const { data: message, status } = error.response;
        if (status === 500) {
          this.setState({ message });
        }
      });
  };

  render() {
    const { section, userId } = this.props;
    const { values } = this.state;
    return (
      <ul className="box">
        {values
          && values.map(
            (
              {
                question,
                id,
                username,
                translations,
                date,
                owner,
                speclalizationsId,
                editable,
                message,
              },
              index,
            ) => (
              <li key={id} className="box__card">
                <div className="box__card--question">
                  <input
                    className="question--title"
                    disabled={!editable}
                    onChange={event => this.onChangeQuestion(event, index)}
                    value={question}
                  />
                </div>
                <div className="box__card--content">
                  <div className="box__card--details">
                    <div>{username}</div>
                    <div>{date.slice(0, 10)}</div>
                  </div>
                  {message ? (
                    <h3 className="edited--message">{message}</h3>
                  ) : null}
                  <div className="box__card--buttons">
                    <div>
                      {userId === owner ? (
                        <FontAwesomeIcon
                          icon="edit"
                          className="edit-icon"
                          onClick={() => this.editQuestion(index)}
                        />
                      ) : null}
                      <div className={`save-icon ${editable ? null : 'none'}`}>
                        <FontAwesomeIcon
                          icon="save"
                          onClick={() => this.savaQuestion(
                            id,
                            speclalizationsId,
                            userId,
                            index,
                          )
                          }
                        />
                      </div>
                    </div>
                    <Link to={`/main/${section}/questions/${id}`}>
                      <div className="box__card--translations">{`Show ${translations} translations`}</div>
                    </Link>

                  </div>
                </div>
              </li>
            ),
          )}
      </ul>
    );
  }
}

Card.propTypes = {
  values: PropTypes.instanceOf(Array).isRequired,
  section: PropTypes.string.isRequired,
  userId: PropTypes.number.isRequired,
};

export default Card;
