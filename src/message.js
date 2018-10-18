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
      {this.props.createMessage(this.props.player,this.props.id)}

      </div>
    );
  }
}

export default Message;
