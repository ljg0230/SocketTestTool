import React, { Component } from 'react';
import PropTypes from "prop-types";
import './Data.css'

class Data extends Component {
  
  render() {
    return (
      <table className="layout">
        <tbody>
          <tr>
            <td className="num">{this.props.num}</td>
            <td className="dataA">{this.props.dataA}</td>
            <td className="dataB">{this.props.dataB}</td>
            <td className="dataC">{this.props.dataC}</td>
            <td className="dataD">{this.props.dataD}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}


Data.propType = {
    num: PropTypes.number.isRequired,
    dataA: PropTypes.string.isRequired,
    dataB: PropTypes.string.isRequired,
    dataC: PropTypes.string.isRequired,
    dataD: PropTypes.string.isRequired
}

export default Data;