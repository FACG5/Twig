import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleUp, faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';

import './style.css';

const Card = (props) => {
  const { values } = props;
  return (
    <ul className="traslations__list">
      {!values.length && <h2>No Translation this Question</h2>}
      {values && values.map((element) => {
        const {
          translation, id, username, date,
          vote_down: voteDown,
          vote_up: voteUp,
          avatar_url: avatarUrl,
        } = element;
        return (
          <li key={id} className="traslation__item">
            <div>
              <img src={avatarUrl} className="box__img" alt="" />
              <p>{username}</p>
            </div>
            <div className="traslation__container">
              <div>
                {translation}
              </div>
              <div className="traslation__date">
                {date.slice(0, 10)}
              </div>
            </div>
            <div className="traslation__verify">
              <div>
                <div><FontAwesomeIcon icon={faChevronCircleUp} size="lg" className="fa__check--circle" /></div>
                <div>
                  {`${voteUp} vote Up`}
                </div>
              </div>
              <div>
                <div>
                  <FontAwesomeIcon icon={faChevronCircleDown} size="lg" className="fa__times--circle" />
                </div>
                <div>{`${voteDown} vote Down`}</div>
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
