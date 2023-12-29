import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


export default function Try() {
    const [val,setValue]=useState(0);
    const navigate=useNavigate();
    const func1=()=>{
      setValue(val+1)
      navigate('/news')
    }
    
  return (
    <div>
      <h2>{val}</h2>
      <button className='btn bg-danger text-light rounded m-5' onClick={func1}>CLick Here</button>
    </div>
  )
}
