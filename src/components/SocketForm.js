import "./SocketForm.css";
import PropTypes from "prop-types";
import React, { Component } from "react";

class SocketForm extends Component {
  render() {
    return (
      <div className="form">
        <input
          placeholder="Data Message"
          value={this.props.value}
          onChange={this.props.onChange}
          onKeyPress={this.props.onKeyPress}
        />
        <button className="myButton" onClick={this.props.onClick}>
          Send
        </button>
        <span className="log">
            {this.props.message}
        </span>
      </div>
    );
  }
}

SocketForm.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onKeyPress: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired
};

export default SocketForm;
