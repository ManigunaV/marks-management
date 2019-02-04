import React, { Component } from 'react';

class Filter1 extends Component {
      handleSubmit = (event) => {
        event.preventDefault()
        const markCategory = event.target.markCategory.value
        const subject = event.target.subject.value
        const std = this.props.std
        this.props.filterDetails(markCategory, subject, std)

  }
  render(){
    return(
      <div className = "filter1Container">
        <form onSubmit = {this.handleSubmit}>
          <div>Get </div>
            <select name = "markCategory">
              <option>Lowest</option>
              <option>Highest</option>
            </select>
            <div> In </div>
            <select name = "subject">
              <option>Total</option>
              <option>Tamil</option>
              <option>English</option>
              <option>Maths</option>
              <option>Science</option>
              <option>Social</option>
            </select>
            <button type = "Submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default Filter1