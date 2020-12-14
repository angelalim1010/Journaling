import React, { Component, Fragment } from 'react';
import { Container, ListGroup, Table } from 'react-bootstrap';
import Navigation from '../Navigation';
import { getAllJournals} from "../../../actions/journalPrompts";
import isAuthenticatedUser from '../../../utils/isAuthenticated'

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
        if (!isAuthenticatedUser()){
            this.props.history.push('/');
            return;
        }
        else{
            getAllJournals()
            .then(res=>{
                const data = res?.data;
                this.setState({journals: data || []})
                console.log(res.data)
            })
        }

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
      return(
        <Fragment>
          <Navigation />
            <Container className="wrapper">
              <h1>My Journal</h1>
                {this.state.journals.length !== 0 ?
                    <Table striped bordered>
                        <thead>
                            <tr>
                                <th>Date Created</th>
                                <th>Category</th>
                                <th>Prompt</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.journals.filter(journalObj => journalObj.journal != null).map(journal =>
                            <tr>
                                <td>{this.formatDate(journal.journal.createdAt)}</td>
                                <td>{journal.journal.prompt.category.name}</td>
                                <td>{journal.journal.prompt.content}</td>
                            </tr>
                          
                        )}
                        </tbody>
                    </Table>
                :
                <p>You have no Prompts</p>
                }
            </Container>
        </Fragment>
        )
    }
}

export default AllPrompts;