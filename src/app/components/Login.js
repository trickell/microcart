"use client" // temporarily until the button can be integrated into the Button.js file.
import React from 'react';
import Image from 'next/image';

function Login() {

  let handleLoginSubmit = (e) => {
    e.preventDefault();
    // Set username and password from form fields
    let email = document.getElementById('login').value;
    let password = document.getElementById('password').value;

    // Make a POST request to the server to authenticate the user
    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: email, password: password }),
    })
   .then((response) => response.json())

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
              placeholder="email" />
          </div>
          <div>
            <input
              type="text"
              className="password"
              id="password"
              placeholder="password"/>
          </div> 
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