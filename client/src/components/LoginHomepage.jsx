import React, { Component } from 'react';
import Calendar from 'react-calendar';
import {Navbar, Card} from 'react-bootstrap';
import ZenyuLogo from '../img/zenyu-logo.svg';
import { getPrompts } from "../actions/promptActions";

import './LoginHomepage.css';
import 'react-calendar/dist/Calendar.css';
class LoginHomepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        date: new Date(),
        prompts: []
    }
    this.onChange = this.onChange.bind(this);
  }
  fetchPrompts(){
    getPrompts().then(res=>{
        this.setState({prompts:res.data})
    });
}

  componentDidMount(){
    this.fetchPrompts()
    console.log(this.state.prompts)
    
}

  onChange = date =>{
      this.setState({
          date: date
      })
  }


  render() {
    return (
      <div>
          <Navbar className="underline">
                <Navbar.Brand href="/">
                    <img src={ZenyuLogo} 
                        width="100" 
                        height="30" 
                        // className="d-inline-block align-top" 
                        alt="Zenyu Logo">
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

export default LoginHomepage;
