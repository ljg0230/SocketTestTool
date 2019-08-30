import React, { Component } from 'react';
import './App.css'
import { subscribeToTimer } from 'api';
import Item from './item';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      timestamp: "no timestamp yet",
      input: '',
      itemDo: [
        {}
      ]
    };

    subscribeToTimer((err, timestamp) =>
      this.setState({
        timestamp
      })
    );
  }
  
  render() {

    return (
      <div className="App">
        <h1 className="App-intro">
          Web Socket Test.. {this.state.timestamp}
        </h1>
        <Item></Item>
      </div>
    );
  }
}

export default App;

