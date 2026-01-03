import React from 'react';
import './css/Home.css'; // Assuming you have a CSS file
import { useNavigate } from 'react-router-dom';

function Home() {

    const navigate= useNavigate();
  return (
    <div className="body">
      {/* HEADER */}
      <header className="site-header">
        <div className="logo">
          <img src="https://placehold.co/120x40?text=LOGO" alt="Logo" />
        </div>
        <nav className="account-nav">
          <a href="#">My Account</a>
          <a href="#">Orders</a>
          <a href="#">Cart</a>
          <a onClick={()=>navigate('/Login')}>Signup</a>
        </nav>
      </header>

      {/* MAIN MENU */}
      <nav className="main-menu">
        <a href="#">Spare Parts</a>
        <a href="#">Display</a>
        <a href="#">Battery</a>
        <a href="#">Accessories</a>
        <a href="#">Tools</a>
      </nav>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-container">
          {/* LEFT CONTENT */}
          <div className="hero-text">
            <img
              src="https://placehold.co/160x40?text=Maxbhi.com"
              alt="Maxbhi Logo"
              className="hero-logo"
            />
            <h1>The Biggest Website</h1>
            <p>For Mobile Phone Spare Parts In India</p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="hero-image">
            <img
              src="https://placehold.co/600x300?text=Mobile+Spare+Parts"
              alt="Mobile Spare Parts"
            />
          </div>
        </div>
      </section>

      {/* CATEGORY SECTION */}
      <section className="categories-section">
        {/* SPARE PARTS */}
        <h3 className="category-title">SPARE PARTS</h3>
        <div className="category-grid">
          <div className="category-item">
            <img src="https://placehold.co/120x120?text=Spare" alt="Mobile Spare Parts" />
            <p>Mobile Spare Parts</p>
          </div>
          <div className="category-item">
            <img src="https://placehold.co/120x120?text=Display" alt="Display Screen" />
            <p>Display Screen</p>
          </div>
          <div className="category-item">
            <img src="https://placehold.co/120x120?text=Touch" alt="Touch Screen" />
            <p>Touch Screen</p>
          </div>
          <div className="category-item">
            <img src="https://placehold.co/120x120?text=LCD" alt="LCD" />
            <p>LCD</p>
          </div>
          <div className="category-item">
            <img src="https://placehold.co/120x120?text=Housing" alt="Housing" />
            <p>Housing</p>
          </div>
        </div>

        {/* ACCESSORIES */}
        <h3 className="category-title">ACCESSORIES</h3>
        <div className="category-grid">
          <div className="category-item">
            <img src="https://placehold.co/120x120?text=Accessories" alt="Mobile Accessories" />
            <p>Mobile Accessories</p>
          </div>
          <div className="category-item">
            <img src="https://placehold.co/120x120?text=Battery" alt="Battery" />
            <p>Battery</p>
          </div>
          <div className="category-item">
            <img src="https://placehold.co/120x120?text=Cases" alt="Cases & Covers" />
            <p>Cases & Covers</p>
          </div>
          <div className="category-item">
            <img src="https://placehold.co/120x120?text=Films" alt="Protective Films & Glass" />
            <p>Protective Films & Glass</p>
          </div>
          <div className="category-item">
            <img src="https://placehold.co/120x120?text=Charger" alt="Chargers" />
            <p>Chargers</p>
          </div>
        </div>

        {/* REPAIR TOOLS */}
        <h3 className="category-title">REPAIR TOOLS</h3>
        <div className="category-grid">
          <div className="category-item">
            <img src="https://placehold.co/120x120?text=Tools" alt="Mobile Tool Kits" />
            <p>Mobile Tool Kits</p>
          </div>
          <div className="category-item">
            <img src="https://placehold.co/120x120?text=Screw" alt="Screw Driver" />
            <p>Screw Driver</p>
          </div>
          <div className="category-item">
            <img src="https://placehold.co/120x120?text=Glue" alt="Glue" />
            <p>Glue</p>
          </div>
          <div className="category-item">
            <img src="https://placehold.co/120x120?text=Machine" alt="Touch Changing Machine" />
            <p>Touch Changing Machine</p>
          </div>
          <div className="category-item">
            <img src="https://placehold.co/120x120?text=Open" alt="Opening Tool Set" />
            <p>Opening Tool Set</p>
          </div>
        </div>

        {/* SOLAR & LED */}
        <h3 className="category-title">SOLAR & LED</h3>
        <div className="category-grid">
          <div className="category-item">
            <img src="https://placehold.co/120x120?text=Solar" alt="Solar & Essentials" />
            <p>Solar & Essentials</p>
          </div>
          <div className="category-item">
            <img src="https://placehold.co/120x120?text=Street" alt="Street Light Fixtures" />
            <p>Street Light Fixtures</p>
          </div>
          <div className="category-item">
            <img src="https://placehold.co/120x120?text=Panels" alt="Solar Panels" />
            <p>Solar Panels</p>
          </div>
          <div className="category-item">
            <img src="https://placehold.co/120x120?text=LED" alt="Indoor LED Lighting" />
            <p>Indoor LED Lighting</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-container">
          {/* LOGO */}
          <div className="footer-logo">
            <img src="https://placehold.co/150x50?text=LOGO" alt="Logo" />
          </div>

          {/* FOOTER ACCORDION */}
          <div className="footer-section">
            <button className="footer-title">Customer Service <span>+</span></button>
            <ul className="footer-links">
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Track Order</a></li>
              <li><a href="#">Returns</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <button className="footer-title">Contact Us <span>+</span></button>
            <ul className="footer-links">
              <li><a href="#">Email Us</a></li>
              <li><a href="#">Call Support</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <button className="footer-title">Policies <span>+</span></button>
            <ul className="footer-links">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <button className="footer-title">About Us <span>+</span></button>
            <ul className="footer-links">
              <li><a href="#">Company Info</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div className="footer-social">
            <p>Follow Us</p>
            <a href="#">FB</a>
            <a href="#">X</a>
            <a href="#">IG</a>
            <a href="#">YT</a>
          </div>
        </div>

        <p className="footer-bottom">© 2025 College Project</p>
      </footer>
    </div>
  );
}

export default Home;