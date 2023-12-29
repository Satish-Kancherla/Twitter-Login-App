import React from 'react';
import "./Page3.css";
import {Link } from 'react-router-dom'
import leftarrow from "./Assets/leftarrow.png"
const Page3 = () => {
  return (
    <div className="page3">
        <div className="page3-container">
            <div className="page3-content">
                  <div>
                    <Link to="/page2"><img src={leftarrow} alt=''/></Link>
                  </div><div>
                    <h3>Step 3 of 4</h3>
                  </div>
              </div>
            <div className="page3-con">
              <h1>We sent you a code </h1>
              <h4>Enter it below to verify</h4>
            </div>
        <div>
            <input type="text" placeholder='Verification code'/>
        </div>
        <div className="page3-button">
            <Link to="/page4"><button>Next</button></Link>
        </div>
    </div>
    </div>
    
  )
}

export default Page3