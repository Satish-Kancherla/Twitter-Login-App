import React from 'react'
import x from "./Assets/twitter.png";
import "./Password.css";
import { NavLink,Link } from 'react-router-dom';

const Password1 = () => {
  return (
    <div className="password">
        <div className="password-container">
            <div className="main-image">
                <img src={x} alt=''/>
            </div>
            <div className="password-content">
                <div className="password-head">
                    <h1>Enter your password</h1>
                </div>
                <div className="password-input">
                    <input type='text' placeholder='Password'/>
                </div>
                <div className="password-nav">
                    <NavLink to='/forgot'>Forgot password?	</NavLink>
                </div>
            </div>
            <div className="password-button">
               <Link to="/"><button>Next</button></Link>
            </div>
            <div className="password-signup">
                    <p>Don't have an account? <NavLink to="/signup">Sign up</NavLink></p>
                </div>
        </div>
    </div>
  )
}

export default Password1;