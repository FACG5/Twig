import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './style.css';

const Card = (props) => {
  const { values, section } = props;
  return (
    <ul className="box">
      {values
        && values.map(({
          question, id, username, translations, date,
        }) => (
          <li key={id} className="box__card">
            <div className="box__card--question">{question}</div>
            <div className="box__card--content">
              <div className="box__card--details">
                <div>{username}</div>
                <div>{date.slice(0, 10)}</div>
              </div>
              <Link to={`/main/${section}/questions/${id}`}>
                <div className="box__card--translations">{`Show ${translations} translations`}</div>
              </Link>
            </div>
          </li>
        ))}
    </ul>
  );
};

Card.propTypes = {
  values: PropTypes.instanceOf(Array).isRequired,
  section: PropTypes.string.isRequired,
};

export default Card;
