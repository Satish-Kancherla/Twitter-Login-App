import React from 'react'
import x from "./Assets/twitter.png";
import { Link } from 'react-router-dom';

const Forgot2 = () => {
  return (
    <div className="forgot">
        <div className="forgot-container">
            <div className="main-image">
                <img src={x} alt=''/>
            </div>
            <div className="forgot-content">
                <div className="forgot-head">
                    <h1>Enter your OTP</h1>
                    <p>Enter your OTP here</p>
                </div>
                
                <div className="forgot-input">
                    <input type='text' placeholder='OTP'/>
                </div>
                <div className="forgot-button">
                <   Link to="/"><button>Next</button></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Forgot2