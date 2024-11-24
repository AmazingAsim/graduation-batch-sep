// controlled component we use state variables

import React from 'react'
import { useState } from 'react';
export default function Login() {
    let [email,setEmail] = useState('');
    let [password,setPassword] = useState('');

    function submit(){
        console.log(email,password);
    }

  return (
    <div>
        <h1>Login</h1>

        <div className="form">
            <input type="email" placeholder='Enter your email' value={email} onChange={function(event){setEmail(event.target.value)}}  />
            <input type="password" placeholder='Enter your password' value={password} onChange={function(event){setPassword(event.target.value)}} />
            <button onClick={submit}>Login</button>
        </div>

        <h2>Email:{email}</h2>
        <h2>password:{password}</h2>
    </div>
  )
}
