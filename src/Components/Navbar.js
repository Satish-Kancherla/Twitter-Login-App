import { BrowserRouter,Route,Routes } from "react-router-dom";

import React from 'react';
import Main from "./Main";
import Sign from "./Sign";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Password1 from "./Password";
import Forgot from "./Forgot";
import Forgot2 from "./Forgot2";
import Email from "./Email";


const Navbar = () => {
  return (
    <div className="navbar">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />}/>
                <Route path="/signup" element={<Sign />}/>
                <Route path="/page1" element={<Page1 />}/>
                <Route path="/page2" element={<Page2 />}/>
                <Route path="/page3" element={<Page3 />}/>
                <Route path="/page4" element={<Page4 />}/>
                <Route path="/email" element={<Email />}/>
                <Route path="/password" element={<Password1 />}/>
                <Route path="/forgot" element={<Forgot />}/>
                <Route path="/username" element={<Forgot2 />}/>
              
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Navbar;