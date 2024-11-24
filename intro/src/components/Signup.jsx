// uncontrolled forms using useRef  
import { useRef } from 'react'
import React from 'react'

export default function Signup() {
  let nameRef = useRef();
  let emailRef = useRef();
  let passwordRef = useRef();

  function submit(){
    let name = nameRef.current.value;
    let email = emailRef.current.value;
    let password = passwordRef.current.value;
    console.log({name,email,password});
  }
  return (
    <div>
        <h1>Signup</h1>
        <div className="form">
            <input type="text" placeholder='Enter your name' ref={nameRef} />
            <input type="email" placeholder='Enter your email' ref={emailRef} />
            <input type="password" placeholder='Enter your password' ref={passwordRef} />
            <button onClick={submit}>Signup</button>
        </div>
    </div>
  )
}
