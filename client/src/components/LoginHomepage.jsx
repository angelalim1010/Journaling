import React, { Component } from 'react';
import Calendar from 'react-calendar';
import {Navbar, Card, Button, Modal} from 'react-bootstrap';
import ZenyuLogo from '../img/zenyu-logo.svg';
import { getPrompts} from "../actions/promptActions";

import { getJournal, getMood, deleteJournal, deleteMood   } from "../actions/journalPrompts";
import moment from 'moment';
import './LoginHomepage.css';
import 'react-calendar/dist/Calendar.css';
class LoginHomepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        date: new Date(),
        prompts: [],
        journal: {},
        mood: {}
    }
    this.onChange = this.onChange.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.deleteEntry = this.deleteEntry.bind(this);
  }

  componentDidMount = async () =>{
    Promise.all([getJournal(), getMood(), getPrompts()])
        .then(([res1,res2,res3])=>{
            this.setState({
                journal: (res1?.data.slice(-1).pop() || {}),
                mood: res2?.data || {},
                prompts:res3.data,
                // date: moment.form
        })
    })
}

//  formatDate(date) {
//     let d = new Date(date),
//         month = '' + (d.getMonth() + 1),
//         day = '' + d.getDate(),
//         year = d.getFullYear();

//     if (month.length < 2) 
//         month = '0' + month;
//     if (day.length < 2) 
//         day = '0' + day;

//     return [year, month, day].join('-');
// }

  onChange = date =>{
    //   date = date.toISOString().slice(0,10)
    // date = moment(date).month(1).format("YYYY-MM-DD")
    date = this.formatDate(date)
      this.setState({
          date: date
      })
      console.log(this.state.date)
  }

  handleClose = () =>{
    this.setState({
        show: false,
        setShow: false
    })
}
handleShow = () =>{
    this.setState({
        show: true,
        setShow: true
    })
}
deleteEntry = (journalId, moodId) =>{
    deleteMood(moodId);
    deleteJournal(journalId);
    this.setState({
        journal: {},
        mood: {}
    })
}
displayMood(){
    const happy = "https://assets.stickpng.com/images/587389d8f3a71010b5e8ef4b.png"
    const sad = "https://www.pinclipart.com/picdir/big/85-859532_face-sadness-smiley-computer-icons-clip-art-sad.png"
    const nervous = "https://cdn3.iconfinder.com/data/icons/emoticon-back-white/16/emotion_b_w_Worried-512.png"
    const calm = "https://icon-library.com/images/72adc4879e.svg.svg"
    if (this.state.mood.mood.name === "Happy"){
        return(
            <div>
                <img src={happy}
                    alt = "happy"
                    className = "daily-mood"
                />
                <p className = "mood-p-font">Happy</p>
            </div>
        )
    }
    if (this.state.mood.mood.name === "Sad"){
        return(
            <div>
                <img src={sad}
                    alt = "sad"
                    className = "daily-mood"
                />
                <p className = "mood-p-font">Sad</p>

            </div>
        )
    }
    if (this.state.mood.mood.name === "Nervous"){
        return(
            <div>
                <img src={nervous}
                    alt = "nervous"
                    className = "daily-mood"
                />
                <p className = "mood-p-font">Nervous</p>
            </div>
        )
    }
    if (this.state.mood.mood.name === "Calm"){
        return(
            <div>
                <img src={calm}
                    alt = "calm"
                    className = "daily-mood"
                />
                <p className = "mood-p-font">Calm</p>
            </div>
        )
    }

    else{
        return(
            <div>
                <h1 className = "no-mood-msg">No Mood Selected</h1>
            </div>
        )
        
    }
}

  render() {
    console.log(this.state.prompts)
    console.log("journal",this.state.journal)
    console.log("mood",this.state.mood)
    if(Object.keys(this.state.journal).length !== 0 && this.state.journal.constructor === Object){
          return (
              <div>
                  <Navbar bg="dark" variant="dark" className="underline">
                      <Navbar.Brand href="/">
                          <img src={ZenyuLogo} 
                              width="100" 
                              height="30" 
                              // className="d-inline-block align-top" 
                              alt="Zenyu Logo"
                              style={{ filter: "brightness(0) invert(1)"}}
                              >
                              
                          </img>
                      </Navbar.Brand>
                      <Navbar.Collapse className = "justify-content-end">
                          <Navbar.Text>
                              Welcome User
                          </Navbar.Text>
                      </Navbar.Collapse>
                </Navbar>
                <div className = "homepage-layout">
                    <Calendar
                        onChange={this.onChange}
                        value={this.state.date}
                    />
                    <div className = "journal-entry">
                <div className = "mood-div">
                    <h1>Mood: </h1>
                    <div>
                        {/* <h1>{this.state.mood?.mood?.name}</h1> */}
                        {this.displayMood()}
                    </div>
                    
                </div>
                <div className = "journal-area">
                    <div>
                        {/* <img/> */}
                        <p className="journal-text">{this.state.journal.content}</p>
                    </div>

                    <div className = "journal-buttons">
                        <Button>Edit Journal</Button>
                        <Button onClick={this.handleShow}>Delete Journal</Button>
                        <Modal show={this.state.show} onHide={this.handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>
                                    Are you sure you want to delete?
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Footer>
                                    <Button onClick={this.handleClose}>
                                        Close
                                    </Button>
                                    {/* <Button onClick={()=>deleteJournal(this.state.journal.id)}> */}
                                    <Button 
                                        onClick={()=>{this.deleteEntry(this.state.journal.id, this.state.mood.id); this.handleClose();}}>

                                        Confirm
                                    </Button>
                                </Modal.Footer>
                        </Modal>
                    </div>
                </div>
                
            </div>
            </div>
            </div>
              
          )
      }
    else{
        return (
            <div>
                <Navbar bg="dark" variant="dark" className="underline">
                      <Navbar.Brand href="/">
                          <img src={ZenyuLogo} 
                              width="100" 
                              height="30" 
                              // className="d-inline-block align-top" 
                              alt="Zenyu Logo"
                              style={{ filter: "brightness(0) invert(1)"}}
                              >
                              
                          </img>
                      </Navbar.Brand>
                      <Navbar.Collapse className = "justify-content-end">
                          <Navbar.Text>
                              Welcome User
                          </Navbar.Text>
                      </Navbar.Collapse>
                </Navbar>
                <div className = "homepage-layout">
                  <Calendar
                      onChange={this.onChange}
                      value={this.state.date}
                  />
                  <div className = "prompt-layout">
                      {this.state.prompts.map((prompt,index)=>(
                          <Card style={{width: '18rem', margin: '25px'}} key={index}>
                          <Card.Header>Today's Prompt</Card.Header>
      
                          <Card.Body>
                              <Card.Text>{prompt.content}</Card.Text>
                              <Card.Link href="/post/journal">Select This Prompt</Card.Link>
                          </Card.Body>
                      </Card>
                      ))}
                      
                  </div>
                  
                </div>
                
            </div>
        
    
        );

    }
  }
}

export default LoginHomepage;
