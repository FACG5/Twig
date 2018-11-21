import React from 'react';
import PropTypes from 'prop-types';
import Inputs from '../../../../../../common/Inputs';

export default function Jobs(props) {
  const { jobs, onChange } = props;

  return jobs.map(job => (
    <label className="container">
      {job.title}
      <Inputs type="radio" name="jobTitle" onChange={onChange} value={job.id} />
      <span className="mark__checkbox" />
    </label>
  ));
}

Jobs.PropTypes = {
  onChange: PropTypes.func.isRequired,
  jobs: PropTypes.instanceOf(Array),
};
