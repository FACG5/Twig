import React, { Component } from 'react';
import './style.css';
import Input from '../../common/Inputs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Login extends Component {
  state = { name: '', email: '' };
  render() {
    const { show } = this.props;
  
    return (
      <div className='modal'>
        <div className='modalHead'>
          <h1>Login to TWIG</h1>
          <FontAwesomeIcon icon='times-circle' className='closeButton' onClick = { show } />
        </div>
        <hr />
        <div className='content'>
          <Input className='loginInput' placeholder='Enter your email' />
          <Input className='loginInput' placeholder='Enter your password' />
        </div>
      </div>
    );
  }
}

export default Login;
