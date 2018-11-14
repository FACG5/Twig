import React, { Component } from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../common/Button';

class DonateModal extends Component {
  state = {
    text: true,
    audio: false,
    video: false,
  };

  switchTab = (e) => {
    const { textContent } = e.target;
    const textContentLower = textContent.toLowerCase();
    this.setState({ text: false, audio: false, video: false }, () => {
      this.setState({ [textContentLower]: true });
    });
  };

  render() {
    const { text, audio, video } = this.state;
    const { showModal } = this.props;
    return (
      <div className="donate__modal">
        <div className="donate__content">
          <div className="donate__header">
            <h2 className="donate__title"> Donate Translation</h2>
            <FontAwesomeIcon
              icon="times-circle"
              className="closeButton"
              onClick={showModal}
            />
          </div>
          <hr />
          <div className="donate__tabs">
            <Button
              onClick={this.switchTab}
              className={text ? 'donate__tab--clicked' : 'donate__tab'}
              value="Text"
            />
            <Button
              onClick={this.switchTab}
              className={audio ? 'donate__tab--clicked' : 'donate__tab'}
              value="Audio"
            />
            <Button
              onClick={this.switchTab}
              className={video ? 'donate__tab--clicked' : 'donate__tab'}
              value="Video"
            />
          </div>
          <hr/>
          <h1>Work In Progress</h1>
        </div>
      </div>
    );
  }
}

export default DonateModal;