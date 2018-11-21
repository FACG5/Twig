import React from 'react';
import Inputs from '../../../../../../common/Inputs';

export default function CheckBoxes(props) {
  const { skills, onChange } = props;
  return skills.map(skill => (
    <label className="container__checkbox" key={skill.id}>
      {skill.description}
      <Inputs id={skill.id} onChange={onChange} type="checkbox" />
      <span className="span__checkbox" />
    </label>
  ));
}
