"use client" // temporarily until the button can be integrated into the Button.js file.
import React, { useState } from 'react';
import Image from 'next/image';

function Login() {

  const [ errorMsg, setErrorMsg ] = useState('');

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    // Set username and password from form fields
    const email = document.getElementById('login').value;
    const password = document.getElementById('password').value;

    // Make a POST request to the server to authenticate the user
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }),
      body: JSON.stringify({ username: email, password: password }),
    });
    const res = await response.json();
    console.log(response);
    
    if(res.error){
      setErrorMsg(res.error);
      console.log(res.error);
      return;
    }
    setErrorMsg('');
  };

  return (
  
  <section className="section login-wrapper">
      
        <div>
          <h2 className="cabinfont">
            Returning Users
          </h2>
          <Image src="/kidpushingcart.png" alt="kid pushing cart" height={200} width={200} className="responsive" />
        </div>

      <div className="login">
        <div className="credentials">
          <div>
            <input
              type="text"
              className="email"
              id="login"
              placeholder="email"
              onChange={() => setErrorMsg("")} />
          </div>
          <div>
            <input
              type="text"
              className="password"
              id="password"
              placeholder="password"
              onChange={() => setErrorMsg("")}/>
              
          </div>
          <p className={errorMsg ? "" : "hidden"}>{errorMsg}</p> 
          <div> 
            <button className="login-btn" onClick={handleLoginSubmit}>
            Log In  
            </button>
          </div>
        </div>
      </div>


</section>

  )


};

export default Login;