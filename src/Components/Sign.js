import React from 'react'
import "./Signup.css";
import x from "./Assets/twitter.png";
import google from "./Assets/google.png";
import apple from "./Assets/apple.png";
import { NavLink,Link } from 'react-router-dom';

const Sign = () => {
    return (
        <div className="main">
            <div className="main-container">
            <div className="main-image">
                <img src={x} alt=''/>
            </div>
            <div className="main-content">
                <div className="main-head">
                    <h1>Join X today</h1>
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
                <hr className='hr'/>
                <div className="main-button">
                   <Link to="/page1"><button>Create account</button></Link>
                </div>
                <div className="main-agree">
                    <p>By signing up, you agree to the <a href='https://twitter.com/en/tos' target='_blank' rel="noreferrer">Terms of Service</a> and <a href='https://twitter.com/en/privacy' target='_blank' rel="noreferrer"> Privacy Policy</a>, including <a href='https://help.twitter.com/en/rules-and-policies/x-cookies' target="_blank" rel="noreferrer">Cookie Use.</a></p>
                </div>
                <div className="main-signup">
                    <p>Have an account already? <NavLink to="/">Log in</NavLink></p>
                </div>
            </div>
            </div>
        </div>
      )
}

export default Sign;