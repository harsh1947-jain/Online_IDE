// import React, { useState } from 'react'
// import logo from '../images/logo.png'
// import './Sign.css';
// import { Link, useNavigate } from 'react-router-dom';
// import image from '../images/authPageSide.png'
// import { api_base_url } from '../helper';
// const Signup = () => {
//  const [username,setUsername]=useState("");
//  const [name,setName]=useState("");
//  const [email,setEmail]=useState("");
//  const [password,setPassword]=useState("");
//  const [error,setError]=useState("");
// const navigate=useNavigate();

//  const submitForm =(e)=>
//  {
//     e.preventDefault();
  
//   fetch(api_base_url + "/signUp",{
//     mode:"cors",
//     method:"POST",
//     headers:{
//       "Content-Type":'application/json'
//     },
//     body :JSON.stringify({
//       username:username,
//       name:name,
//       email:email,
//       password:password
//     }) }).then((res)=>res.json()).then((data)=>{
//       if(data.success === true){
//         alert("Account created successfully");
//         navigate("/login"); 
//       }
//       else
//       {
//         setError(data.message);
//       }
//   })
//  }
//   return (
//     <div>
//       <div className='contain'>
//            <div className='left'>
//            <img className='logo-img' src={logo} alt="" />
//            <form onSubmit={submitForm} className='form_a' action=''>
//             <div className="inputBox">
//                 <input onChange={(e)=>{setUsername(e.target.value)}} value= {username} type='text' placeholder='username'>
//                 </input>
//             </div>
//             <div className="inputBox">
//                 <input onChange={(e)=>{setName(e.target.value)}} value= {name} type='text' placeholder='Name'>
//                 </input>
//             </div>
//             <div className="inputBox">
//                 <input onChange={(e)=>{setEmail(e.target.value)}} value= {email} type='text' placeholder='email'>
//                 </input>
//             </div>
//             <div className="inputBox">
//                 <input type='text' onChange={(e)=>{setPassword(e.target.value)}} value= {password} placeholder='password'>
//                 </input>
//             </div>
//             <p>Already have an account <Link to='/login'>login</Link></p>
//             <p className='er'>{error}</p>
//             <button className="btnBlue">
//                 Signup
//             </button>
//            </form>
//            </div>

//     <div className="right">
//     <img className='side-img' src={image} alt='/'></img>
//     </div>
//       </div>
//     </div>
//   )
// }

// export default Signup


import React, { useState } from 'react';
import logo from '../images/logo.png';
import './Sign.css';
import { Link, useNavigate } from 'react-router-dom';
import image from '../images/authPageSide.png';




const Signup = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
 
  const navigate = useNavigate(); 

  const submitForm = async (e) => {
    e.preventDefault();

    const userData = {
      username,
      name,
      email,
      password
    };
 
    // Send a POST request to the backend API
    try {
      const response = await fetch("http://localhost:5000/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      // Handle the response
      if (data.success) {
        alert("Account created successfully!");
        navigate('/login');
         // Redirect to login page after successful signup
         
      } else {
        setError(data.message || "An error occurred. Please try again.");
      }
    } catch (err) {
      console.error("Error:", err);
      setError("An error occurred while signing up. Please try again.");
    }
  };

  return (
    <div>
      <div className='contain'>
        <div className='left'>
          <img className='logo-img' src={logo} alt="" />
          <form onSubmit={submitForm} className='form_a'>
            <div className="inputBox">
              <input onChange={(e) => setUsername(e.target.value)} value={username} type='text' placeholder='Username' required />
            </div>
            <div className="inputBox">
              <input onChange={(e) => setName(e.target.value)} value={name} type='text' placeholder='Name' required />
            </div>
            <div className="inputBox">
              <input onChange={(e) => setEmail(e.target.value)} value={email} type='email' placeholder='Email' required />
            </div>
            <div className="inputBox">
              <input type='password' onChange={(e) => setPassword(e.target.value)} value={password} placeholder='Password' required />
            </div>
            <p>Already have an account? <Link to='/login'>Login</Link></p>
            <p className='er'>{error}</p>
            <button className="btnBlue" type="submit">Signup</button>
          </form>
        </div>
        <div className="right">
          <img className='side-img' src={image} alt='Auth page side' />
        </div>
      </div>
    </div>
  );
};

export default Signup;



