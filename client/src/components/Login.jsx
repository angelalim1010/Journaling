import React, { Component } from "react";

import "./Login.css"

class Login extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
        <div className = "login-body">
            <div className = "wrapper">
                <div className = "container">
                    <div className = "col-left">
                        <div className = 'login-text'>
                            <h2 className = "login-h2">Zenyu</h2>
                            <p>App Message</p>
                            <a className = "btn" href="/">Read More</a>
                        </div>
                    </div>
                    <div className = "col-right">
                        <div className = "login-form">
                            <h2 className = "login-h2">Login</h2>
                            <form>
                                <p>
                                    <input type="text" placeholder="Username" required />
                                </p>
                                <p>
                                    <input type="text" placeholder="Password" required/>
                                </p>
                                <p>
                                    <input className="btn" type="submit" value = "Sign In"/>
                                </p>
                            
                                Don't have an account? <a href="/register">Sign Up</a>
                                
                                    
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
       
            
        )
    }
}

export default Login