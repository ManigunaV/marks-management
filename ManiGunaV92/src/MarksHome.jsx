import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class MarksHome extends Component{
  render(){
    return(
      <div className = "marksHome">
        <Link to = "/firstStandard">First Standard Marks</Link><br/><br/>
        <Link to = "/secondStandard">Second Standard Marks</Link><br/><br/>
        <Link to = "/thirdStandard">Third Standard Marks</Link><br/><br/> 
        <Link to = "/fourthStandard">Fourth Standard Marks</Link><br/><br/>
        <Link to = "/fifthStandard">Fifth Standard Marks</Link><br/><br/> 
      </div>
    )
  }
}

export default MarksHome