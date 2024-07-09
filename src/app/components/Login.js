import React from 'react';

function Login() {
  return (<section className="section">
    <div className="login">
      <h1>Log In</h1>
      <input
        type="text"
        name="login"
        id="login" />
      <button className="login-btn">
        Log In
      </button>
    </div>
  </section>

  )


};

export default Login;