import "./Form.css";
import PropTypes from "prop-types";
import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
          <div className="form">
            <input value={this.props.value} onChange={this.props.onChange} />
            <button className="myButton" onClick={this.props.onCreate}>
              Start
            </button>
          </div>
        );
    }
}

Form.propTypes = {
  value: PropTypes.string.isRequired,
  handleCreate: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};


export default Form;
