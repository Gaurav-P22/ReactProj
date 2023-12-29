import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


export default function Login() {
    
    const [email,setEmail]=useState("");
    
    const [password,setPassword]=useState("");
    const navigate=useNavigate();
    const handleSubmit=(e)=>{
      e.preventDefault()
      axios.post('http://localhost:5000/login',{email,password})
      .then(result=>{console.log(result)
        if(result.data==="Success"){
        navigate("/")}
    })
      .catch(err=>console.log(err))

    }
    
  return (
    <div>
         <div className='container'>
      <form onSubmit={handleSubmit}>
      
     
  
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' onChange={(e)=>setEmail(e.target.value)}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" name='password'  id="exampleInputPassword1" onChange={(e)=>setPassword(e.target.value)}/>
  </div>
    <button type="submit" className="btn m-3 btn-warning">Login</button>
  <Link to="/form" className='m-3 btn btn-danger'>Already a User</Link>
</form>
</div>
    </div>
  )
}
