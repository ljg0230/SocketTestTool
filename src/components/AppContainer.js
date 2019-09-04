import React, { Component } from "react";
import "./AppContainer.css";
import App from "components/App";
import { subscribeToTimer } from "api";

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timestamp: "no timestamp yet",
      input: "",
      dataLayout: [
        { id: 0, dataA: "aa", dataB: "bb", dataC: "cc", dataD: "dd" },
      ]
    };

    subscribeToTimer((err, timestamp) =>
      this.setState({
        timestamp
      })
    );
  }

  handleChange = e => {
    this.setState({
      input: e.target.value
    });
  };

  handleCreate = () => {
    console.log(this.state);
  };

  componentDidMount() {
/*     this.setState({
      dataLayout: Array.from({ length: 100 }, (_, index) => ({
        id: index + 1,
        dataA: "aa",
        dataB: "bb",
        dataC: "cc",
        dataD: "dd"
      }))
    }); */
    const {dataLayout} = this.state;
    for (let id=1; id <=100; ++id){
      dataLayout.push({
        id,
        dataA: "aa",
        dataB: "bb",
        dataC: "cc",
        dataD: "dd"
      });
    }
    this.setState({
      dataLayout
    })
  }
  render() {
    return (
      <div>
        <h1 className="App-intro">Web Socket Test.. {this.state.timestamp}</h1>
        <App
          value={this.state.input}
          datalist={this.state.dataLayout}
          onCreate={this.handleCreate}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default AppContainer;
