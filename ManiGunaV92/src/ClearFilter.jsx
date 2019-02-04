import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class ClearFilter extends Component{

  handleClick = () => {
    this.props.clearFilter()
  }
  render(){
    return(
      <div className = "clearFilter" >
        <button id = "home"><Link to ="/" >Go to Home</Link></button>
        <button id = "clear" onClick = {this.handleClick}>ClearFilter</button>
      </div>
    )
  }
}

export default ClearFilter