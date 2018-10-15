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
        isClicked: "false",
        movesArr: [],
        winner: [[0, 1, 2], [3, 4, 5], [6, 7, 8],
                 [0, 3, 6], [1, 4, 7], [2, 5, 8],
                 [0, 4, 8], [2, 4, 6]
                ]
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
  handleClickParent = (string, boxIndex) =>{
    let {movesArr} = this.state
    movesArr[boxIndex] = string
    console.log(movesArr);
    if(string === ""){
      this.setState({clickCount: this.state.clickCount+1, movesArr: movesArr})
      console.log("handleClickParent: " + this.state.clickCount)
    }else{

    }



  }




}

export default Board;
