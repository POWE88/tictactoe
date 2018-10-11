import React, { Component } from 'react';
import './App.css';
import Board from './board.js'

class Box extends Component {
  constructor(props){
    super(props)

    this.state = {isClicked:"false"}
  }

  render() {

    return (
      <div id="aBox" onClick={this.props.wasClicked} >

        {this.props.wasClicked()}

      </div>
    );
  }
}



export default Box;
