import React, { Component } from "react";
import "./AppContainer.css";
import App from "components/App";
import socketIOClient from "socket.io-client";
import produce from "immer";
import { subscribeToTimer } from "api";

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isStart: false,
      endpoint: "http://localhost:4001",
      timestamp: "no timestamp yet",
      input: "",
      maximum: 0,
      dataLayout: [
        {
          id: 0,
          dataA: "aa",
          dataB: "bb",
          dataC: "cc",
          dataD: "dd",
          dataE: "ee",
          dataF: "ff",
          dataG: "gg",
          dataH: "hh",
          dataI: "ii",
          dataJ: "jj",
          dataK: "kk"
        }
      ]
    };
    subscribeToTimer((err, timestamp) =>
      this.setState({
        timestamp
      })
    );
    /* if (this.state.isStart) {
      subscribeToTimer((err, timestamp) =>
        this.setState({
          timestamp
        })
      );
    } */
  }

  handleKeyPress = e => {
    if (e.key === "Enter") {
      this.handleCreate();
    }
  };

  handleChange = e => {
    this.setState({
      input: e.target.value,
      maximum: e.target.value
    });
  };

  handleCreate = () => {
    const { input } = this.state;
    this.setState({
      input: "",
      isStart: true,
      dataLayout: Array.from({ length: input }, (_, index) => ({
        id: index + 1,
        dataA: "aa",
        dataB: "bb",
        dataC: "cc",
        dataD: "dd",
        dataE: "ee",
        dataF: "ff",
        dataG: "gg",
        dataH: "hh",
        dataI: "ii",
        dataJ: "jj",
        dataK: "kk"
      }))
    });
  };

  /*   handleTEST = () => {
    const NewData = produce((draft, props) => {
      if (draft.dataLayout.length > 1) {
        draft.dataLayout[1].dataA = "AA";
        draft.dataLayout[1].dataB = "BB";
        draft.dataLayout[1].dataC = "CC";
        draft.dataLayout[1].dataD = "DD";
      }
    });
    this.setState(NewData);
    console.log(this.state.dataLayout);
  }; */

  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);

    socket.on("veh-data", data => {
      const tempData = data.split("/");
      if (this.state.isStart === true) {
        const newData = produce((draft, props) => {
          if (draft.dataLayout.length > 1) {
            for (let i = 1; i < this.state.maximum; i++) {
              if (draft.dataLayout[i].id === parseInt(tempData[0])) {
                draft.dataLayout[i].dataA = tempData[1];
                draft.dataLayout[i].dataB = tempData[2];
                draft.dataLayout[i].dataC = tempData[3];
                draft.dataLayout[i].dataD = tempData[4];
                draft.dataLayout[i].dataE = tempData[5];
                draft.dataLayout[i].dataF = tempData[6];
                draft.dataLayout[i].dataG = tempData[7];
                draft.dataLayout[i].dataH = tempData[8];
                draft.dataLayout[i].dataI = tempData[9];
                draft.dataLayout[i].dataJ = tempData[10];
                draft.dataLayout[i].dataK = tempData[11];
              }
            }
          }
        });
        this.setState(newData);
      }
    });
  }

  render() {
    //console.log("AppContainer가 렌더링 되고있어요..");
    return (
      <div>
        {
          <h1 className="App-intro">
            Web Socket Test.. {this.state.timestamp}
          </h1>
        }
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
