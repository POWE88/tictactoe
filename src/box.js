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
  if(!isClicked && this.props.isActive){
    console.log("Child click");
    let cPlayer = this.props.setPlayer()
    console.log("cPlayer: " + cPlayer);
    isClicked = true
    this.props.handleClickParent(this.props.id, cPlayer)
    this.setState({isClicked: isClicked, player: cPlayer})
  } 
}

}



export default Box;
