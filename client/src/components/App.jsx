import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import Header from './common/Header';

library.add(faTimesCircle);

class App extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <Header />
      </React.Fragment>
    );
  }
}

export default App;
