import React, { useState } from 'react'
import logo from '../images/logo.png'
import './Sign.css';
import { Link } from 'react-router-dom';
import image from '../images/authPageSide.png'

const Login  = () => {

 const [email,setEmail]=useState("");
 const [password,setPassword]=useState("");

 const submitForm =(e)=>
 {
    e.preventDefault();

 }
  return (
    <div>
      <div className='contain'>
           <div className='left'>
           <img className='logo-img' src={logo} alt="" />
           <form onSubmit={submitForm} className='form_a' action=''>
          
            <div className="inputBox">
                <input onChange={(e)=>{setEmail(e.target.value)}} value= {email} type='text' placeholder='email'>
                </input>
            </div>
            <div className="inputBox">
                <input type='text' onChange={(e)=>{setPassword(e.target.value)}} value= {password} placeholder='password'>
                </input>
            </div>
            <p>Don't have an account <Link to='/Signup'>Signup</Link></p>
            <button className="btnBlue">
                Login 
            </button>
           </form>
           </div>

    <div className="right">
    <img className='side-img' src={image} alt='/'></img>
    </div>
      </div>
    </div>
  )
}

export default Login 
