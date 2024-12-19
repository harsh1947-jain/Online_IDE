import React, { useState } from 'react'
import './List.css'
import img from '../images/code.png'
import deleteimg from '../images/delete.png'
const listcard = () => {

  const [isDeleteModelShow,setIsDeleteModelShow]=useState(false);

  return (
    <div>
      <div className="listcard">
      <div className='cont'>
     <img className='im' src={img} alt=''></img>
      </div>
      <div className="about">
        <h3>First Project</h3>
        <h4>Created on 10-10-24</h4>
      </div>
      <div>
        <img onClick={()=>{setIsDeleteModelShow(true)}} className='del' src={deleteimg} alt='/'></img>
      </div>
      </div>
{
      isDeleteModelShow ?
      <div className="modal">
      <div className="mainModal">
        <h3 className="heading">Do you want to delete <br /> this project?</h3>
        <div className="buttonContainer">
          <button className="deleteButton">Delete</button>
          <button onClick={()=>{setIsDeleteModelShow(false)}} className="cancelButton">Cancel</button>
        </div>
      </div> 
    
    </div>:""

}

      

  
    </div>
  )
}

export default listcard
