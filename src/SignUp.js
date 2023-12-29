import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


export default function SignUp() {
    
    const [email,setEmail]=useState("");
    const [name,setName]=useState("");
    const [password,setPassword]=useState("");
    const [address,setLocation]=useState("");
    const navigate=useNavigate();
    
    const handleSubmit=(e)=>{
      e.preventDefault()
      axios.post('http://localhost:5000/register',{name,email,password,address})
      .then(result=>{
        navigate("/login")
        console.log(result)})
      .catch(err=>console.log(err))

    }
    
  return (
    <div>
         <div className='container'>
      <form onSubmit={handleSubmit}>
      <h2>{name}</h2>
     
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" name='name'  onChange={(e)=>setName(e.target.value)}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' onChange={(e)=>setEmail(e.target.value)}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" name='password'  id="exampleInputPassword1" onChange={(e)=>setPassword(e.target.value)}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Address</label>
    <input type="text" className="form-control"  name='geolocation'  onChange={(e)=>setLocation(e.target.value)}/>
    
  </div>

  <button type="submit" className="btn m-3 btn-warning">Submit</button>
  <Link to="/login" className='m-3 btn btn-danger'>Already a User</Link>
</form>
</div>
    </div>
  )
}
