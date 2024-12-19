import React from 'react'
import './navbar.css'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import Avatar from 'react-avatar'
import {MdLightMode} from 'react-icons/md'
import {BsGridFill} from'react-icons/bs'
import {  toggleClass } from '../helper.jsx';

const navbar = () => {
  return (
    <>
     <div className="navbar">
     <div className="logo">
        <img className='logo' src={logo} alt="" />
     </div>
     <div className="links">
        <Link className='linked'>Home</Link>
        <Link className='linked'>About</Link>
        <Link className='linked'>Contact</Link>
        <Link className='linked'>Services</Link>
        <Avatar onClick={() => { toggleClass(".DropDownNavbar", "hidden") }} name='Wim Mostmans' size='50' round="50%"></Avatar>
     </div>


     <div className="DropDownNavbar  hidden">
        
        Harsh Jain
        <div className="light"><MdLightMode/>Light mode</div>
        <div className="light"><BsGridFill/>Dark mode</div>
        </div>



     
     
     </div>
     
    </>
  )
}

export default navbar
