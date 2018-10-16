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
    let {isClicked} = this.state

    //Update parent when isClicked is false
    if(!isClicked){
      console.log("Child click");
      let cPlayer = this.props.setPlayer()
      isClicked = true
      this.props.handleClickParent(this.props.id, cPlayer)
      this.setState({isClicked: isClicked, player: cPlayer})
    }
  }

}



export default Box;
