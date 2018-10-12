import React, { Component } from 'react';
import './App.css';
import App from './App.js'
import Box from './box.js'

class Board extends Component {
  constructor(props){
    super(props)

    this.state={
        index: ['','','','','','','','',''],
        p: "",
        clickCount: 0,
        player: "x",
        isClicked: "false"
    }
  }
  render() {
    // for(let i=0; i < this.state.index.length; i++){
    //   this.state.index[i] = {player: "x", isClicked: "false"}
    //   this.setState({})
    // }
    let boxes = this.state.index.map((box, i) => {
      return (
        <Box id={i} isClicked={"false"} wasClicked={this.handleClick.bind(this)} count={this.state.clickCount} />
      )
    })

    return (
          <div id="ourBoard">
            {boxes}
          </div>
    );
  }

  // togglePlayer = () => {
  //   if(this.state.clickCount%2==0){
  //     this.setState({p:"O"})
  //   }else{
  //     this.setState({p:"X"})
  //   }
  //
  //   return this.state.p
  // }

  handleClick = () => {
    console.log("Board ");
    console.log(this.state.clickCount);
    this.setState({
      clickCount: this.state.clickCount+1,
      //set some other state, isClicked
    })

    // let boxState = this.state.index[id].isClicked
    // this.setState({boxState: "true"})
    // console.log(boxState);

  }
}

export default Board;
