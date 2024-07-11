import React from 'react';
import Image from 'next/image';
function Login() {
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
            <button className="login-btn">
            Log In  
            </button>
          </div>
        </div>
      </div>

</section>

  )


};

export default Login;