import React, { Component } from 'react';
import Calendar from 'react-calendar';
import {Navbar, Card} from 'react-bootstrap';
import ZenyuLogo from '../img/zenyu-logo.svg';

import './LoginHomepage.css';
import 'react-calendar/dist/Calendar.css';
class LoginHomepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        date: new Date(),
        prompts: [
            {
                prompt: "Write 3 things you're grateful for"
            },
            {
                prompt: "Write about your day"
            },
            {
                prompt: "What are you anxious for"
            },
            {
                prompt: "Who are you grateful for"
            }
        ]
    }
    this.onChange = this.onChange.bind(this);
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
                        width="30" 
                        height="30" 
                        className="d-inline-block align-top" 
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
                    <Card style={{width: '18rem'}}>
                    <Card.Header>Today's Prompt</Card.Header>

                    <Card.Body>
                        <Card.Text>{prompt.prompt}</Card.Text>
                        <Card.Link href="/">Select This Prompt</Card.Link>
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
