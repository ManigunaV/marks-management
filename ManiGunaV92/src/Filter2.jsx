import React, { Component } from 'react';

class Filter2 extends Component {
  handleSubmit = (event) =>{
    event.preventDefault();
    const category = event.target.category.value
    const subject = event.target.subject.value
     const std = this.props.std
    this.props.filterDetails(category, subject, std)
  }
  render(){
    return(
      <div className = "filter2Container">
        <div>Get Students who got </div>
        <form onSubmit = {this.handleSubmit}>
          <select name = "category">
            <option>Pass</option>
            <option>Fail</option>
          </select>
          <div> Mark In </div>
          <select name = "subject">
            <option>Tamil</option>
            <option>English</option>
            <option>Maths</option>
            <option>Science</option>
            <option>Social</option>
          </select>
        <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default Filter2