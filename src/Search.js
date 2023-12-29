import axios from 'axios';
import React, { useState } from 'react'


export default function Search() {
    const [data,setData]=useState("");
    const [result,setSearchResult]=useState("");


     const handleSubmit= (e)=>{
        e.preventDefault();
        axios.get(`http://localhost:5000/search?name=${data}`)
        
        .then(users=>{
            setSearchResult(users.data);
        })
        .catch(err=>console.log(err))
     }
  return (
    <div className='m-3'>
    <h1>{data}</h1>
      <form className="d-flex" role="search" onSubmit={handleSubmit}>
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>setData(e.target.value)}/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
        {result&&(
            <ul>
            <li>
                <ol>
                    <li>{result.name}</li>
                    <li>{result.address}</li>
                </ol>
                </li>
                
            </ul>
        )}

    </div>
  )
}
