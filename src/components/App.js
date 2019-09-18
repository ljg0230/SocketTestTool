import React, { Component } from "react";
import PageTemplate from "components/PageTemplate/PageTemplate";
import PropTypes from "prop-types";
import DataList from "components/DataList";
import Form from "components/Form";

class App extends Component {

  render() {
    //console.log("App이 렌더링 되고있어요..");
    return (
      <PageTemplate
        form={
          <Form
            onCreate={this.props.onCreate}
            onKeyPress={this.props.onKeyPress}
            onChange={this.props.onChange}
            value={this.props.value}
          />
        }
      >
        <DataList datalist={this.props.datalist} />
      </PageTemplate>
    );
  }
}

App.propTypes = {
  datalist: PropTypes.arrayOf(PropTypes.object),
  onCreate: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onKeyPress: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default App;
