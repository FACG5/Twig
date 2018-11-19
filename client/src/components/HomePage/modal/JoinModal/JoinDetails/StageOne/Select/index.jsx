import React from 'react';
import { ModalConsumer } from '../../../../ModalContext';
import './style.css';

export default function Select(props) {
  const { data, name } = props;
  return (
    <ModalConsumer>
      {context => (
        <select
          className="select__list"
          name={name}
          onChange={context.storeValue}
        >
          <option disabled selected value={name}>{`select Your ${name}`}</option>
          {data
            && data.map(item => (
              <option className="select_option" value={item} key={item}>
                {item}
              </option>
            ))}
        </select>
      )}
    </ModalConsumer>
  );
}
