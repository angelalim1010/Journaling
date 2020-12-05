import React, { Component, Fragment } from 'react';
import { Container } from 'react-bootstrap';
import Navigation from '../Navigation';
import { getAllJournals} from "../../../actions/journalPrompts";

import '../../style/style.css';
import '../../style/Journal.css';

class AllPrompts extends Component{
    constructor(props){
        super(props);
        this.state={
            journals: []
        }
    }
    componentDidMount = async () =>{
        getAllJournals()
        .then(res=>{
            const data = res?.data;
            this.setState({journals: data || []})
            console.log(res.data)
        })
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
  render(){
    // console.log(this.state.journals.length)
      return(
        <Fragment>
          <Navigation />
            <Container className="wrapper">
              <h1>My Journal</h1>
                {this.state.journals.length !== 0 ?

                <ul>
                {this.state.journals.map(journal =>
                    <li key={journal.journal.prompt.id}>{journal.journal.prompt.content}
                        <ul>
                            <li key={journal.journal.id}>Created on: {this.formatDate(journal.journal.createdAt)}</li>
                        </ul>
                    </li>
                    )}
                </ul>
                :
                <p>You have no Prompts</p>
                }
            </Container>
        </Fragment>
        )
    }
}

export default AllPrompts;