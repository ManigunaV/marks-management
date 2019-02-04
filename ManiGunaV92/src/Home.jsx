import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Home extends Component{
  render(){
    return(
      <div>
        <h1 className = "heading">{this.props.title}</h1>
        <Link to = "/marksHome">Let's see marks </Link> <br/><br/>
        <Link to = "/inputMarks">Add marks here </Link> <br/><br/>
      </div>
    )
  }
}

export default Home