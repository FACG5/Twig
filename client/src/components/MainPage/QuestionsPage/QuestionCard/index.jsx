import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './style.css';

const Card = (props) => {
  const { values, section } = props;
  return (
    <ul className="box">
      {values && values.map((element) => {
        const {
          value, id, user, translations, verified,
        } = element;
        return (
          <li key={id} className="box__card">
            <Link to={`/${section}/questions/${id}`}>
              <div>{value}</div>
              <div className="box__card--content">
                <div>
                  {user}
                </div>
                <div className="box__card--content--box">
                  <div>
                    {translations}
                  </div>
                  <div>
                    {verified}
                  </div>
                </div>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

Card.propTypes = {
  values: PropTypes.instanceOf(Array).isRequired,
  section: PropTypes.string.isRequired,

};

export default Card;
