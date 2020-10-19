import React, { Component } from 'react';
import { getJournal } from "../actions/journalPrompts";


class JournalEntry extends Component{
    constructor(props){
        super(props);
        this.state={
            journal: {
                content: "today i did",
                mood: "Calm",
            }
        }
    }

    // fetchJournal(){
    //     getJournal().then(res=>{
    //         this.setState({journal:res.data || []})
    //     });
    // }
    
    //   componentDidMount(){
        // this.fetchJournal()
        // console.log(this.state.journal)
        
    // }

    displayMood(){
        const happy = "https://assets.stickpng.com/images/587389d8f3a71010b5e8ef4b.png"
        const sad = "https://www.pinclipart.com/picdir/big/85-859532_face-sadness-smiley-computer-icons-clip-art-sad.png"
        const nervous = "https://cdn3.iconfinder.com/data/icons/emoticon-back-white/16/emotion_b_w_Worried-512.png"
        const calm = "https://icon-library.com/images/72adc4879e.svg.svg"
        if (this.state.journal.mood === "Happy"){
            return(
                <div>
                    <img src={happy}
                        alt = "happy"
                        className = "daily-mood"
                    />
                </div>
            )
        }
        if (this.state.journal.mood === "Sad"){
            return(
                <div>
                    <img src={sad}
                        alt = "sad"
                        className = "daily-mood"
                    />
                </div>
            )
        }
        if (this.state.journal.mood === "Nervous"){
            return(
                <div>
                    <img src={nervous}
                        alt = "nervous"
                        className = "daily-mood"
                    />
                </div>
            )
        }
        if (this.state.journal.mood === "Calm"){
            return(
                <div>
                    <img src={calm}
                        alt = "calm"
                        className = "daily-mood"
                    />
                </div>
            )
        }
    }

    render(){
        return(
            <div>
                <h1>Mood: {this.displayMood()}</h1>
                <p>{this.state.journal.content}</p>
            </div>
        )
    }
}

export default JournalEntry;