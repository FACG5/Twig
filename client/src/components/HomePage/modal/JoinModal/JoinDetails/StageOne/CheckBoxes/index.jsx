import React from 'react';
import PropTypes from 'prop-types';
import Inputs from '../../../../../../common/Inputs';

export default function CheckBoxes(props) {
  const { skills, onChange } = props;
  return (
    skills
    && skills.map(skill => (
      <label className="container__checkbox" key={skill.id}>
        {skill.description}
        <Inputs id={skill.id} onChange={onChange} type="checkbox" />
        <span className="span__checkbox" />
      </label>
    ))
  );
}

CheckBoxes.PropTypes = {
  onChange: PropTypes.func.isRequired,
  skills: PropTypes.instanceOf(Array),
};
