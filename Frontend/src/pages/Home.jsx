import React, { useState } from 'react'
import Navbar from '../components/navbar'
import './Hom.css';
import Listcard from '../components/listc'
import Gridcard from '../components/gridc';
const Home = () => {
    const [isGridLayout, setIsGridLayout] = useState(false);
    const [isCreateModelShow, setIsCreateModelShow] = useState(false);
  return (
    <div>
   <Navbar/>
   <div className="contain">
    <div className="head">Hi Harsh</div>
   
   <div >
    <input className='inputBo' type='text' placeholder='Search Here'>
    </input>
   </div>
   <button onClick={()=>{setIsCreateModelShow(true)}} className='btn'>+</button>
   </div>

   <div className="cards">
    {
        isGridLayout ?
        <div className="grid">
            <Gridcard/>
            <Gridcard/>
            <Gridcard/>
            <Gridcard/>
        </div>
        : <div className="list">
            <Listcard/>
            <Listcard/>
            <Listcard/>
            <Listcard/>
        </div>
    }
   </div>

{
    isCreateModelShow ?
   <div className="createModalOverlay">
        <div className="createModal">
          <h3 className="modalTitle">Create New Project</h3>
          <div className="inputBox">
            <input
              type="text"
              placeholder="Project Title"
              
            />
          </div>
          <div className="modalButtons">
            <button  className="createButton" >
              Create
            </button>
            <button onClick={()=>{setIsCreateModelShow(false)}} className="cancelButton" >
              Cancel
            </button>
          </div>
        </div>
      </div> : ""
   
}
    </div>
  )
}

export default Home
