import React from 'react';
import './css/Login.css'
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
  return (
    <div className="body">
      {/* NAVBAR */}
      <header className="site-header">
        <div className="logo">MyProject</div>
        <nav className="account-nav">
          <a href="#">Home</a>
          <a href="#">Register</a>
          <a href="#">Help</a>
        </nav>
      </header>

      {/* LOGIN SECTION */}
      <section className="login-wrapper">
        <div className="login-card">
          <h2>Login</h2>

          <form>
            <div className="input-group">
              <input type="text" placeholder="Username" required />
            </div>

            <div className="input-group">
              <input type="password" placeholder="Password" required />
            </div>

            <div className="forgot">
              <a href="#">Forgot password?</a>
            </div>

            <button type="button" className="login-btn">SIGN IN</button>
          </form>

          
          <p className="signup-text">Don't have account</p>
          <a href="#" className="signup-link" onClick={() => navigate('/Reg')}>SIGN UP</a>
        </div>
      </section>
    </div>
  );
}

export default Login;