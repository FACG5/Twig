import React, { Fragment, Component } from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import ProgressBar from '../common/ProgressBar';
import Card from './CardsQuestion';
import Input from '../common/Inputs';
import Select from './Select';
import './style.css';
import image from './image.png';

class QuesionsPage extends Component {
  state = {
    values: [
      {
        id: 1,
        value: 'Have you ever had a heart attack before ?',
        user: 'Admin',
        translations: '4 translations',
        verified: '5 verified',
      },
      {
        id: 2,
        value: 'Have you ever been in a hospital  ?',
        user: 'User2',
        translations: '4 translations',
        verified: '5 verified',
      },
      {
        id: 3,
        value: 'Where is the pain exactly  ?',
        user: 'User1',
        translations: '4 translations',
        verified: '5 verified',
      },
      {
        id: 4,
        value: 'Where is the pain exactly  ?',
        user: 'User2',
        translations: '4 translations',
        verified: '5 verified',
      },
    ],
  };

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    const { values } = this.state;
    return (
      <Fragment>
        <Header />
        <div className="main">
          <ProgressBar />
          <div className="main__content">
            <div className="main__content--header">
              <img src={image} alt="img" />
              <h2 className="main__content--header--text">Cardiac Section</h2>
              <Input
                name="search"
                type="text"
                className="input__search"
                placeholder="search"
                onChange={this.onChange}
                disabled={null}
              />
            </div>
            <Select />
            <Card values={values} />
            <p className="main__content--text">Show All 100 Question </p>
          </div>
        </div>
        <Footer />
      </Fragment>
    );
  }
}
export default QuesionsPage;
