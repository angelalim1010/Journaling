import React, { Component } from 'react';
import { getAllJournals} from "../actions/journalPrompts";

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
            const data = res.data;
            this.setState({journals: data})
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
        console.log(this.state.journals[0])
        return(
            <div>
                <h1>All Prompts Done</h1>
                <ul>
                    {this.state.journals.map(journal =>
                        <li key={journal.journal.prompt.id}>{journal.journal.prompt.content}
                            <ul>
                                <li key={journal.journal.id}>Created on: {this.formatDate(journal.journal.createdAt)}</li>
                            </ul>
                        </li>
                        )}
                </ul>
            </div>
        )
    }
}

export default AllPrompts;