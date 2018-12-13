import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Inputs from '../../common/Inputs';
import Button from '../../common/Button';
import './style.css';

class Location extends Component {
  state = {
    validation: false,
    found: false,
  };

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value, validation: false, found: false });
  };

  onClick=() => {
    const { City, State } = this.state;
    const { updateValues } = this.props;
    if (City && City.trim() && State && State.trim()) {
      const API_KEY = process.env.REACT_APP_API_KEY;
      axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${State},${City}&key=${API_KEY}`).then((res) => {
        // check the api results
        if (res.data.total_results !== 0) {
          const locationValues = res.data.results[0].geometry;
          const { lat, lng } = locationValues;
          const data = { State, lat, lng };
          axios.post('api/v1/geo-code', data).then(() => {
            const newData = {
              location: State,
              latitude: lat,
              longitude: lng,
            };
            updateValues(newData);
            this.setState({ message: 'Successfully added ', validation: false, found: false });
          }).catch((error) => {
            const { status } = error.response;
            if (status === 404) {
              this.setState({ message: 'Route Not Found' });
            }
          });
        } else {
          // when the result of api is 0 then show a message to user of Not Found
          this.setState({ messageNotFound: ' Not Found', found: true });
        }
      }).catch((error) => {
        // when api not found
        const { status } = error.response;
        if (status === 404) {
          this.setState({ message: ' Not Found' });
        }
      });
    } else {
      this.setState({ validation: true });
    }
  };

  render() {
    const {
      validation, message, found, messageNotFound,
    } = this.state;
    return (
      <div className="location__box">
        <h3 className="location__title">Location</h3>
        <hr />
        <div className="location__content">
          <Inputs
            name="State"
            className="input__location"
            onChange={this.onChange}
            type="text"
            placeholder="Enter your State"
          />
          <Inputs
            name="City"
            className="input__location"
            onChange={this.onChange}
            type="text"
            placeholder="Enter your City"
          />
          {validation ? (
            <h1 className="dialect__error">
                  Please Enter Your State and City!
            </h1>
          ) : (
            <h1 className="dialect__message">{message}</h1>
          )}
          {found ? (
            <h1 className="dialect__error">
              {messageNotFound}
            </h1>
          ) : null}
          <Button className="button__location" value="OK" onClick={this.onClick} />
        </div>
      </div>
    );
  }
}

Location.propTypes = {
  updateValues: PropTypes.func.isRequired,
};

export default Location;
