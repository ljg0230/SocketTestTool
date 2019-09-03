import React, { Component } from "react";
import "./AppContainer.css";
import App from "components/App";
import { subscribeToTimer } from "api";
import produce from "immer";

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timestamp: "no timestamp yet",
      input: "",
      dataLayout: [
        { id: 0, dataA: "aa", dataB: "bb", dataC: "cc", dataD: "dd" },
        { id: 1, dataA: "aa", dataB: "bb", dataC: "cc", dataD: "dd" },
        { id: 2, dataA: "aa", dataB: "bb", dataC: "cc", dataD: "dd" }
      ]
    };

    subscribeToTimer((err, timestamp) =>
      this.setState({
        timestamp
      })
    );
  }

  handleCreate = data => {
    const { input, dataLayout } = this.state;
    this.setState({
      input: "",
      dataLayout: dataLayout.concat({
        id: this.id++,
        ...data
      })
    });
  };

  render() {
      console.log(this.state);
    return (
      <div>
        <h1 className="App-intro">Web Socket Test.. {this.state.timestamp}</h1>
        <App
          value={this.state.input}
          datalist={this.state.dataLayout}
          onCreate={this.handleCreate}
        />
      </div>
    );
  }
}

export default AppContainer;
