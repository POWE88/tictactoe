import React, { Component } from 'react';
import './App.css';
import Board from './board.js'
import Message from './message.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Board />
      </div>
    );
  }
}

export default App;
