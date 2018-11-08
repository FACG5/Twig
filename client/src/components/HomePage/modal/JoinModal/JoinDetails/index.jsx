import React, { Component, Fragment } from 'react';
import './style.css';
import PropTypes from 'prop-types';
import StageOne from './StageOne/index';
import StegeTwo from './StageTwo/index';

class JoinDetails extends Component {
  state = { firstStage: true };

  changeStage = () => {
    this.setState(prevStat => ({ firstStage: !prevStat.firstStage }));
  };

  render() {
    const { onChange, logState } = this.props;
    const { firstStage } = this.state;
    return (
      <div className="contentOfDetails">
        {firstStage ? (
          <StageOne onChange={onChange} logState={logState} changeStage={this.changeStage} />
        ) : (
          <StegeTwo onChange={onChange} logState={logState} />
        )}
      </div>
    );
  }
}

JoinDetails.propTypes = {
  onChange: PropTypes.func.isRequired,
  logState: PropTypes.func.isRequired,
};

export default JoinDetails;
