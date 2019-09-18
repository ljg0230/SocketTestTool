import React, { Component } from 'react';
import PropTypes from "prop-types";
import './Data.css'

class Data extends Component {

  /* shouldComponentUpdate(nextProps, nextState) {
    return nextProps.id !== this.props.id;
  } */

  render() {
    //console.log("Data가 렌더링 되고있어요..");
    return (
      <table className="layout">
        <tbody>
          <tr>
            <td className="num">{this.props.num}</td>
            <td className="dataA">{this.props.dataA}</td>
            <td className="dataB">{this.props.dataB}</td>
            <td className="dataC">{this.props.dataC}</td>
            <td className="dataD">{this.props.dataD}</td>
            <td className="dataE">{this.props.dataE}</td>
            <td className="dataF">{this.props.dataF}</td>
            <td className="dataG">{this.props.dataG}</td>
            <td className="dataH">{this.props.dataH}</td>
            <td className="dataI">{this.props.dataI}</td>
            <td className="dataJ">{this.props.dataJ}</td>
            <td className="dataK">{this.props.dataK}</td>
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
  dataD: PropTypes.string.isRequired,
  dataE: PropTypes.string.isRequired,
  dataF: PropTypes.string.isRequired,
  dataG: PropTypes.string.isRequired,
  dataH: PropTypes.string.isRequired,
  dataI: PropTypes.string.isRequired,
  dataJ: PropTypes.string.isRequired,
  dataK: PropTypes.string.isRequired
};

export default Data;