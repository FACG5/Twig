import React, { Component } from 'react';
import './style.css';
import PropTypes from 'prop-types';
import Login from './LoginModel';

export default class Modal extends Component {
  state = {
    login: true,
  }

  switch = () => {
    this.setState(prevState => (
      { show: !prevState.show }
    ));
  };

  render() {
    const { show } = this.props;
    const { login } = this.state;
    return (
      <div className="modal">
        {login ? <Login show={show} switchModel={this.switch} /> : null }
      </div>
    );
  }
}

Modal.propTypes = {
  show: PropTypes.func.isRequired,
};
