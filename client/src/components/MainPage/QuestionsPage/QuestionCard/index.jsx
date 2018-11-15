import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './style.css';

const Card = (props) => {
  const { values } = props;
  return (
    <ul className="box">
      {values.map((element) => {
        const {
          value, id, user, translations, verified,
        } = element;
        return (
          <Link to="/spName/questions/15">
            <li key={id} className="box__card">
              <div>{value}</div>
              <div className="box__card--content">
                <div>{user}</div>
                <div className="box__card--content--box">
                  <div>{translations}</div>
                  <div>{verified}</div>
                </div>
              </div>
            </li>
          </Link>
        );
      })}
    </ul>
  );
};

Card.propTypes = {
  values: PropTypes.instanceOf(Array).isRequired,
};

export default Card;
