import React, { Component } from 'react';
import Calendar from 'react-calendar';
import { Card, Button, Modal, Form } from 'react-bootstrap';

import Navigation from './home/Navigation';
import Footer from './Footer';

import { getPrompts } from "../actions/promptActions";
import { getJournal, updateJournal, updateMood, deleteJournal, deleteMood } from "../actions/journalPrompts";
import { Link } from 'react-router-dom';

import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import AuthContext from '../context/auth/authContext';

import './LoginHomepage.css';
import 'react-calendar/dist/Calendar.css';

const moodIds={
    sad: "148f355c-f251-49ec-9f9d-48b8c815bfbd",
    nervous: "687b7a61-ac4a-4a64-a5b6-a2aed74596e1",
    happy: "879632eb-6b57-49bf-a243-c315bc6db398",
    calm: "9c2f2373-9d69-4abd-a5ed-b419695c4376"
}

class Home extends Component {
  static contextType = AuthContext
  constructor(props) {
    super(props);
    this.state = {
        date: new Date(),
        prompts: [],
        journal: {},
        mood: {},
        content: "",
        value: "",
        username: "Bob"
    }
    this.onChange = this.onChange.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.deleteEntry = this.deleteEntry.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.refreshPage = this.refreshPage.bind(this);
    this.handleClick = this.handleClick.bind(this);

  }

  handleLogout = () => {
    const { logout } = this.context
    logout();
    this.props.history.push('/')
  }

  componentDidMount = async () =>{
      let formattedDate = this.formatDate(this.state.date)
      console.log(formattedDate)
    Promise.all([getJournal(formattedDate), getPrompts()])
        .then(([res1,res2])=>{
            this.setState({
                journal: (res1?.data.slice(-1).pop()?.journal || {}),
                mood: res1?.data.slice(-1).pop()?.mood || {mood: {name:"No Mood Selected"}},
                prompts:res2.data,
                content: res1?.data.slice(-1).pop()?.journal?.content || "",
        })
    })
    console.log("date",this.state.date)
}

 formatDate(date) {
    let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
  
}

  onChange = async(date) =>{
        this.setState({
          date: date
      })
      let newDate = this.formatDate(date)
      getJournal(newDate)
      console.log(newDate)
  }
  componentDidUpdate(prevProps, prevState){
      if (prevState.date !== this.state.date){
        let formattedDate = this.formatDate(this.state.date)
        console.log(formattedDate)
      Promise.all([getJournal(formattedDate), getPrompts()])
          .then(([res1,res2])=>{
              this.setState({
                  journal: (res1?.data.slice(-1).pop()?.journal || {}),
                  mood: res1?.data.slice(-1).pop()?.mood || {},
                  prompts:res2.data,
                  content: res1?.data.slice(-1).pop()?.journal.content || ""

          })
      })
      }
  }

  handleClose = async () =>{
    this.setState({
        show: false,
        setShow: false
    })
}
handleShow = async () =>{
    this.setState({
        show: true,
        setShow: true
    })
}


handleSelect = async(e) =>{
    e.preventDefault();
    this.setState({
        value: e.target.value
    })
}

handleClick = async(e)=>{
    e.preventDefault();
    console.log("clicked")
}

refreshPage(){
    window.location.reload();
}


deleteEntry = async(journalId, moodId) =>{
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
    let todayDate = new Date().toDateString();
    //console.log(this.state.prompts)
    //console.log(this.state.value)
    if (Object.keys(this.state.journal).length === 0 && this.state.journal.constructor === Object && todayDate !== this.state.date.toDateString()){
        return(
            <div>
                <Navigation handleLogout = {this.handleLogout} />
                <div className = "homepage-layout">
                    <Calendar
                        onChange={this.onChange}
                        value={this.state.date}
                    />
                    <h1>You can't make a journal entry for this date!</h1>
                </div>
            </div>
        )
    }
    return (
        <div>
            <Navigation handleLogout = {this.handleLogout} />
            <div className = "homepage-layout">
                <Calendar
                    onChange={this.onChange}
                    value={this.state.date}
                />
                { Object.keys(this.state.journal).length !== 0 && this.state.journal.constructor === Object ?
                    <div className = "journal-entry">
                        <div className = "mood-div">
                            <h1>Mood: </h1>
                            <div>
                                {/* <h1>{this.state.mood?.mood?.name}</h1> */}
                                {this.displayMood()}
                            </div>
                            {this.state.mood.mood.name !== "No Mood Selected" && 
                            <Form onSubmit={(e)=>{e.preventDefault();updateMood(this.state.mood.id, this.state.value);this.refreshPage()}}>
                                    {/* <Form.Label>Select to change your mood</Form.Label> */}
                                    <Form.Control as="select" defaultValue="" onChange={this.handleSelect}>
                                        <option value="" disabled>Select a Mood</option>
                                        <option value={moodIds.happy}>Happy</option>
                                        <option value={moodIds.calm}>Calm</option>
                                        <option value={moodIds.sad}>Sad</option>
                                        <option value={moodIds.nervous}>Nervous</option>

                                    </Form.Control>
                                <Button type="submit">Update Mood</Button>
                            </Form>}
                        </div>
                        <div className = "journal-area">
                            <div>
                                {/* <img/> */}
                                <CKEditor
                                    editor={ClassicEditor}
                                    data = {this.state.content}
                                    onChange={ ( event, editor ) => {
                                        const data = editor.getData();
                                        this.setState({
                                            content: data
                                        })
                                        console.log( { event, editor, data } );
                                        console.log(this.state.content)
                                    } }
                                />
                            </div>
    
                        <div className = "journal-buttons">
                            <Button onClick={()=>{updateJournal(this.state.journal.id, this.state.content)}}>Save Edited Journal</Button>
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
                                        <Button 
                                            onClick={()=>{this.deleteEntry(this.state.journal.id, this.state.mood.id); this.handleClose();}}>
    
                                            Confirm
                                        </Button>
                                    </Modal.Footer>
                            </Modal>
                        </div>
                    </div>
                    
                </div>
                :
                <div>
                
                  <div className = "prompt-layout">
                      {this.state.prompts.map((prompt,index)=>(
                          <Card style={{width: '18rem', margin: '25px'}} key={index}>
                          <Card.Header>Today's Prompt</Card.Header>
      
                          <Card.Body>
                              <Card.Text>{prompt.content}</Card.Text>
                              <Link to={{pathname: "/journalentry", aboutProps:{prompt: prompt} }}>Select This Prompt</Link>
                          </Card.Body>
                      </Card>
                      ))}
                      
                  </div>
                  
                </div>
                        
                }
                    
            </div>
        <Footer />
        </div>  
    )      
  }
}

export default Home;