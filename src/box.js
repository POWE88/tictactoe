import React, { Component } from 'react';
import './App.css';

class Box extends Component {
  constructor(props){
    super(props)

    this.state = {
      isClicked: "true"
    }
  }

  render() {
    return (
      <div id="aBox" onClick={this.handleClick} >

        {this.printOut(this.props.isClicked)}

      </div>
    );
  }

  handleClick = () =>{
    this.setState({isClicked: "false"})
    this.props.wasClicked();

 }
 printOut = (iC) => {
   console.log(iC + " " + this.props.count);
   if(iC === "true" & this.props.count%2===0){
     return "X"
   }else if(iC === "true" & this.props.count%2===1){
     return "O"
   }else{
     return "ELSE"
   }
 }
}



export default Box;
