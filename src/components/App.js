import React, { Component } from "react";
import PageTemplate from "components/PageTemplate/PageTemplate";
import PropTypes from "prop-types";
import DataList from "components/DataList";
import Form from "components/Form";

class App extends Component {
  render() {
    return (
      <PageTemplate
        form={
          <Form onCreate={this.props.handleCreate} value={this.props.value} />
        }
      >
        <DataList datalist={this.props.datalist} />
      </PageTemplate>
    );
  }
}

App.propTypes = {
  datalist: PropTypes.arrayOf(PropTypes.object),
  handleCreate: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default App;
