import React, { Component } from 'react';
import './App.css';
import App from './App.js'
import Box from './box.js'

class Board extends Component {
  constructor(props){
    super(props)

    this.state={
        index: ['','','','','','','','',''],
        player: "X",
        isClicked: "false"

    }
  }
  render() {

    return (
          <div id="ourBoard">
              <Box index={0} display={this.printOut} wasClicked = {this.handleClick}/>
              <Box index={1} display={this.printOut} wasClicked = {this.handleClick}/>
              <Box index={2} display={this.printOut} wasClicked = {this.handleClick}/>
              <Box index={3} display={this.printOut} wasClicked = {this.handleClick}/>
              <Box index={4} display={this.printOut} wasClicked = {this.handleClick}/>
              <Box index={5} display={this.printOut} wasClicked = {this.handleClick}/>
              <Box index={6} display={this.printOut} wasClicked = {this.handleClick}/>
              <Box index={7} display={this.printOut} wasClicked = {this.handleClick}/>
              <Box index={8} display={this.printOut} wasClicked = {this.handleClick}/>
          </div>
    );
  }
  printOut = () => {

    console.log("X was supposed to happen");
    return "x"

  }

  handleClick = () => {
    console.log("Clicked");
    return "true"



  }
}

export default Board;
