import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import './style.css';

const Card = (props) => {
  const { values } = props;

  return (
    <ul className="box">
      {values.map((element) => {
        const {
          value, id, img, date, verified, user,
        } = element;
        return (
          <li key={id} className="box__card--translation">
            <div>
              <img src={img} className="box__img" alt="" />
              <p>{user}</p>
            </div>
            <div className="box__card--translation--div">
              <div>
                {value}
              </div>
              <div className="box__card--content--date">
                {date}
              </div>
            </div>
            <div className="box__card--content--verify">
              <div>
                <div><FontAwesomeIcon icon={faCheckCircle} size="lg" className="fa__check--circle" /></div>
                <div>{verified}</div>
              </div>
              <div>
                <div>
                  <FontAwesomeIcon icon={faTimesCircle} size="lg" className="fa__times--circle" />
                </div>
                <div>{verified}</div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

Card.propTypes = {
  values: PropTypes.instanceOf(Array).isRequired,
};

export default Card;
