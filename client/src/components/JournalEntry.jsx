import React, { Component } from 'react';
import {Button, Modal} from 'react-bootstrap';
import { deleteJournal, deleteMood } from "../actions/journalPrompts";


class JournalEntry extends Component{
    constructor(props){
        super(props);
        this.state={
            journal: {},
            mood: {},
            show: false,
            setShow: false
        }
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.deleteEntry = this.deleteEntry.bind(this);

    }

    handleClose = () =>{
        this.setState({
            show: false,
            setShow: false
        })
    }
    handleShow = () =>{
        this.setState({
            show: true,
            setShow: true
        })
    }
    deleteEntry = (journalId, moodId) =>{
        Promise.all([deleteJournal(journalId), deleteMood(moodId)])
        .then(
            this.setState({
                    show: false,
                    setShow: false
                })
        )
        console.log(journalId)
        console.log(moodId)
        // deleteJournal(journalId)
        // .then(res=>{
        //     console.log(res);
        //     console.log(res.data);
        // })
        // deleteMood(moodId)
        // .then(res=>{
        //     console.log(res);
        //     console.log(res.data);
        // })
        // 
        // this.forceUpdate();
    }
    displayMood(){
        const happy = "https://assets.stickpng.com/images/587389d8f3a71010b5e8ef4b.png"
        const sad = "https://www.pinclipart.com/picdir/big/85-859532_face-sadness-smiley-computer-icons-clip-art-sad.png"
        const nervous = "https://cdn3.iconfinder.com/data/icons/emoticon-back-white/16/emotion_b_w_Worried-512.png"
        const calm = "https://icon-library.com/images/72adc4879e.svg.svg"
        if (this.props.mood.mood.name === "Happy"){
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
        if (this.props.mood.mood.name === "Sad"){
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
        if (this.props.mood.mood.name === "Nervous"){
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
        if (this.props.mood.mood.name === "Calm"){
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
                        <h1>{this.props.mood.mood.name}</h1>
                        {this.displayMood()}
                    </div>
                    
                </div>
                <div className = "journal-area">
                    <div>
                        {/* <img/> */}
                        <p className="journal-text">{this.props.journal.content}</p>
                    </div>

                    <div className = "journal-buttons">
                        <Button>Edit Journal</Button>
                        <Button onClick={this.handleShow}>Delete Journal</Button>
                        <Modal show={this.state.show} onHide={this.handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>
                                    Are you sure you want to delete?
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Footer>
                                    <Button onClick={this.handleClose}>
                                        Close
                                    </Button>
                                    <Button onClick={this.deleteEntry(this.props.journal.id, this.props.mood.id)}>
                                        Confirm
                                    </Button>
                                </Modal.Footer>
                        </Modal>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default JournalEntry;