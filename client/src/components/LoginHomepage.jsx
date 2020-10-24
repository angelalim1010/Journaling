import React, { Component } from 'react';
import Calendar from 'react-calendar';
import {Navbar, Card} from 'react-bootstrap';
import ZenyuLogo from '../img/zenyu-logo.svg';
import { getPrompts } from "../actions/promptActions";
import { getJournal, getMood } from "../actions/journalPrompts";
import JournalEntry from "./JournalEntry"
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
  }
  fetchPrompts(){
    getPrompts().then(res=>{
        this.setState({prompts:res.data})
    });
}
fetchJournal(){
    getJournal().then(res=>{
        this.setState({
            journal: (res?.data || {})
        })
        // console.log(res.data)

    });
    
}


fetchMood(){
    getMood().then(res=>{
        this.setState({
            mood: res?.data?.mood || {}
        })
    
        // console.log("mood",res.data.mood)
    });
}

  componentDidMount(){
    this.fetchPrompts()
    this.fetchJournal()
    this.fetchMood()
    console.log(this.state.journal)
    
}

  onChange = date =>{
      this.setState({
          date: date
      })
      console.log(this.state.date)
  }


  render() {
      if(this.state.journal.length !== undefined){
          return (
              <JournalEntry
                journal={this.state.journal}
                mood={this.state.mood}
              />
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
                          <Card style={{width: '18rem', margin: '25px'}}>
                          <Card.Header>Today's Prompt</Card.Header>
      
                          <Card.Body>
                              <Card.Text>{prompt.content}</Card.Text>
                              <Card.Link href="#">Select This Prompt</Card.Link>
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
