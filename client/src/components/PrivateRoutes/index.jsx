import React from 'react';
import { Redirect } from 'react-router-dom';
import Cookie from 'js-cookie';

class PrivateRoute extends React.Component {
  componentWillMount() {
    const jwt = Cookie.get('jwt');
    if (jwt) {
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
