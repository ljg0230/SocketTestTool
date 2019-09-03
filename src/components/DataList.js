import React, { Component } from "react";
import PropTypes from "prop-types";
import Data from "components/Data";

class DataList extends Component {
  render() {
    let datas = this.props.datalist.map(data => {
      return <Data key={data.id} num={(data.id)+1} {...data} />;
    });
    return <div>{datas}</div>;
  }
}

DataList.propTypes = {
  datalist: PropTypes.arrayOf(PropTypes.object)
};

export default DataList;
