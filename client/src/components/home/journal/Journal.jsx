import React, { Component, Fragment } from 'react';
import { Container, ListGroup, Table } from 'react-bootstrap';
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
                    <Table>
                        <thead>
                            <tr>
                                <th>Date Created</th>
                                <th>Prompt</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.journals.map(journal =>
                            <tr>
                                <td>{this.formatDate(journal.journal.createdAt)}</td>
                                <td>{journal.journal.prompt.content}</td>
                            </tr>
                            // <ListGroup.Item key={journal.journal.prompt.id}>{journal.journal.prompt.content}
                            //     <ListGroup>
                            //         <ListGroup.Item key={journal.journal.id}>Created on: {this.formatDate(journal.journal.createdAt)}</ListGroup.Item>
                            //     </ListGroup>
                            // </ListGroup.Item>
                        )}
                        </tbody>
                    </Table>

                // <ul>
                // <ListGroup>
                //     {this.state.journals.map(journal =>
                //         <ListGroup.Item key={journal.journal.prompt.id}>{journal.journal.prompt.content}
                //             <ListGroup>
                //                 <ListGroup.Item key={journal.journal.id}>Created on: {this.formatDate(journal.journal.createdAt)}</ListGroup.Item>
                //             </ListGroup>
                //         </ListGroup.Item>
                //     )}
                // </ListGroup>
                
                // </ul>
                :
                <p>You have no Prompts</p>
                }
            </Container>
        </Fragment>
        )
    }
}

export default AllPrompts;