import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class InputMarks extends Component {

submitDetails = (event) => {
  event.preventDefault();
  const stdClass = event.target.elements.standard.value;
  const name = event.target.elements.stdName.value
  const roll = event.target.elements.roll.value
  const tamil = event.target.elements.tamil.value
  const english = event.target.elements.english.value
  const maths = event.target.elements.maths.value
  const science = event.target.elements.science.value
  const social = event.target.elements.social.value
  const total = Number(tamil)+Number(english)+Number(maths)+Number(science)+Number(social)
  const stdDetail = {
    "Name" : name,
    "class" : stdClass,
    "Roll_No" : roll,
    "Tamil" : tamil,
    "English" : english,
    "Maths" : maths,
    "Science" : science,
    "Social" : social,
    "Total" : total
  }
  this.props.onSubmitMarks(stdDetail)
} 
render(){
  return(
    <div>
      <button id = "home"><Link to ="/" >Go to Home</Link></button>
      <form className = "marksInput" onSubmit = {this.submitDetails}>
        <select name = "standard">
          <option>Select class</option>
          <option value = "first">1</option>
          <option value = "second">2</option>
          <option value = "third">3</option>
          <option value = "fourth">4</option>
          <option value = "fifth">5</option>
        </select>
        <input type = "text" placeholder = "Enter Name" name = "stdName"></input>
        <input type = "number" placeholder = "Enter Roll.No" name = "roll"></input>
        <input type = "number" placeholder = "Enter Tamil Marks" name = "tamil"></input>
        <input type = "number" placeholder = "Enter English Marks" name = "english"></input>
        <input type = "number" placeholder = "Enter Maths Marks" name = "maths"></input>
        <input type = "number" placeholder = "Enter Science Marks" name = "science"></input>
        <input type = "number" placeholder = "Enter Social Marks" name = "social"></input>
        
        <button>Submit</button>
      </form>
    </div>
  )
}
}

export default InputMarks