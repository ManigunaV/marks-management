import React, { Component } from 'react';

class Headers extends Component {
render(){
  return(
    <div>
      <ul className = "displayHeaders">
        {this.props.header.map((x,y) => (<li key = {y}>{x}</li>))}
      </ul>
    </div>
  )
}
}

export default Headers