import React from 'react'
import "./Page4.css";
import {Link } from 'react-router-dom'

const Page4 = () => {
  return (
    <div className="page4">
        <div className="page4-container">
          
            <h3>Step 4 of 4</h3>
            <h1>New Account Created</h1>
            <h4>Click on next to Log in page</h4>
            <div className="page4-button">
            <Link to="/"><button>Next</button></Link>
        </div>
        </div>
    </div>
  )
}

export default Page4