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
        message: "Player ☠️ will start.",
        player: "default",
        isActive: true,
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

        <Box id={i} isClicked={false} setPlayer={this.setPlayer} handleClickParent={this.handleClickParent} player={this.state.player} isActive={this.state.isActive}/>
      )
    })
    return (
          <div id="ourBoard">
            <h1>Spook-Tac-Toe!!</h1>
            {boxes}
            <p>{this.state.message}</p>
          </div>
    );
  }

  //handleClick Method
  //When clicked toggle the x to o
  handleClickParent = (boxIndex, cPlayer) =>{

    let {movesArr, message} = this.state
    movesArr[boxIndex] = cPlayer
    if(this.isWinner()){
      //alert(`${cPlayer} was the winner!`)
      this.setState({ isActive: false })

    }
    message = this.createMessage(cPlayer, boxIndex)

    this.setState({movesArr: movesArr, clickCount: this.state.clickCount+1, message: message})
  }

  //returns a string
  setPlayer = () => {

    if(this.state.clickCount % 2 === 0)
    {
      return "☠️"
    }else if(this.state.clickCount % 2 === 1){
      return "🎃"
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
        if(movesArr[a] === movesArr[b] && movesArr[a] === movesArr[c] && movesArr[a] != ""){
            bool = true
            break
        }else{
          bool = false
        }
      }
      return bool

  }

  createMessage = (player, boxID) => {
    let nextPlayer
    if(player === "☠️"){
      nextPlayer = "🎃"
    }else{
      nextPlayer = "☠️"
    }

    if(this.isWinner()){
      return `Player ${player} has won!`
    }else if(this.state.clickCount === 8){
      return `GAME OVER, LOSERS!`
    }else{
      return `Player ${player} moved to box ${boxID + 1}! Now it's
      player ${nextPlayer}'s turn.`
    }
 }
}

export default Board;
