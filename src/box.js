import React, { Component } from 'react';
import './App.css';
import Board from './board.js'

class Box extends Component {
  constructor(props){
    super(props)

    this.state = {
      isClicked: "false"
    }
  }

  render() {
    return (
      <div id="aBox" onClick={this.handleClick} >

        {this.props.display(this.state.isClicked)}

      </div>
    );
  }

  handleClick = () =>{
    this.setState({isClicked: "true"})

    console.log("Box "+this.props.id);
    console.log(this.state.isClicked);

 }
}



export default Box;
