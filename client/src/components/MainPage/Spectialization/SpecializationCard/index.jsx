import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './style.css';

const Card = (props) => {
  const { values } = props;
  return (
    <ul className="category__box">
      {values.map((element) => {
        const {
          section, id, questions, imagePath,
        } = element;
        return (
          <Link to="/spName">
            <li key={id} className="category__card">
              <div className="category__card--content">
                <img
                  src={imagePath}
                  alt="img"
                  className="category__card--img"
                />
                <div className="category__card--section">{section}</div>
                <div className="category__card--content--box">{questions}</div>
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
