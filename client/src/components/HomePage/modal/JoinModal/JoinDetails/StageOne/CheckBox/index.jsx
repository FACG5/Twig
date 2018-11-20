import React from 'react';
import Inputs from '../../../../../../common/Inputs';

export default function CheckBox(props) {
  const {
    value, id, name, onChange,
  } = props;
  return (
    <label className="container__checkbox">
      {value}
      <Inputs
        id={id}
        onChange={onChange}
        type="checkbox"
        name={name}
      />
      <span className="span__checkbox" />
    </label>
  );
}
