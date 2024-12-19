import React, { useState } from 'react'
import './grid.css'
import delimg from '../images/delete.png'
import codeimg from '../images/code.png'
const Gridcard = () => {

  const [isDeleteModelShow,setIsDeleteModelShow]=useState(false);
  return (
    <div>
      <div className="grid">
    <img className='codeim' src={codeimg} alt='/'></img> 
    <h3> My First Project</h3>
    <h4>Created on 10-10-24</h4>
    <img onClick={()=>{setIsDeleteModelShow(true)}} className='dele' src={delimg} alt='/'></img>
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

export default Gridcard
