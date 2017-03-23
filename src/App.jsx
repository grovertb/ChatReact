import React, { Component } from 'react';
import { Link } from 'react-router'
import {RaisedButton} from 'material-ui';

class App extends Component {
  constructor(props){
    super(props)
  }

  render() {
    // var socket  = io();
    // socket.emit('init')
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <RaisedButton label="Default" primary={true} />
        <Link to="/about" >go About</Link>
      </div>
    );
  }
}

export default App;
