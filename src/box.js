import React, { Component } from 'react';
import './App.css';

class Box extends Component {
  constructor(props){
    super(props)

    this.state = {
      isClicked: ""
    }
  }

  render() {
    return (
      <div id="aBox" onClick={this.handleClickChild} >
        {this.state.isClicked}
        {this.props.id}
      </div>
    );
  }

//handleClick
//change isClicked state to true
handleClickChild = () => {

  if(this.props.count % 2 === 0 && this.state.isClicked === "")
  {
    this.setState({isClicked: "X"})
  }else if(this.props.count % 2 === 1 && this.state.isClicked === ""){
    this.setState({isClicked: "O"})

  }
  this.props.handleClickParent(this.state.isClicked, this.props.id)
}

}



export default Box;
