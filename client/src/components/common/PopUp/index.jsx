import React from 'react';
import './style.css';
import PropTypes from 'prop-types';
import Button from '../Button';

export default function PopUp(props) {
  const { title, message, closePopUp } = props;
  return (
    <div className="mainPopUp">
      <div className="popup__validation">
        <h4>{title}</h4>
        <hr />
        <div className="popContent">
          <h3>{message}</h3>
          <Button className="button__back" value="Ok" onClick={closePopUp} />
        </div>
      </div>
    </div>
  );
}

PopUp.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  closePopUp: PropTypes.func.isRequired,
};
