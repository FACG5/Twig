import React from 'react';
import { Redirect } from 'react-router-dom';

class PrivateRoute extends React.Component {
  componentWillMount() {
    const login = localStorage.getItem('login');
    if (login) {
      this.setState({ login: true });
    } else {
      this.setState({ login: false });
    }
  }

  switchLogin = () => {
    this.setState(prevState => ({ login: !prevState.login }));
  };

  render() {
    const { component: Component, ...rest } = this.props;
    const { login } = this.state;
    return (
      <React.Fragment>
        {login ? (
          <Component {...rest} switchLogin={this.switchLogin} />
        ) : (
          <Redirect to="/landing" />
        )}
      </React.Fragment>
    );
  }
}

export default PrivateRoute;
