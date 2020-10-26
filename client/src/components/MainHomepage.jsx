import React, { Component } from 'react';
// import ZenyuCap from '../img/zenyu-cap.jpg';
// import ZenAbout from '../img/zenabout.jpg';
// import DayEntry from '../img/day-entry.jpg';
// import PicEntry from '../img/picture-entry.jpg';
// import MonthEntry from '../img/monthly-entry.jpg';

import './MainHomepage.css';

class MainHomepage extends Component {
    render(){        
        return (
            <div className="App">
            <nav className="navbar navbar-light navbar-expand bg-light navigation-clean">
                <div className="container"><a className="navbar-brand" href="#">ZENYU</a><button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1"></button>
                    <div className="collapse navbar-collapse" id="navcol-1"><a className="text-muted ml-auto" href="#">How To Use</a><a className="text-muted ml-auto" href="#">About Us</a><a className="text-muted mx-auto" href="#" style={{textShadow: "0px 0px"}}>Features</a></div>
                </div>
            </nav>
            <header className="masthead text-white text-center" style={{"background":"url('assets/img/bg-masthead.jpg')no-repeat center center","backgroundSize":"cover"}}>
                <div className="overlay" style={{"background":"rgb(250,250,250)"}}></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-xl-9 mx-auto">
                            <h1 className="display-4 text-capitalize text-left float-left mb-5">Find Yourself.&nbsp; &nbsp; &nbsp; Journal to Express Your inner thoughts.</h1>
                        </div>
                        <div className="col-lg-6 col-xl-9 mx-auto" style={{"background":"url(../../assets/img/zenyu%20cap.jpg) center / cover"}}>
                            <h1 className="display-4 text-left float-left mb-5"></h1>
                        </div>
                    </div>
                </div>
            </header>
            <section className="features-icons bg-light text-center">
                <h1>How to Use</h1>
                <h4><em>Express Yourself</em></h4>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="mx-auto features-icons-item mb-5 mb-lg-0 mb-lg-3">
                                <div className="d-flex features-icons-icon"><i className="icon-emotsmile m-auto text-primary" data-bs-hover-animate="pulse" style={{"color": "rgb(0,0,0)"}}></i></div>
                                <h3>Mood Tracker</h3>
                                <p className="lead mb-0">Track your mood day to day. Let us help you by pinpointing your current mood.&nbsp;</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="mx-auto features-icons-item mb-5 mb-lg-0 mb-lg-3">
                                <div className="d-flex features-icons-icon"><i className="icon-book-open m-auto text-primary" data-bs-hover-animate="pulse" style={{"color": "rgb(4,4,4)"}}></i></div>
                                <h3>Journal</h3>
                                <p className="lead mb-0">Express your feelings by writing out anything and everything that is on your mind.&nbsp;</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="mx-auto features-icons-item mb-5 mb-lg-0 mb-lg-3">
                                <div className="d-flex features-icons-icon"><i className="material-icons m-auto text-primary" data-bs-hover-animate="pulse" style={{"color": "rgb(20,20,21);"}}>art_track</i></div>
                                <h3>Pictures</h3>
                                <p className="lead mb-0">Upload a picture of the day and express your feelings about the picture.</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="mx-auto features-icons-item mb-5 mb-lg-0 mb-lg-3">
                                <div className="d-flex features-icons-icon"><i className="material-icons m-auto text-primary" data-bs-hover-animate="pulse" style={{"color": "rgb(20,20,21);"}}>format_list_bulleted</i></div>
                                <h3>Prompts</h3>
                                <p className="lead mb-0">Choose a prompt if you need help choosing what you want to write&nbsp;</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="showcase">
                <div className="container-fluid p-0">
                    <div className="row no-gutters">
                        <div className="col-lg-6 order-lg-2 text-white showcase-img" style={{"background":"url(&quot;assets/img/zenabout.jpg&quot;) center / cover no-repeat"}}><span></span></div>
                        <div className="col-lg-6 my-auto order-lg-1 showcase-text">
                            <h1>About Us</h1>
                            <p className="lead mb-0" style={{"textAlign":"justify","width":"316px","height":"196px","margin":"0px"}}>We started this website in order to help those who need ways to express themselves. This journaling website gives them a way to write down their feelings and let out their emotions to themselves.&nbsp;</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="testimonials text-center bg-light">
                <div className="container">
                    <h2 className="mb-5">Features</h2>
                    <div className="row">
                        <div className="col-lg-4 offset-lg-0">
                            <div className="mx-auto testimonial-item mb-5 mb-lg-0" style={{height: '364.938px'}}>
                                <h5>Month</h5><img className="img-thumbnail img-fluid mb-3" src="assets/img/monthly%20entry.png" style={{height: '216.938px'}}/>
                                <p>Ability to see journal entries from past months. As well as click on one and edit it.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="mx-auto testimonial-item mb-5 mb-lg-0" style={{height: '364.938px'}}>
                                <h5>Day</h5><img className="img-thumbnail img-fluid mb-3" src="assets/img/day%20entry.png" style={{height: '216.938px'}}/>
                                <p>Ability to see day to day entries and modify them.&nbsp;</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="mx-auto testimonial-item mb-5 mb-lg-0" style={{height: '364.938px'}}>
                                <h5>Pictures</h5><img className="img-thumbnail img-fluid mb-3" src="../../assets/img/picture%20entry.png" style={{height: '216.938px'}}/>
                                <p>Ability to see a post that includes a picture. As well as change the picture or edit the post.&nbsp;</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="footer bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 my-auto h-100 text-center text-lg-left">
                            <ul className="list-inline mb-2">
                                <li className="list-inline-item"><a href="#" style={{color: "rgb(0,0,0)"}}>About</a></li>
                                <li className="list-inline-item"><span>⋅</span></li>
                                <li className="list-inline-item"><a href="#" style={{color: "rgb(21,22,23)"}}>Contact</a></li>
                                <li className="list-inline-item"><span>⋅</span></li>
                                <li className="list-inline-item"><a href="#" style={{color: "rgb(0,0,0)"}}>Terms of &nbsp;Use</a></li>
                                <li className="list-inline-item"><span>⋅</span></li>
                                <li className="list-inline-item"><a href="#" style={{color: "rgb(0,0,0)"}}>Privacy Policy</a></li>
                            </ul>
                            <p className="text-muted small mb-4 mb-lg-0">© Zenyu 2020. All Rights Reserved.</p>
                        </div>
                        <div className="col-lg-6 my-auto h-100 text-center text-lg-right">
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item"><a href="#"><i className="fa fa-facebook fa-2x fa-fw" style={{color: "rgb(0,0,0)"}}></i></a></li>
                                <li className="list-inline-item"><a href="#"><i className="fa fa-twitter fa-2x fa-fw" style={{color: "rgb(0,0,0)"}}></i></a></li>
                                <li className="list-inline-item"><a href="#"><i className="fa fa-instagram fa-2x fa-fw" style={{color: "rgb(0,0,0)"}}></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            <script src="assets/js/jquery.min.js"></script>
            <script src="assets/bootstrap/js/bootstrap.min.js"></script>
            <script src="assets/js/bs-init.js"></script>
            </div>
            );
        }
    }

export default MainHomepage;