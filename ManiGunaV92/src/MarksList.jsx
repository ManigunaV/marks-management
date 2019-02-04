import React, { Component } from 'react';
import Marks from './Marks'

class MarksList extends Component {
  render(){
    return(
      <div>
      {this.props.marksListData.sort((x, y) => (y.Roll_No - x.Roll_No)).map((a, b) => (<Marks key={b} markData = {a}/>))}
      </div>
    )
  }
}

export default MarksList