import React, { Component } from 'react';
import './App.css';
import App from './App.js'
import Box from './box.js'

class Board extends Component {
  constructor(props){
    super(props)

    this.state={
        index: ['','','','','','','','','']

    }
  }
  render() {
    for(let i=0; i < this.state.index.length; i++){
      this.state.index[i] = {player: "x", isClicked: "false"}
    }

    return (
          <div id="ourBoard">
              <Box box0={this.state.index[0]} id={0} display={this.printOut} wasClicked = {this.handleClick.bind(this)}/>
              <Box box1={this.state.index[1]} id={1} display={this.printOut} wasClicked = {this.handleClick.bind(this)}/>
              <Box box2={this.state.index[2]} id={2} display={this.printOut} wasClicked = {this.handleClick.bind(this)}/>
              <Box box3={this.state.index[3]} id={3} display={this.printOut} wasClicked = {this.handleClick.bind(this)}/>
              <Box box4={this.state.index[4]} id={4} display={this.printOut} wasClicked = {this.handleClick.bind(this)}/>
              <Box box5={this.state.index[5]} id={5} display={this.printOut} wasClicked = {this.handleClick.bind(this)}/>
              <Box box6={this.state.index[6]} id={6} display={this.printOut} wasClicked = {this.handleClick.bind(this)}/>
              <Box box7={this.state.index[7]} id={7} display={this.printOut} wasClicked = {this.handleClick.bind(this)}/>
              <Box box8={this.state.index[8]} id={8} display={this.printOut} wasClicked = {this.handleClick.bind(this)}/>
          </div>
    );
  }
  printOut = (bool) => {
    if(bool === "true"){
      console.log("X was supposed to happen");
      return "X"
    }else{
      return "O"
    }


  }

  handleClick = (id) => {
    console.log("Board "+id);
    // let boxState = this.state.index[id].isClicked
    // this.setState({boxState: "true"})
    // console.log(boxState);

  }
}

export default Board;
