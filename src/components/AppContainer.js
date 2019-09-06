import React, { Component } from "react";
import "./AppContainer.css";
import App from "components/App";
import socketIOClient from "socket.io-client";
import { subscribeToTimer, subscribeToVehicle } from "api";

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      endpoint: "http://localhost:4001",
      timestamp: "no timestamp yet",
      input: "",
      dataLayout: [
        { id: 0, dataA: "aa", dataB: "bb", dataC: "cc", dataD: "dd" }
      ]
    };

    subscribeToTimer((err, timestamp) =>
      this.setState({
        timestamp
      })
    );
  }

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.handleCreate();
    }
  };

  handleChange = e => {
    this.setState({
      input: e.target.value
    });
  };

  handleCreate = e => {
    const { input } = this.state;
    this.setState({
      input: "",
      dataLayout: Array.from({ length: input }, (_, index) => ({
        id: index + 1,
        dataA: "aa",
        dataB: "bb",
        dataC: "cc",
        dataD: "dd"
      }))
    });
  };

  componentDidMount

  render() {
    return (
      <div>
        <h1 className="App-intro">Web Socket Test.. {this.state.timestamp}</h1>
        <App
          value={this.state.input}
          datalist={this.state.dataLayout}
          onCreate={this.handleCreate}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
      </div>
    );
  }
}

export default AppContainer;
