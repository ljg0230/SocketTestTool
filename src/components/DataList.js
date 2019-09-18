import React, { Component } from "react";
import PropTypes from "prop-types";
import Data from "components/Data";

class DataList extends Component {
  render() {
    //console.log("DataList가 렌더링 되고있어요..");
    let datas = this.props.datalist.map(data => {
      return <Data key={data.id} num={data.id} {...data} />;
    });
    return <div>{datas}</div>;
  }
}

DataList.propTypes = {
  datalist: PropTypes.arrayOf(PropTypes.object)
};

export default DataList;
