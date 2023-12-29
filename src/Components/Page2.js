import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import "./Page2.css";
import leftarrow from "./Assets/leftarrow.png"

const Page2 = () => {
  return (
    <div className="page2">
            <div className="page2-container">
              <div className="page2-content">
                  <div>
                    <Link to="/page1"><img src={leftarrow} alt=''/></Link>
                  </div><div>
                    <h3>Step 2 of 4</h3>
                  </div>
              </div>
                <h1>Customize your experience </h1>
                <h3>Track where you see X content across the web</h3>
                <div className="page2-content-1">
                    <p>X uses this data to personalize your experience. This web browsing history will never be stored with your name, email, or phone number.</p>
                </div>
                <div className="page2-content-2">
                    <p>By signing up, you agree to our <NavLink to="https://twitter.com/en/tos#new"> Terms</NavLink>,<NavLink to="https://twitter.com/en/privacy">  Privacy Policy</NavLink>,
                     and Cookie Use. X may use your contact information, including your email address and phone number for purposes outlined in our Privacy Policy.<NavLink to="https://twitter.com/en/privacy">  Learn more</NavLink></p>
                </div>
                <div className="page2-button">
                <Link to="/page3"><button>Next</button></Link>
                </div>
            </div>
    </div>
  )
}

export default Page2;