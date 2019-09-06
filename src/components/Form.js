import "./Form.css";
import PropTypes from "prop-types";
import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div className="form">
        <input
          placeholder="원하는 데이터 수 입력"
          value={this.props.value}
          onChange={this.props.onChange}
          onKeyPress={this.props.onKeyPress}
        />
        <button className="myButton" onClick={this.props.onCreate}>
          Start
        </button>
      </div>
    );
  }
}

Form.propTypes = {
  value: PropTypes.string.isRequired,
  onCreate: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onKeyPress: PropTypes.func.isRequired
};


export default Form;
