import Cookie from 'js-cookie';
import React, { Fragment, Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import ProgressBar from '../../common/ProgressBar';
import ProfileCard from '../../common/ProfileCard';
import './style.css';
import Loading from '../../common/Loading';

class MainLayout extends Component {
  state = {};

  componentDidMount() {
    const { history } = this.props;
    const jwtCooke = Cookie.get('jwt');
    if (jwtCooke) {
      this.setState({ login: true });
    } else {
      history.push('/');
    }
  }

  render() {
    const { component, ...rest } = this.props;
    const { login } = this.state;
    return login ? (
      <Fragment>
        <Header />
        <div className="mainpage">
          <div>
            <ProfileCard />
            <ProgressBar />
          </div>
          <div className="mainpage__content">
            <Route {...rest} component={component} />
          </div>
        </div>
        <Footer />
      </Fragment>
    ) : (
      <Loading />
    );
  }
}

export default withRouter(MainLayout);
