import React, { Component } from 'react';
import './App.css';
import App from './App.js'

class Message extends Component {
  constructor(props){
    super(props)

    this.state = {
      messages: []
    }
  }
  render() {
    return (
      <div className="App">
      {this.storeMessage()}
      {this.state.messages[0]}
      {this.state.messages[1]}
      {this.state.messages[2]}
      {this.state.messages[3]}
      {this.state.messages[4]}
      {this.state.messages[5]}
      {this.state.messages[6]}
      {this.state.messages[7]}
      {this.state.messages[8]}

      </div>
    );
  }



}

export default Message;
