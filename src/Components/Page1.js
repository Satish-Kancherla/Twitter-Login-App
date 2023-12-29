import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import "./Page1.css";
import leftarrow from "./Assets/leftarrow.png"

const Page1 = () => {
  return (
    <div className="page">
            <div className="page-container">
                <div className="page-content">
                    <div>
                        <Link to="/signup"><img src={leftarrow} alt=''/></Link>
                    </div><div>
                        <h3>Step 1 of 4</h3>
                    </div>
                </div>
                <h1>Create your account </h1>
                <div>
                <input type="text" placeholder='Name'/>
                </div><div>
                <input type="number" placeholder='Phone'/>
                </div>
                <div className="page-a">
                    <NavLink to="/email"><p>Use Email instead</p></NavLink>
                </div>
                <div className="page-p">
                    <span>Date of birth</span>
                    <p>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</p>
                </div>
                <div>
                        <select className='month' name="month"   >
                            <option >Month</option>
                            <option value="jan">Jan</option><option value="Feb">Feb</option><option value="Mar">Mar</option><option value="Apr">Apr</option>
                            <option value="May">May</option><option value="jun">Jun</option><option value="Jul">Jul</option><option value="Aug">Jan</option>
                            <option value="Sep">Sep</option><option value="Oct">Oct</option><option value="Nov">Nov</option><option value="Dec">Dec</option>
                        </select>
                        <select className='date' name="date"  >
                            <option >Date</option>
                            <option >01</option><option >02</option><option >03</option><option >04</option><option >05</option>
                            <option >06</option><option >07</option><option >08</option><option >09</option><option >10</option>
                            <option >11</option><option >12</option><option >13</option><option >15</option>
                            <option >16</option><option >17</option><option >18</option><option >19</option><option >20</option>
                            <option >21</option><option >22</option><option >23</option><option >24</option><option >25</option>
                            <option >26</option><option >27</option><option >28</option><option >29</option>
                            <option >30</option><option >31</option>
                        </select>
                        
                        <select className='year' name="year"   >
                        <option >Year</option>
                            <option value="1990">1990</option><option value="1991">1991</option><option value="1992">1992</option><option value="1992">1992</option><option value="1993">1993</option>
                            <option value="1994">1994</option><option value="1995">1995</option><option value="1996">1996</option><option value="1997">1997</option><option value="1998">1998</option>
                            <option value="1999">1999</option><option value="2000">2000</option><option value="2001">2001</option><option value="2002">2002</option><option value="2003">2003</option>
                        </select>
                    </div>
                    <div className="page-button">
                        <Link to="/page2"><button>Next</button></Link>
                    </div>
            </div>
    </div>
  )
}

export default Page1