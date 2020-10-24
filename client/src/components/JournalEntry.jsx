import React, { Component } from 'react';
import { getJournal, getMood } from "../actions/journalPrompts";


class JournalEntry extends Component{
    constructor(props){
        super(props);
        this.state={
            journal: {},
            mood: {}
        }
    }

    // fetchJournal(){
    //     getJournal().then(res=>{
    //         this.setState({
    //             journal: res.data || {}
    //         })
    //         console.log(res.data)

    //     });
        
    // }

    // fetchMood(){
    //     getMood().then(res=>{
    //         this.setState({
    //             mood: res.data.mood || {}
    //         })
        
    //         console.log("mood",res.data.mood)
    //     });
    // }
    
    //   componentDidMount(){
    //     this.fetchJournal()
    //     this.fetchMood()
    //     console.log(this.state.journal, this.state.mood)
        
    // }

    displayMood(){
        const happy = "https://assets.stickpng.com/images/587389d8f3a71010b5e8ef4b.png"
        const sad = "https://www.pinclipart.com/picdir/big/85-859532_face-sadness-smiley-computer-icons-clip-art-sad.png"
        const nervous = "https://cdn3.iconfinder.com/data/icons/emoticon-back-white/16/emotion_b_w_Worried-512.png"
        const calm = "https://icon-library.com/images/72adc4879e.svg.svg"
        if (this.props.mood.name === "Happy"){
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
        if (this.props.mood.name === "Sad"){
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
        if (this.props.mood.name === "Nervous"){
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
        if (this.props.mood.name === "Calm"){
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

    render(){
        return(
            <div className = "journal-entry">
                <div className = "mood-div">
                    <h1>Mood: </h1>
                    <div>
                        <h1>{this.props.journal.mood}</h1>
                        {this.displayMood()}
                    </div>
                    
                </div>
                <div className = "journal-area">
                    <div>
                        {/* <img/> */}
                        <p className="journal-text">{this.props.journal.content}</p>
                    </div>

                    <div className = "journal-buttons">
                        <button>Edit Journal</button>
                        <button>Delete Journal</button>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default JournalEntry;