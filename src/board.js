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
    let bool = false
    //take in the this.state.movesArr
    //compare with this.state.winArr
    let {movesArr, winArr} = this.state
      for(let i=0; i<winArr.length; i++){
        let [a,b,c] = winArr[i]

        console.log(`winArr[${i}]. a=${movesArr[a]} b=${movesArr[b]} c=${movesArr[c]}`)

        if(movesArr[a] === movesArr[b] && movesArr[a] === movesArr[c] && movesArr[a] != ""){
            console.log("I'm in the true");
            bool = true
            break
        }else{
          console.log("I'm in the false");
          bool = false
        }
      }
      console.log("Value of bool: " + bool);
      return bool

  }
  // movesArr: ['','','','','','','','',''],

  // winArr: [[0, 1, 2], [3, 4, 5], [6, 7, 8],
  //          [0, 3, 6], [1, 4, 7], [2, 5, 8],
  //          [0, 4, 8], [2, 4, 6]
  //         ]


}

export default Board;
