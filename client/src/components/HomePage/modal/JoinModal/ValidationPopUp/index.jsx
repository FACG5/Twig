import React from 'react';
import './style.css';
import PropTypes from 'prop-types';
import Button from '../../../../common/Button';


export default function PopUp(props) {
  const { closePopUp } = props;
  return (
    <div className="mainPopUp">
      <div className="popup__validation">
        <h4>Invalid user info !</h4>
        <hr />
        <div className="popContent">
          <h3>Please Fill all of the fields ! </h3>
          <Button className="button__back" value="Back" onClick={closePopUp} />
        </div>
      </div>
    </div>
  );
}

PopUp.propTypes = {
  closePopUp: PropTypes.func.isRequired,
};
