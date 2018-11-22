import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ModalConsumer } from '../../../../ModalContext';
import './style.css';

export default class Select extends Component {
  onChange = (context, getDialects, event) => {
    context.storeValue(event);
    if (getDialects) {
      getDialects(event);
    }
  }

  render() {
    const { data, name, getDialects } = this.props;
    return (
      <ModalConsumer>
        {context => (
          <select
            className="select__list"
            name={name}
            onChange={event => this.onChange(context, getDialects, event)}
          >
            <option disabled selected value={name}>{`select Your ${name}`}</option>
            {data
              && data.map(item => (
                <option className="select_option" value={item.id} key={item.id}>
                  {item.name}
                </option>
              ))}
          </select>
        )}
      </ModalConsumer>
    );
  }
}

Select.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
  name: PropTypes.string.isRequired,
  getDialects: PropTypes.func,
};
