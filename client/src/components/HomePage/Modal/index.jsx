import React, { Component } from 'react';
import './style.css';
import PropTypes from 'prop-types';
import Login from './LoginModel';

export default class Modal extends Component {
  state = {
    login: true,
  }
  switch = () => {
    this.setState({ login: !this.state.login });    
  };
  onChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };
  render() {
    const { show } = this.props;
    const { login } = this.state;
    return (
      <div className='modal'>
        {login? <Login show={show} switchModel = {this.switch}/> : null }
      </div>
    );
  }
}

Modal.propTypes = {
  show: PropTypes.func.isRequired
};
