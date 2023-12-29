import React from 'react';
import "./Main.css";
import x from "./Assets/twitter.png";
import google from "./Assets/google.png";
import apple from "./Assets/apple.png";
import { Link, NavLink } from 'react-router-dom';

const Main = () => {
  return (
    <div className="main">
        <div className="main-container">
        <div className="main-image">
            <img src={x} alt=''/>
        </div>
        <div className="main-content">
            <div className="main-head">
                <h1>Sign in to X</h1>
            </div>
            
            <div className="main-signin">
                <div className='img1'>
                    <img src={google} alt=''/>
                </div>
                <div className='main-p'>
                    <p>Sign in with Google</p>
                </div>
            </div>
            <div className="main-signin">    
                <div className='img1'>
                    <img src={apple} alt=''/>
                </div>
                <div className='main-p'>
                    <p>Sign in with Apple</p>
                </div>
                </div>
            <hr/>
            <div className="main-input">
                <input type='text' placeholder='Phone, email, or username'/>
            </div>
            <div className="main-button">
               <Link to="/password"><button>Next</button></Link> 
            </div>
            <div className="main-forgot">
                <Link to="/forgot"><p>Forgot password?</p></Link>
            </div>
            <div className="main-signup">
                <p>Don't have an account? <NavLink to="/signup">Sign up</NavLink></p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Main