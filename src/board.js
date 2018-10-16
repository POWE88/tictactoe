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
        isClicked: false,
        player: "default",
        movesArr: ['','','','','','','','',''],
        winArr: [[0, 1, 2], [3, 4, 5], [6, 7, 8],
                 [0, 3, 6], [1, 4, 7], [2, 5, 8],
                 [0, 4, 8], [2, 4, 6]
                ]
    }
  }

  render() {
    let boxes = this.state.index.map((box, i) => {
      return (

        <Box id={i} isClicked={false} setPlayer={this.setPlayer} handleClickParent={this.handleClickParent} player={this.state.player}/>
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
  handleClickParent = (boxIndex, cPlayer) =>{

    let {movesArr} = this.state
    movesArr[boxIndex] = cPlayer
    console.log("Da movesArr: " + this.state.movesArr);
    if(this.isWinner()){
      console.log("There was a winner!");

    }
    this.setState({movesArr: movesArr, clickCount: this.state.clickCount+1})
  }

  //returns a string
  setPlayer = () => {

    if(this.state.clickCount % 2 === 0)
    {
      return "X"
    }else if(this.state.clickCount % 2 === 1){
      return "O"
    }
  }

  isWinner = () => {
    console.log("In winner")
    //take in the this.state.movesArr
    //compare with this.state.winArray
    let {movesArr, winArr} = this.state
    for(let i=0; i<winArr.length; i++){
      for(let j=1; j<3; j++){
        console.log("the Moves: " + movesArr[winArr[0][i]] + " " + movesArr[winArr[j][i]] + " " +
           movesArr[winArr[j][i]] + " " + movesArr[winArr[j+1][i]]);
        if(movesArr[winArr[0][i]] === movesArr[winArr[j][i]]
          && movesArr[winArr[j][i]] === movesArr[winArr[j+1][i]]){
          return true
        }else{
          return false
        }
      }
    }

  }


}

export default Board;
