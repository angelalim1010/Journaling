import React, { Component } from 'react';
import { getJournal } from "../actions/journalPrompts";


class JournalEntry extends Component{
    constructor(props){
        super(props);
        this.state={
            journal: []
        }
    }

    fetchJournal(){
        getJournal().then(res=>{
            this.setState({journal:res.data || []})
        });
    }
    
      componentDidMount(){
        this.fetchJournal()
        console.log(this.state.journal)
        
    }

    render(){
        return(
            <div>
                <h1>Mood: </h1>
                <p>Text</p>
            </div>
        )
    }
}

export default JournalEntry;