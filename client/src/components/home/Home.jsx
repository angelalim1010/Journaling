import React, { Component, Fragment } from 'react';
import Calendar from 'react-calendar';
import { Container, Row, Col, Card, CardDeck, Button, Modal, Form } from 'react-bootstrap';

import { getPrompts} from "../../actions/promptActions";
import { getJournal, updateJournal, updateMood, deleteJournal, deleteMood } from "../../actions/journalPrompts";
import {updateImage, deleteImage} from '../../actions/imageActions';
import { Link } from 'react-router-dom';

import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import AuthContext from '../../context/auth/authContext';

import Navigation from './Navigation';
import '../style/Home.css';
import '../style/style.css';
import 'react-calendar/dist/Calendar.css';


const moodIds={
    sad: "148f355c-f251-49ec-9f9d-48b8c815bfbd",
    nervous: "687b7a61-ac4a-4a64-a5b6-a2aed74596e1",
    happy: "879632eb-6b57-49bf-a243-c315bc6db398",
    calm: "9c2f2373-9d69-4abd-a5ed-b419695c4376"
}

class Home extends Component {
  static contextType = AuthContext
  constructor(props) {
    super(props);
    this.state = {
        date: new Date(),
        prompts: [],
        journal: {},
        mood: {},
        content: "",
        value: "",
        image: {},
        base64TextString: ""

    }
    this.onChange = this.onChange.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.deleteEntry = this.deleteEntry.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.refreshPage = this.refreshPage.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);


  }

  handleLogout = () => {
    const { logout } = this.context
    logout();
    this.props.history.push('/')
  }

  componentDidMount = async () =>{
      let formattedDate = this.formatDate(this.state.date)
      console.log(formattedDate)
    Promise.all([getJournal(formattedDate), getPrompts()])
        .then(([res1,res2])=>{
            this.setState({
                journal: (res1?.data.slice(-1).pop()?.journal || {}),
                mood: res1?.data.slice(-1).pop()?.mood || {mood: {name:"No Mood Selected"}},
                prompts:res2.data,
                content: res1?.data.slice(-1).pop()?.journal?.content || "",
                image: res1?.data.slice(-1).pop()?.image || {}
        })
    })
    console.log("date",this.state.date)
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

  onChange = async(date) =>{
        this.setState({
          date: date
      })
      let newDate = this.formatDate(date)
      getJournal(newDate)
      console.log(newDate)
  }
  onChangeHandler = e =>{
    console.log(e.target.files[0])
    // this.setState({
    // 	selectedFile: e.target.files[0],
    // 	loaded: 0
    // })
    let file = e.target.files[0]
    if (file){
        const reader = new FileReader();
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsBinaryString(file)
    }

}
_handleReaderLoaded = (readerEvt) =>{
    let binaryString = readerEvt.target.result
    this.setState({
        base64TextString: btoa(binaryString)
    })
    console.log("data:image/png;base64,"+this.state.base64TextString)
}
  componentDidUpdate(prevProps, prevState){
      if (prevState.date !== this.state.date){
        let formattedDate = this.formatDate(this.state.date)
        console.log(formattedDate)
      Promise.all([getJournal(formattedDate), getPrompts()])
          .then(([res1,res2])=>{
              this.setState({
                  journal: (res1?.data.slice(-1).pop()?.journal || {}),
                  mood: res1?.data.slice(-1).pop()?.mood || {},
                  prompts:res2.data,
                  content: res1?.data.slice(-1).pop()?.journal.content || "",
                  image: res1?.data.slice(-1).pop()?.image || {}


          })
      })
      }
  }

  handleClose = async () =>{
    this.setState({
        show: false,
        setShow: false
    })
}
handleShow = async () =>{
    this.setState({
        show: true,
        setShow: true
    })
}


handleSelect = async(e) =>{
    e.preventDefault();
    this.setState({
        value: e.target.value
    })
}

handleClick = async(e)=>{
    e.preventDefault();
    console.log("clicked")
}

refreshPage(){
    window.location.reload();
}


deleteEntry = async(journalId, moodId, imageId) =>{
    deleteMood(moodId);
    deleteJournal(journalId);
    deleteImage(imageId)

    this.setState({
        journal: {},
        mood: {},
        image:{}
    })
}
displayMood(){
    const happy = "https://assets.stickpng.com/images/587389d8f3a71010b5e8ef4b.png"
    const sad = "https://www.pinclipart.com/picdir/big/85-859532_face-sadness-smiley-computer-icons-clip-art-sad.png"
    const nervous = "https://cdn3.iconfinder.com/data/icons/emoticon-back-white/16/emotion_b_w_Worried-512.png"
    const calm = "https://icon-library.com/images/72adc4879e.svg.svg"
    if (this.state.mood.mood.name === "Happy"){
        return(
            <div>
                <img src={happy}
                    alt = "happy"
                    className = "daily-mood"
                />
                <p className = "mood-p-font" style= {{fontSize: '25px', fontFamily: "Georgia, serif", textAlign: "center"}}>Happy</p>
            </div>
        )
    }
    if (this.state.mood.mood.name === "Sad"){
        return(
            <div>
                <img src={sad}
                    alt = "sad"
                    className = "daily-mood"
                />
                <p className = "mood-p-font" style={{fontSize: '25px', fontFamily: "Georgia, serif", textAlign: "center"}}>Sad</p>

            </div>
        )
    }
    if (this.state.mood.mood.name === "Nervous"){
        return(
            <div>
                <img src={nervous}
                    alt = "nervous"
                    className = "daily-mood"
                />
                <p className = "mood-p-font" style ={{fontSize: '25px', fontFamily: "Georgia, serif", textAlign: "center"}}>Nervous</p>
            </div>
        )
    }
    if (this.state.mood.mood.name === "Calm"){
        return(
            <div>
                <img src={calm}
                    alt = "calm"
                    className = "daily-mood"
                />
                <p className = "mood-p-font" style={{fontSize: '25px', fontFamily: "Georgia, serif", textAlign: "center"}}>Calm</p>
            </div>
        )
    }

    else{
        return(
            <div>
                <h1 className = "no-mood-msg" style={{fontSize: '25px', fontFamily: "Georgia, serif", textAlign: "center"}}>No Mood Selected</h1>
            </div>
        )
        
    }
}

  render() {
    let today = new Date();

    console.log(this.state.date)
    let todayDate = new Date().toDateString();
    console.log(this.state.prompts)
    console.log(this.state.image)
    
    if (Object.keys(this.state.journal).length === 0 && this.state.journal.constructor === Object && todayDate !== this.state.date.toDateString()){
      return(
        <Fragment>
          <Navigation />
          <Container className="section">
            <Row className="justify-content-center">
              <Col className="text-center" s={6}>
                <h5><strong>You cannot post an entry for this day.</strong></h5>
                <p>Select today or a day in which you wrote an entry.</p>
              </Col>
              
            </Row>
            <Row className="justify-content-center">
            <Calendar
              onChange={this.onChange}
              value={this.state.date}
            />
            </Row>
          </Container>

        </Fragment>
        )

    }
    return (
      <Fragment>  
        <Navigation />
            <div className = "homepage-layout">
                {Object.keys(this.state.journal).length !== 0 && this.state.journal.constructor === Object ?
                    <div className = "journal-entry">
                        <div className= "pprompt">
                            <p style={{fontSize: '20px', fontFamily: "Georgia, serif", textAlign: "center"}}>The prompt you chose was: {this.state.journal.prompt.content}</p>
                        </div>
                        <div className = "mood-div">
                            <h1 style= {{fontSize: '40px', fontFamily: " Georgia, serif", textAlign: "center"}}>Mood: </h1>
                            <div>
                                {/* <h1>{this.state.mood?.mood?.name}</h1> */}
                                {this.displayMood()}
                            </div>
                            {this.state.mood.mood.name !== "No Mood Selected" && 
                            <Form onSubmit={(e)=>{e.preventDefault();updateMood(this.state.mood.id, this.state.value);this.refreshPage()}}>
                                    {/* <Form.Label>Select to change your mood</Form.Label> */}
                                    <Form.Control as="select" defaultValue="" onChange={this.handleSelect}>
                                        <option value="" disabled>Select a Mood</option>
                                        <option value={moodIds.happy}>Happy</option>
                                        <option value={moodIds.calm}>Calm</option>
                                        <option value={moodIds.sad}>Sad</option>
                                        <option value={moodIds.nervous}>Nervous</option>

                                    </Form.Control>
                                <Button type="submit" className= "btn btn-mood">Update Mood</Button>
                            </Form>}
                        </div>
                        {Object.keys(this.state.image).length === 0 && this.state.image.constructor === Object ?    
                            <div>
                                <p>Add Image</p>
                                <Form onSubmit={(e)=>{e.preventDefault(); updateImage(this.state.image.id, "data:image/png;base64,"+this.state.base64TextString)}}>
                                    <input type="file" name="image" onChange={this.onChangeHandler}/>
                                    <Button type="submit">Submit New Image</Button>
                                </Form>
                            </div>

                        :
                        <div>
                            

                            
                            <img src={this.state.image.content} alt="journal-img" style= {{ paddingLeft: '150px'}}/>
                           {/* <p>Edit Image</p> */}
                            <Form onSubmit={(e)=>{e.preventDefault(); updateImage(this.state.image.id, "data:image/png;base64,"+this.state.base64TextString)}}>
                                <input type="file" className="chimage" onChange={this.onChangeHandler}/>
                                <Button type="submit">Submit New Image</Button>
                            </Form>
                        </div>
                        }
                        <div className = "journal-area">
                            <div>
                                {/* <img/> */}
                                <CKEditor
                                    editor={ClassicEditor}
                                    // data = {`<figure class="image"><img src=${this.state.image.content} alt="journal-img"/></figure>` + this.state.content}
                                    // data = {journalData}
                                    data = {this.state.content}
                                    onChange={ ( event, editor ) => {
                                        const data = editor.getData();
                                        this.setState({
                                            content: data
                                            // content: data
                                        })    
                                        console.log( { event, editor, data } );
                                        console.log("content", this.state.content)
                                    } 
                                
                                }
                                
                                />
                            </div>
    
                        <div className = "journal-buttons">
                            <Button onClick={()=>{updateJournal(this.state.journal.id, this.state.content)}}>Save Edited Journal</Button>
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
                                        <Button 
                                            onClick={()=>{this.deleteEntry(this.state.journal.id, this.state.mood.id, this.state.image.id); this.handleClose();}}>
                                            Confirm
                                        </Button>
                                    </Modal.Footer>
                            </Modal>
                        </div>
                    </div>
                    
                </div>
                :
                <Fragment>
                  <Container className="section">
                      <Row className="justify-content-center">
                        <Col className="text-center">
                          <h1>Welcome back.</h1>
                          <br/>
                          <h3>Today is <em>{today.toLocaleDateString('en-us', { weekday: 'long' }) }</em>.</h3>
                          <br/>
                        <Container className="section">
                        <Calendar
                             onChange={this.onChange}
                            value={this.state.date}
                         />
                        </Container>
                          <h5>Select a prompt below or click post:</h5>
                          <br />
                          <Button className='btn-custom'>
                            <Link to={{pathname: "/edit", aboutProps:{prompt: prompt} }}>Post</Link>
                          </Button>
                        </Col>
                      </Row>

                      <CardDeck>
                        {this.state.prompts.map((prompt,index)=>(
                          <Card key={index} className="prompt">
                            <Card.Header as="h5">{prompt.category.name}</Card.Header>
                              <Card.Body>
                                <Card.Text>{prompt.content}...</Card.Text>
                            </Card.Body>
                            <Card.Footer>
                              <Button className='btn-custom'>
                                <Link to={{pathname: "/edit", aboutProps:{prompt: prompt} }}>Select</Link>
                              </Button>
                            </Card.Footer>
                          </Card>
                        ))}  
                      </CardDeck>
                  </Container>
                </Fragment>
                }          
            </div>
        
      </Fragment>
    )      
  }
}

export default Home;
