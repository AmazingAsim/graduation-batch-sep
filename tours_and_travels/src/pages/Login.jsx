import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Login() {

  let navigate = useNavigate();

  let dummyname = "Asim"
  let dummypass = "1234"

  let [username,setUsername] = useState("Asim");
  let [password,setPassword] = useState("1234");

  function check(){
    if(username === dummyname && password === dummypass){
      navigate("/home")
    }
    else{
      alert("Invalid username or password")
    }
  }
  return (
    <div>
        <div className="container w-50 mt-5 bg-dark-subtle p-3">
        <h1 className='text-primary mb-3'>Login</h1>
            <input type="text" className="form-control my-2" placeholder='Enter your name'
             value={username} onChange={(e) => {setUsername(e.target.value)}} />
            <input type="text" className="form-control my-2" placeholder='Enter your Password'
             value={password} onChange={(e) => {setPassword(e.target.value)}} />

            <button className='btn btn-primary mt-3' onClick={check}>Login</button>
        </div>
    </div>
  )
}
