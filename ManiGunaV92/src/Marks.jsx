import React, { Component } from 'react';

class Marks extends Component {
  render(){
    return(
      <div>
        <ul className = "displayMarks">
          {Object.keys(this.props.markData).map((x, y) => (<li key = {y}>{Object.values(this.props.markData)[y]}</li>))}
        </ul>
      </div>
    )
  }
}

export default Marks