import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronCircleUp,
  faChevronCircleDown,
} from '@fortawesome/free-solid-svg-icons';

import './style.css';

const Card = (props) => {
  const { values, voteUpClick, voteDownClick } = props;
  return (
    <ul className="traslations__list">
      {values
        && values.map((element) => {
          const {
            translation,
            id,
            username,
            date,
            voteDown,
            voteUp,
            avatar_url: avatarUrl,
            type_id: typeId,
            link,
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
                  {typeId === 2 ? (
                    <audio controls>
                      <source src={`/api/v1/files/${link}`} type="audio/mp3" />
                      <source src={`/api/v1/files/${link}`} type="audio/ogg" />
                      <p>Your browser doesnt support HTML5 audio.</p>
                    </audio>
                  ) : null}
                  {typeId === 3 ? (
                    <video width="420" height="240" controls>
                      <source src={`/api/v1/files/${link}`} type="video/mp4" />
                      <source src={`/api/v1/files/${link}`} type="video/ogg" />
                      <p>Your browser doesnt support HTML5 audio.</p>
                    </video>
                  ) : null}
                </div>
                <div className="traslation__date">{date.slice(0, 10)}</div>
              </div>
              <div className="traslation__verify">
                <div>
                  <div>
                    <FontAwesomeIcon
                      icon={faChevronCircleUp}
                      size="lg"
                      className="fa__check--circle"
                      onClick={() => {
                        voteUpClick(id);
                      }}
                    />
                  </div>
                  <div>{`${voteUp} vote Up`}</div>
                </div>
                <div>
                  <div>
                    <FontAwesomeIcon
                      icon={faChevronCircleDown}
                      size="lg"
                      className="fa__times--circle"
                      onClick={() => {
                        voteDownClick(id);
                      }}
                    />
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
  voteDownClick: PropTypes.func.isRequired,
  voteUpClick: PropTypes.func.isRequired,
};

export default Card;
