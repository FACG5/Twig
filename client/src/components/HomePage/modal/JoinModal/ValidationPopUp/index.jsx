import React from 'react';
import './style.css';
import PropTypes from 'prop-types';
import Button from '../../../../common/Button';
import { ModalConsumer } from '../../ModalContext';

export default function PopUp(props) {
  const { title, message } = props;
  return (
    <ModalConsumer>
      {context => (
        <div className="mainPopUp">
          <div className="popup__validation">
            <h4>{title}</h4>
            <hr />
            <div className="popContent">
              <h3>{message}</h3>
              <Button
                className="button__back"
                value="Back"
                onClick={context.closePopUp}
              />
            </div>
          </div>
        </div>
      )}
    </ModalConsumer>
  );
}

PopUp.propTypes = {
  closePopUp: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};
