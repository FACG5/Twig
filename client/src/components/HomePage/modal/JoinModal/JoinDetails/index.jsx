import React, { Component } from 'react';
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
    const { onChange, backFromDetails } = this.props;
    const { firstStage } = this.state;
    return (
      <div className="modelContent">
        {firstStage ? (
          <StageOne onChange={onChange} changeStage={this.changeStage} backFromDetails={backFromDetails} />
        ) : (
          <StegeTwo onChange={onChange} changeStage={this.changeStage} />
        )}
      </div>
    );
  }
}

JoinDetails.propTypes = {
  onChange: PropTypes.func.isRequired,
  backFromDetails: PropTypes.func.isRequired,
};

export default JoinDetails;
