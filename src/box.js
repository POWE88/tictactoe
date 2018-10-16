import React, { Component } from 'react';
import './App.css';

class Box extends Component {
  constructor(props){
    super(props)

    this.state = {
      isClicked: false,
      player: ""
    }
  }

  render() {
    return (
      <div id="aBox" onClick={this.handleClickChild}>
        {this.state.player}
      </div>
    );
  }

//handleClick
//change isClicked state to true
handleClickChild = () => {
//  let {player} = this.state
  let {isClicked} = this.state

  //Update parent when isClicked is false
  if(!isClicked){
    console.log("Child click");
    let cPlayer = this.props.setPlayer()
    console.log("cPlayer: " + cPlayer);
    isClicked = true
    this.props.handleClickParent(this.props.id, cPlayer)
    this.setState({isClicked: isClicked, player: cPlayer})
  }




  // if(this.props.count % 2 === 0 && !this.props.isClicked)
  // {
  //
  //   player = "X"
  //   console.log("I'm handleClickChild for X: " + player);
  //   console.log("I'm happening");
  //   this.props.handleClickParent(isClicked, this.props.id, player)
  //
  //   this.setState({player: player})
  // }else if(this.props.count % 2 === 1 && !this.props.isClicked){
  //   player = "O"
  //   console.log("I'm handleClickChild for O: " + player);
  //   console.log("I'm happening");
  //   this.props.handleClickParent(isClicked, this.props.id, player)
  //
  //   this.setState({player: player})




}

}



export default Box;
