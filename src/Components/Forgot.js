import React from 'react'
import x from "./Assets/twitter.png";
import { Link } from 'react-router-dom';
import "./Forgot.css";
const Forgot = () => {
  return (
    <div className="forgot">
        <div className="forgot-container">
            <div className="main-image">
                <img src={x} alt=''/>
            </div>
            <div className="forgot-content">
                <div className="forgot-head">
                    <h1>Find your X account</h1>
                    <p>Enter the email, phone number, or username associated with your account to change your forgot.</p>
                </div>
                
                <div className="forgot-input">
                    <input type='text' placeholder='Email, phone number, or username'/>
                </div>
                <div className="forgot-button">
                <   Link to="/username"><button>Next</button></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Forgot