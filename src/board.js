import React, { Component } from 'react';
import './App.css';
import App from './App.js'
import Box from './box.js'
import Message from './message.js'

class Board extends Component {
  constructor(props){
    super(props)

    this.state={
        index: ['','','','','','','','',''],
        clickCount: 0,
        isClicked: false,
        message: "message",
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
            <Message message={this.state.message}/>
          </div>
    );
  }

  //handleClick Method
  //When clicked toggle the x to o
  handleClickParent = (boxIndex, cPlayer) =>{

    let {movesArr, message} = this.state
    movesArr[boxIndex] = cPlayer
    if(this.isWinner()){
      alert(`${cPlayer} was the winner!`)
      this.setState({index: ['','','','','','','','',''],
                    clickCount: 0,
                    isClicked: false,
                    player: "default",
                    movesArr: ['','','','','','','','','']})

    }
    message = this.createMessage(cPlayer, boxIndex)

    this.setState({movesArr: movesArr, clickCount: this.state.clickCount+1, message: message})
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
    return `${this.state.clickCount + 1}. Player ${player} moved to box ${boxID + 1}`
  }

  storeMessage = () => {
    messages.push(this.props.message)
    this.setState({messages: messages})
  }
}

export default Board;
