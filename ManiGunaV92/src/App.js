import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import Home from './Home'
import Headers from './Headers'
import MarksHome from './MarksHome'
import MarksList from './MarksList'
import InputMarks from './InputMarks'
import Filter1 from './Filter1'
import Filter2 from './Filter2'
import ClearFilter from './ClearFilter'
var defaultState = {
      title : "Students Marks Management",
      headers : ["Name","Standard","Roll No.","Tamil","English","Maths","Science","Social","Total"],
      students :
        [
          {
            "Name": "Mani",
            "Class": "first",
            "Roll_No": 1,
            "Tamil": 50,
            "English": 40,
            "Maths": 85,
            "Science": 58,
            "Social": 14,
            "Total": 247
          },
          {
            "Name": "Ragu",
            "Class": "fourth",
            "Roll_No": 10,
            "Tamil": 54,
            "English": 31,
            "Maths": 8,
            "Science": 66,
            "Social": 93,
            "Total": 252
          },
          {
            "Name": "Rosee",
            "Class": "fifth",
            "Roll_No": 9,
            "Tamil": 94,
            "English": 52,
            "Maths": 48,
            "Science": 76,
            "Social": 90,
            "Total": 360
          },
          {
            "Name": "Vijay",
            "Class": "fourth",
            "Roll_No": 7,
            "Tamil": 80,
            "English": 45,
            "Maths": 76,
            "Science": 54,
            "Social": 39,
            "Total": 294
          },
          {
            "Name": "Vikram",
            "Class": "fifth",
            "Roll_No": 10,
            "Tamil": 50,
            "English": 77,
            "Maths": 39,
            "Science": 96,
            "Social": 51,
            "Total": 313
          },
          {
            "Name": "Karthick",
            "Class": "fourth",
            "Roll_No": 8,
            "Tamil": 25,
            "English": 81,
            "Maths": 88,
            "Science": 56,
            "Social": 76,
            "Total": 326
          },
          {
            "Name": "Preethi",
            "Class": "fifth",
            "Roll_No": 2,
            "Tamil": 45,
            "English": 67,
            "Maths": 8,
            "Science": 73,
            "Social": 19,
            "Total": 212
          },
          {
            "Name": "Divya",
            "Class": "fifth",
            "Roll_No": 4,
            "Tamil": 35,
            "English": 77,
            "Maths": 67,
            "Science": 54,
            "Social": 69,
            "Total": 302
          },
          {
            "Name": "Vaasu",
            "Class": "fourth",
            "Roll_No": 9,
            "Tamil": 71,
            "English": 38,
            "Maths": 1,
            "Science": 45,
            "Social": 91,
            "Total": 246
          },
          {
            "Name": "Prathap",
            "Class": "fifth",
            "Roll_No": 3,
            "Tamil": 10,
            "English": 66,
            "Maths": 25,
            "Science": 16,
            "Social": 38,
            "Total": 155
          },
          {
            "Name": "Suganya",
            "Class": "fourth",
            "Roll_No": 6,
            "Tamil": 22,
            "English": 17,
            "Maths": 72,
            "Science": 46,
            "Social": 97,
            "Total": 254
          },
          {
            "Name": "Supriya",
            "Class": "fifth",
            "Roll_No": 6,
            "Tamil": 7,
            "English": 85,
            "Maths": 24,
            "Science": 10,
            "Social": 37,
            "Total": 163
          },
          {
            "Name": "Suresh",
            "Class": "fifth",
            "Roll_No": 7,
            "Tamil": 5,
            "English": 81,
            "Maths": 57,
            "Science": 56,
            "Social": 84,
            "Total": 283
          },
          {
            "Name": "Raam",
            "Class": "fourth",
            "Roll_No": 5,
            "Tamil": 71,
            "English": 2,
            "Maths": 89,
            "Science": 46,
            "Social": 89,
            "Total": 297
          },
          {
            "Name": "Janaki",
            "Class": "fifth",
            "Roll_No": 8,
            "Tamil": 36,
            "English": 75,
            "Maths": 35,
            "Science": 96,
            "Social": 71,
            "Total": 313
          },
          {
            "Name": "Kala",
            "Class": "fifth",
            "Roll_No": 1,
            "Tamil": 78,
            "English": 95,
            "Maths": 38,
            "Science": 1,
            "Social": 36,
            "Total": 248
          },
          {
            "Name": "Guna",
            "Class": "first",
            "Roll_No": 10,
            "Tamil": 22,
            "English": 90,
            "Maths": 41,
            "Science": 15,
            "Social": 13,
            "Total": 181
          },
          {
            "Name": "Ravi",
            "Class": "first",
            "Roll_No": 3,
            "Tamil": 47,
            "English": 58,
            "Maths": 27,
            "Science": 34,
            "Social": 30,
            "Total": 196
          },
          {
            "Name": "Raju",
            "Class": "first",
            "Roll_No": 5,
            "Tamil": 10,
            "English": 98,
            "Maths": 47,
            "Science": 40,
            "Social": 10,
            "Total": 205
          },
          {
            "Name": "Kumar",
            "Class": "second",
            "Roll_No": 7,
            "Tamil": 46,
            "English": 77,
            "Maths": 22,
            "Science": 56,
            "Social": 21,
            "Total": 222
          },
          {
            "Name": "Sethu",
            "Class": "second",
            "Roll_No": 2,
            "Tamil": 9,
            "English": 16,
            "Maths": 90,
            "Science": 40,
            "Social": 44,
            "Total": 199
          },
          {
            "Name": "Sathish",
            "Class": "second",
            "Roll_No": 5,
            "Tamil": 61,
            "English": 13,
            "Maths": 63,
            "Science": 39,
            "Social": 52,
            "Total": 228
          },
          {
            "Name": "Priya",
            "Class": "first",
            "Roll_No": 4,
            "Tamil": 95,
            "English": 4,
            "Maths": 6,
            "Science": 99,
            "Social": 39,
            "Total": 243
          },
          {
            "Name": "Kavitha",
            "Class": "first",
            "Roll_No": 7,
            "Tamil": 37,
            "English": 66,
            "Maths": 4,
            "Science": 82,
            "Social": 41,
            "Total": 230
          },
          {
            "Name": "Banu",
            "Class": "second",
            "Roll_No": 9,
            "Tamil": 4,
            "English": 96,
            "Maths": 77,
            "Science": 25,
            "Social": 36,
            "Total": 238
          },
          {
            "Name": "Gayathri",
            "Class": "first",
            "Roll_No": 9,
            "Tamil": 33,
            "English": 51,
            "Maths": 62,
            "Science": 1,
            "Social": 80,
            "Total": 227
          },
          {
            "Name": "Siva",
            "Class": "third",
            "Roll_No": 2,
            "Tamil": 82,
            "English": 8,
            "Maths": 35,
            "Science": 56,
            "Social": 30,
            "Total": 211
          },
          {
            "Name": "Suriya",
            "Class": "second",
            "Roll_No": 6,
            "Tamil": 77,
            "English": 1,
            "Maths": 13,
            "Science": 88,
            "Social": 34,
            "Total": 213
          },
          {
            "Name": "Balaji",
            "Class": "first",
            "Roll_No": 8,
            "Tamil": 49,
            "English": 59,
            "Maths": 42,
            "Science": 90,
            "Social": 56,
            "Total": 296
          },
          {
            "Name": "Rajesh",
            "Class": "first",
            "Roll_No": 6,
            "Tamil": 22,
            "English": 96,
            "Maths": 32,
            "Science": 95,
            "Social": 95,
            "Total": 340
          },
          {
            "Name": "Srithar",
            "Class": "fourth",
            "Roll_No": 4,
            "Tamil": 68,
            "English": 95,
            "Maths": 9,
            "Science": 86,
            "Social": 30,
            "Total": 288
          },
          {
            "Name": "Naveen",
            "Class": "first",
            "Roll_No": 2,
            "Tamil": 66,
            "English": 22,
            "Maths": 34,
            "Science": 39,
            "Social": 10,
            "Total": 171
          },
          {
            "Name": "Santhiya",
            "Class": "second",
            "Roll_No": 3,
            "Tamil": 60,
            "English": 67,
            "Maths": 36,
            "Science": 14,
            "Social": 41,
            "Total": 218
          },
          {
            "Name": "Suguna",
            "Class": "fourth",
            "Roll_No": 1,
            "Tamil": 82,
            "English": 6,
            "Maths": 81,
            "Science": 15,
            "Social": 88,
            "Total": 272
          },
          {
            "Name": "Devi",
            "Class": "second",
            "Roll_No": 1,
            "Tamil": 5,
            "English": 26,
            "Maths": 59,
            "Science": 87,
            "Social": 258,
            "Total": 435
          },
          {
            "Name": "Akshaya",
            "Class": "fourth",
            "Roll_No": 3,
            "Tamil": 22,
            "English": 83,
            "Maths": 16,
            "Science": 26,
            "Social": 30,
            "Total": 177
          },
          {
            "Name": "Lavanya",
            "Class": "second",
            "Roll_No": 8,
            "Tamil": 2,
            "English": 53,
            "Maths": 75,
            "Science": 72,
            "Social": 41,
            "Total": 243
          },
          {
            "Name": "Pooja",
            "Class": "third",
            "Roll_No": 6,
            "Tamil": 47,
            "English": 18,
            "Maths": 18,
            "Science": 90,
            "Social": 0,
            "Total": 173
          },
          {
            "Name": "Ranjitha",
            "Class": "second",
            "Roll_No": 10,
            "Tamil": 95,
            "English": 16,
            "Maths": 23,
            "Science": 98,
            "Social": 91,
            "Total": 323
          },
          {
            "Name": "Suja",
            "Class": "third",
            "Roll_No": 8,
            "Tamil": 38,
            "English": 82,
            "Maths": 39,
            "Science": 14,
            "Social": 64,
            "Total": 237
          },
          {
            "Name": "Mahesh",
            "Class": "third",
            "Roll_No": 9,
            "Tamil": 4,
            "English": 0,
            "Maths": 27,
            "Science": 3,
            "Social": 38,
            "Total": 72
          },
          {
            "Name": "Ajith",
            "Class": "third",
            "Roll_No": 7,
            "Tamil": 97,
            "English": 83,
            "Maths": 78,
            "Science": 71,
            "Social": 19,
            "Total": 348
          },
          {
            "Name": "Prabhu",
            "Class": "fourth",
            "Roll_No": 2,
            "Tamil": 99,
            "English": 37,
            "Maths": 60,
            "Science": 35,
            "Social": 82,
            "Total": 313
          },
          {
            "Name": "Krishna",
            "Class": "second",
            "Roll_No": 4,
            "Tamil": 30,
            "English": 31,
            "Maths": 99,
            "Science": 73,
            "Social": 74,
            "Total": 307
          },
          {
            "Name": "Prakash",
            "Class": "third",
            "Roll_No": 1,
            "Tamil": 98,
            "English": 11,
            "Maths": 53,
            "Science": 40,
            "Social": 92,
            "Total": 294
          },
          {
            "Name": "Santhosh",
            "Class": "fifth",
            "Roll_No": 5,
            "Tamil": 66,
            "English": 32,
            "Maths": 90,
            "Science": 35,
            "Social": 65,
            "Total": 288
          },
          {
            "Name": "Bharath",
            "Class": "third",
            "Roll_No": 3,
            "Tamil": 90,
            "English": 45,
            "Maths": 16,
            "Science": 45,
            "Social": 9,
            "Total": 205
          },
          {
            "Name": "Jeeva",
            "Class": "third",
            "Roll_No": 5,
            "Tamil": 16,
            "English": 0,
            "Maths": 6,
            "Science": 89,
            "Social": 68,
            "Total": 179
          },
          {
            "Name": "Nakul",
            "Class": "third",
            "Roll_No": 4,
            "Tamil": 94,
            "English": 53,
            "Maths": 97,
            "Science": 91,
            "Social": 61,
            "Total": 396
          },
          {
            "Name": "Praveen",
            "Class": "third",
            "Roll_No": 10,
            "Tamil": 7,
            "English": 79,
            "Maths": 85,
            "Science": 72,
            "Social": 65,
            "Total": 308
          }
        ]
      }
class App extends Component {
  constructor(){
    super()
    this.state = defaultState
    }

  UpdateMarks = (details) => {
    this.setState((prevState) => ({
      students : [...prevState.students,details]
    }))
  }
  clearFilters = () => {
    this.setState({students : [...defaultState.students]})
  }
  filterState1 = (value, subject, std) => {
    this.setState({students : [...defaultState.students]})
    if(value === "Lowest"){
      if(subject === "Total"){
        this.setState((prevSate) => ({
            students : [prevSate.students.filter(x => x.Class === std).sort((x, y) => x.Total - y.Total)[0]]
        }))
      } else if(subject === "Tamil"){
        this.setState((prevSate) => ({
            students : [prevSate.students.filter(x => x.Class === std).sort((x, y) => x.Tamil - y.Tamil)[0]]
          }))
      }else if(subject === "English"){
        this.setState((prevSate) => ({
            students : [prevSate.students.filter(x => x.Class === std).sort((x, y) => x.English - y.English)[0]]
          }))
      }else if(subject === "Maths"){
        this.setState((prevSate) => ({
            students : [prevSate.students.filter(x => x.Class === std).sort((x, y) => x.Maths - y.Maths)[0]]
          }))
      }else if(subject === "Science"){
        this.setState((prevSate) => ({
            students : [prevSate.students.filter(x => x.Class === std).sort((x, y) => x.Science - y.Science)[0]]
          }))
      }else if(subject === "Social"){
        this.setState((prevSate) => ({
            students : [prevSate.students.filter(x => x.Class === std).sort((x, y) => x.Social - y.Social)[0]]
          }))
      }
    } else if(value === "Highest"){
      if(subject === "Total"){
        this.setState((prevSate) => ({
            students : [prevSate.students.filter(x => x.Class === std).sort((x, y) => y.Total - x.Total)[0]]
        }))
      } else if(subject === "Tamil"){
        this.setState((prevSate) => ({
            students : [prevSate.students.filter(x => x.Class === std).sort((x, y) => y.Tamil - x.Tamil)[0]]
          }))
      }else if(subject === "English"){
        this.setState((prevSate) => ({
            students : [prevSate.students.filter(x => x.Class === std).sort((x, y) => y.English - x.English)[0]]
          }))
      }else if(subject === "Maths"){
        this.setState((prevSate) => ({
            students : [prevSate.students.filter(x => x.Class === std).sort((x, y) => y.Maths - x.Maths)[0]]
          }))
      }else if(subject === "Science"){
        this.setState((prevSate) => ({
            students : [prevSate.students.filter(x => x.Class === std).sort((x, y) => y.Science - x.Science)[0]]
          }))
      }else if(subject === "Social"){
        this.setState((prevSate) => ({
            students : [prevSate.students.filter(x => x.Class === std).sort((x, y) => y.Social - x.Social)[0]]
          }))
      }
    }
  }

  filterState2 = (value, subject, std) => {
    this.setState({students : [...defaultState.students]})
    if(value === "Pass"){
      if(subject === "Tamil"){
        this.setState((prevSate) => ({
            students : prevSate.students.filter(x => x.Class === std).filter(x => x.Tamil >= 35)
        }))
      } else if(subject === "English"){
        this.setState((prevSate) => ({
            students : prevSate.students.filter(x => x.Class === std).filter(x => x.English >= 35)
        }))

      } else if(subject === "Maths"){
        this.setState((prevSate) => ({
            students : prevSate.students.filter(x => x.Class === std).filter(x => x.Maths >= 35)
        }))

      } else if(subject === "Science"){
        this.setState((prevSate) => ({
            students : prevSate.students.filter(x => x.Class === std).filter(x => x.Science >= 35)
        }))

      } else if(subject === "Social"){
        this.setState((prevSate) => ({
            students : prevSate.students.filter(x => x.Class === std).filter(x => x.Social >= 35)
        }))

      }
    }else if(value === "Fail")
      if(subject === "Tamil"){
        this.setState((prevSate) => ({
            students : prevSate.students.filter(x => x.Class === std).filter(x => x.Tamil < 35)
        }))
      } else if(subject === "English"){
        this.setState((prevSate) => ({
            students : prevSate.students.filter(x => x.Class === std).filter(x => x.English < 35)
        }))

      } else if(subject === "Maths"){
        this.setState((prevSate) => ({
            students : prevSate.students.filter(x => x.Class === std).filter(x => x.Maths < 35)
        }))

      } else if(subject === "Science"){
        this.setState((prevSate) => ({
            students : prevSate.students.filter(x => x.Class === std).filter(x => x.Science < 35)
        }))

      } else if(subject === "Social"){
        this.setState((prevSate) => ({
            students : prevSate.students.filter(x => x.Class === std).filter(x => x.Social < 35)
        }))

      }
  }

  render() {
    return (
      <div>
        <Route exact path = "/" render = {() => (
          <Home title = {this.state.title}/>
        )} />

        <Route path = "/marksHome" render = {() => (
          <MarksHome />
        )} />

        <Route path = "/inputMarks" render = {({history}) => (
          <InputMarks onSubmitMarks = {(input) => {this.UpdateMarks(input)
          history.push("/")}}/>
        )} />

        <Route path = "/firstStandard" render = {({history}) => (
          <div>
            <Headers header = {this.state.headers}/>
            <MarksList marksListData = {this.state.students.filter(x => x.Class === "first")}/>
            <Filter1 filterDetails = {(category, sub, standard) => this.filterState1(category, sub, standard)}  std = "first"/>
            <Filter2 filterDetails = {(category, sub, standard) => this.filterState2(category, sub, standard)} std =  "first"/>
            <ClearFilter clearFilter={() => (this.clearFilters())}/>
          </div>
        )} />

        <Route path = "/secondStandard" render = {() => (
          <div>
            <Headers header = {this.state.headers}/>
            <MarksList marksListData = {this.state.students.filter(x => x.Class === "second")}/>
            <Filter1 filterDetails = {(category, sub, standard) => this.filterState1(category, sub, standard)}  std = "second"/>
            <Filter2 filterDetails = {(category, sub, standard) => this.filterState2(category, sub, standard)} std =  "second"/>
            <ClearFilter clearFilter={() => (this.clearFilters())}/>
          </div>
        )} />

        <Route path = "/thirdStandard" render = {() => (
          <div>
            <Headers header = {this.state.headers}/>
            <MarksList marksListData = {this.state.students.filter(x => x.Class === "third")}/>
            <Filter1 filterDetails = {(category, sub, standard) => this.filterState1(category, sub, standard)}  std = "third"/>
            <Filter2 filterDetails = {(category, sub, standard) => this.filterState2(category, sub, standard)} std =  "third"/>
            <ClearFilter clearFilter={() => (this.clearFilters())}/>
          </div>
        )} />

        <Route path = "/fourthStandard" render = {() => (
          <div>
            <Headers header = {this.state.headers}/>
            <MarksList marksListData = {this.state.students.filter(x => x.Class === "fourth")}/>
            <Filter1 filterDetails = {(category, sub, standard) => this.filterState1(category, sub, standard)}  std = "fourth"/>
            <Filter2 filterDetails = {(category, sub, standard) => this.filterState2(category, sub, standard)} std =  "fourth"/>
            <ClearFilter clearFilter={() => (this.clearFilters())}/>
          </div>
        )} />

        <Route path = "/fifthStandard" render = {() => (
          <div>
            <Headers header = {this.state.headers}/>
            <MarksList marksListData = {this.state.students.filter(x => x.Class === "fifth")}/>
            <Filter1 filterDetails = {(category, sub, standard) => this.filterState1(category, sub, standard)}  std = "fifth"/>
            <Filter2 filterDetails = {(category, sub, standard) => this.filterState2(category, sub, standard)} std =  "fifth"/>
            <ClearFilter clearFilter={() => (this.clearFilters())}/>
          </div>
        )} />

        
      </div>
    );
  }
}

export default App;
