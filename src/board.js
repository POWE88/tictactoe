import React, { Component } from 'react';
import './App.css';
import App from './App.js'
import Box from './box.js'

class Board extends Component {
  constructor(props){
    super(props)

    this.state={
        index: ['','','','','','','','',''],
        clickCount: 0,
        player: "x",
        isClicked: "false"
    }
  }
  render() {

    let boxes = this.state.index.map((box, i) => {
      return (
        <Box id={i} isClicked={"false"} handleClickParent={this.handleClickParent} count={this.state.clickCount}/>
      )
    })

    return (
          <div id="ourBoard">
            {boxes}
          </div>
    );
  }

  //handleClick Method
  //When clicked toggle the x to o
  handleClickParent = (string) =>{
    if(string === ""){
      this.setState({clickCount: this.state.clickCount+1})
      console.log("handleClickParent: " + this.state.clickCount)
    }



  }




}

export default Board;
