import React, { Component } from 'react';
import './App.css';
import App from './App.js'
import Box from './box.js'

class Board extends Component {
  constructor(props){
    super(props)

    this.state={
        index: ['','','','','','','','',''],
        isClicked: false,
    }
  }
  render() {

    return (
          <div id="ourBoard">
              <Box index={0} isClicked={""} display={this.printOut} handleClick={this.handleClick}/>
              <Box index={1} isClicked={""} display={this.printOut} handleClick={this.handleClick}/>
              <Box index={2} isClicked={""} display={this.printOut} handleClick={this.handleClick}/>
              <Box index={3} isClicked={""} display={this.printOut} handleClick={this.handleClick}/>
              <Box index={4} isClicked={""} display={this.printOut} handleClick={this.handleClick}/>
              <Box index={5} isClicked={""} display={this.printOut} handleClick={this.handleClick}/>
              <Box index={6} isClicked={""} display={this.printOut} handleClick={this.handleClick}/>
              <Box index={7} isClicked={""} display={this.printOut} handleClick={this.handleClick}/>
              <Box index={8} isClicked={""} display={this.printOut} handleClick={this.handleClick}/>
          </div>
    );
  }
  printOut = () => {

  }
  handleClick = () => {

  }
}

export default Board;
