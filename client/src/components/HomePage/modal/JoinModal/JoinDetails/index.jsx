import React, { Component } from 'react';
import './style.css';
import PropTypes from 'prop-types';
import StageOne from './StageOne';
import StegeTwo from './StageTwo';

class JoinDetails extends Component {
  state = { firstStage: true };

  changeStage = () => {
    this.setState(prevStat => ({ firstStage: !prevStat.firstStage }));
  };

  render() {
    const { onChange, backFromDetails, setJobTitle } = this.props;
    const { firstStage } = this.state;
    return (
      <div className="modal__content">
        {firstStage ? (
          <StageOne onChange={onChange} changeStage={this.changeStage} backFromDetails={backFromDetails} />
        ) : (
          <StegeTwo onChange={onChange} changeStage={this.changeStage} setJobTitle={setJobTitle} />
        )}
      </div>
    );
  }
}

JoinDetails.propTypes = {
  onChange: PropTypes.func.isRequired,
  backFromDetails: PropTypes.func.isRequired,
  setJobTitle: PropTypes.func.isRequired,
};

export default JoinDetails;
