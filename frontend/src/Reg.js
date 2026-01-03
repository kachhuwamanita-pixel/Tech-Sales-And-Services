import React from 'react'
import './css/Login.css'

function Reg() {
  return (
    <div>
      <div className="body">
        {/* NAVBAR */}
        <header className="site-header">
          <div className="logo">MyProject</div>
          <nav className="account-nav">
            <a href="#">Home</a>
            <a href="#">Login</a>
            <a href="#">Help</a>
          </nav>
        </header>

        {/* REGISTER SECTION */}
        <section className="login-wrapper">
          <div className="login-card">
            <h2>Register</h2>

            <form>
              <div className="input-group">
                <input type="text" placeholder="Username" required />
              </div>

              <div className="input-group">
                <input type="email" placeholder="Email" required />
              </div>

              <div className="input-group">
                <input type="tel" placeholder="Phone Number" required />
              </div>

              <div className="input-group">
                <input type="password" placeholder="Password" required />
              </div>

              <button className="login-btn">REGISTER</button>
            </form>

            

            <p className="signup-text">Already have an account?</p>
            <a href="#" className="signup-link">LOGIN</a>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Reg