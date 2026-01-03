import React, { useState } from 'react';
import './css/Detail.css'

function Detail() {
  const [mainImage, setMainImage] = useState('https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [selectedChip, setSelectedChip] = useState('M2 Pro (10-core CPU, 16-core GPU)');
  const [selectedMemory, setSelectedMemory] = useState('16GB Unified Memory');
  const [selectedStorage, setSelectedStorage] = useState('512GB SSD Storage');

  const changeImage = (imageUrl) => {
    setMainImage(imageUrl);
  };

  const changeQuantity = (amount) => {
    const newQuantity = quantity + amount;
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value) || 1;
    setQuantity(Math.max(1, Math.min(10, value)));
  };

  const addToCart = () => {
    alert(`Added ${quantity} item(s) to cart!`);
  };

  const buyNow = () => {
    alert('Proceeding to checkout...');
  };

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  const imageThumbnails = [
    {
      thumbnail: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      full: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80',
      alt: 'Front View'
    },
    {
      thumbnail: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      full: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
      alt: 'Side View'
    },
    {
      thumbnail: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      full: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      alt: 'Keyboard'
    },
    {
      thumbnail: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      full: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      alt: 'Screen'
    },
    {
      thumbnail: 'https://images.unsplash.com/photo-1629130926695-2a021d0d8b54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      full: 'https://images.unsplash.com/photo-1629130926695-2a021d0d8b54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      alt: 'Ports'
    }
  ];

  const relatedProducts = [
    {
      img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      alt: 'Dell XPS 15',
      title: 'Dell XPS 15 Laptop - 15.6" OLED 3.5K, Intel i7, 32GB, 1TB SSD',
      rating: 4,
      price: '$1,899.00'
    },
    {
      img: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      alt: 'Microsoft Surface',
      title: 'Microsoft Surface Laptop 5 - 13.5" Touchscreen, Intel i5, 16GB, 512GB',
      rating: 4.5,
      price: '$1,299.00'
    },
    {
      img: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      alt: 'ASUS Gaming Laptop',
      title: 'ASUS ROG Zephyrus G14 Gaming Laptop - 14" QHD, Ryzen 9, 32GB, 1TB SSD',
      rating: 5,
      price: '$1,799.00'
    },
    {
      img: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      alt: 'Lenovo ThinkPad',
      title: 'Lenovo ThinkPad X1 Carbon - 14" FHD, Intel i7, 16GB, 1TB SSD',
      rating: 4,
      price: '$1,649.00'
    }
  ];

  return (
    <div className="body">
      {/* HEADER/NAVBAR */}
      <header className="site-header">
        <a href="#" className="logo">
          <i className="fas fa-laptop-code"></i>
          <span>TechStore</span>
        </a>
        
        <div className="search-bar">
          <input type="text" placeholder="Search for products, brands and more..." />
          <button><i className="fas fa-search"></i> Search</button>
        </div>
        
        <div className="header-icons">
          <a href="#">
            <i className="fas fa-user"></i>
            <span>Account</span>
          </a>
          <a href="#">
            <i className="fas fa-heart"></i>
            <span>Wishlist</span>
          </a>
          <a href="#" className="cart-container">
            <i className="fas fa-shopping-cart"></i>
            <span>Cart</span>
            <div className="cart-count">3</div>
          </a>
        </div>
      </header>
      
      {/* BREADCRUMB NAVIGATION */}
      <nav className="breadcrumb">
        <a href="#">Home</a>
        <span>/</span>
        <a href="#">Electronics</a>
        <span>/</span>
        <a href="#">Computers & Tablets</a>
        <span>/</span>
        <a href="#">Laptops</a>
        <span>/</span>
        <a href="#">Apple MacBook</a>
      </nav>
      
      {/* PRODUCT DETAIL CONTAINER */}
      <div className="product-container">
        {/* PRODUCT IMAGE GALLERY */}
        <div className="product-gallery">
          <div className="main-image">
            <img id="mainImage" src={mainImage} alt="Apple MacBook Pro 16-inch" />
          </div>
          
          <div className="image-thumbnails">
            {imageThumbnails.map((img, index) => (
              <div 
                key={index}
                className={`thumbnail ${mainImage === img.full ? 'active' : ''}`}
                onClick={() => changeImage(img.full)}
              >
                <img src={img.thumbnail} alt={img.alt} />
              </div>
            ))}
          </div>
        </div>
        
        {/* PRODUCT INFO */}
        <div className="product-info">
          <div className="product-badge">Best Seller</div>
          <h1 className="product-title">Apple MacBook Pro 16-inch (2023) - M2 Pro Chip, 16GB RAM, 512GB SSD</h1>
          <p className="product-brand">Brand: <strong>Apple</strong></p>
          
          <div className="product-rating">
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <span className="rating-count">4.5 out of 5</span>
            <a href="#" className="rating-link">2,541 ratings</a>
            <span style={{margin: '0 10px', color: '#ccc'}}>|</span>
            <a href="#" className="rating-link">1,237 answered questions</a>
          </div>
          
          <div className="pricing">
            <div className="price">
              <span className="current-price">$2,399.00</span>
              <span className="original-price">$2,599.00</span>
              <span className="discount">Save $200 (8%)</span>
            </div>
            <p className="tax-info">+ $143.94 estimated tax</p>
            <p style={{color: '#777', fontSize: '14px', marginTop: '5px'}}>Available at a lower price from other sellers that may not offer free Prime shipping.</p>
          </div>
          
          <div className="highlights">
            <h3>About this item</h3>
            <ul className="highlight-list">
              <li><strong>M2 Pro or M2 Max chip</strong> for groundbreaking performance and power efficiency</li>
              <li><strong>Up to 22 hours of battery life</strong> — the longest ever in a Mac</li>
              <li><strong>Stunning 16-inch Liquid Retina XDR display</strong> with ProMotion technology</li>
              <li><strong>Advanced camera and audio system</strong> with six-speaker sound and studio-quality mics</li>
              <li><strong>Versatile connectivity</strong> with MagSafe 3 charging port, three Thunderbolt 4 ports, and more</li>
              <li><strong>Industry-leading performance per watt</strong> for pro workflows on the go</li>
            </ul>
          </div>
          
          <div className="configuration">
            <div className="config-option">
              <h4>Select Chip:</h4>
              <div className="config-buttons">
                {['M2 Pro (10-core CPU, 16-core GPU)', 'M2 Pro (12-core CPU, 19-core GPU) +$300', 'M2 Max (12-core CPU, 30-core GPU) +$700'].map((chip) => (
                  <button 
                    key={chip}
                    className={`config-btn ${selectedChip === chip ? 'active' : ''}`}
                    onClick={() => setSelectedChip(chip)}
                  >
                    {chip}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="config-option">
              <h4>Select Memory (RAM):</h4>
              <div className="config-buttons">
                {['16GB Unified Memory', '32GB Unified Memory +$400', '64GB Unified Memory +$1,000'].map((memory) => (
                  <button 
                    key={memory}
                    className={`config-btn ${selectedMemory === memory ? 'active' : ''}`}
                    onClick={() => setSelectedMemory(memory)}
                  >
                    {memory}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="config-option">
              <h4>Select Storage (SSD):</h4>
              <div className="config-buttons">
                {['512GB SSD Storage', '1TB SSD Storage +$200', '2TB SSD Storage +$600', '4TB SSD Storage +$1,200'].map((storage) => (
                  <button 
                    key={storage}
                    className={`config-btn ${selectedStorage === storage ? 'active' : ''}`}
                    onClick={() => setSelectedStorage(storage)}
                  >
                    {storage}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="quantity-selector">
            <label htmlFor="quantity">Quantity:</label>
            <div className="quantity-input">
              <button className="qty-btn" onClick={() => changeQuantity(-1)}>-</button>
              <input 
                type="number" 
                id="quantity" 
                className="qty-input" 
                value={quantity} 
                min="1" 
                max="10"
                onChange={handleQuantityChange}
              />
              <button className="qty-btn" onClick={() => changeQuantity(1)}>+</button>
            </div>
            <span style={{color: '#777', fontSize: '14px'}}>Only 5 left in stock</span>
          </div>
          
          <div className="action-buttons">
            <button className="btn-primary" onClick={addToCart}>
              <i className="fas fa-shopping-cart"></i> Add to Cart
            </button>
            <button className="btn-secondary" onClick={buyNow}>
              <i className="fas fa-bolt"></i> Buy Now
            </button>
          </div>
          
          <div style={{color: '#777', fontSize: '14px', marginTop: '20px', display: 'flex', alignItems: 'center', gap: '10px'}}>
            <i className="fas fa-shield-alt" style={{color: '#00bcd4'}}></i>
            <span>Secure transaction with SSL encryption</span>
          </div>
          
          <div style={{display: 'flex', gap: '30px', marginTop: '25px', fontSize: '14px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
              <i className="fas fa-truck" style={{color: '#00bcd4'}}></i>
              <div>
                <div style={{fontWeight: '600'}}>Free delivery</div>
                <div style={{color: '#777'}}>Tomorrow, March 15</div>
              </div>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
              <i className="fas fa-map-marker-alt" style={{color: '#00bcd4'}}></i>
              <div>
                <div style={{fontWeight: '600'}}>Deliver to New York</div>
                <div style={{color: '#777'}}>10001</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* PRODUCT DETAIL TABS */}
      <div className="product-tabs">
        <div className="tab-headers">
          <button className={`tab-header ${activeTab === 'description' ? 'active' : ''}`} onClick={() => openTab('description')}>Description</button>
          <button className={`tab-header ${activeTab === 'specifications' ? 'active' : ''}`} onClick={() => openTab('specifications')}>Specifications</button>
          <button className={`tab-header ${activeTab === 'reviews' ? 'active' : ''}`} onClick={() => openTab('reviews')}>Customer Reviews (2,541)</button>
          <button className={`tab-header ${activeTab === 'questions' ? 'active' : ''}`} onClick={() => openTab('questions')}>Questions & Answers</button>
        </div>
        
        <div className="tab-content">
          <div id="description" className={`tab-pane ${activeTab === 'description' ? 'active' : ''}`}>
            <h3 style={{color: '#1f2933', marginBottom: '20px'}}>Product Description</h3>
            <p style={{marginBottom: '20px', lineHeight: '1.8'}}>
              The MacBook Pro 16-inch is a groundbreaking laptop that pushes the boundaries of what a professional notebook can do. Powered by the revolutionary M2 Pro or M2 Max chip, it delivers exceptional performance that transforms complex workflows. Whether you're editing 8K video, compiling massive codebases, or designing intricate 3D models, this MacBook Pro handles it all with astonishing speed and efficiency.
            </p>
            <p style={{marginBottom: '20px', lineHeight: '1.8'}}>
              The stunning 16-inch Liquid Retina XDR display features Extreme Dynamic Range, 1,000 nits of sustained brightness, and ProMotion technology with adaptive refresh rates up to 120Hz. This results in incredible detail in shadows and highlights, making it perfect for color grading, photo editing, and enjoying HDR content.
            </p>
            <p style={{marginBottom: '20px', lineHeight: '1.8'}}>
              With up to 22 hours of battery life, this is the longest-lasting Mac ever. The advanced thermal system sustains breakthrough performance, while the six-speaker sound system with force-cancelling woofers delivers immersive audio. The 1080p FaceTime HD camera, studio-quality three-mic array, and versatile connectivity including MagSafe 3, HDMI, and SDXC card slot make it the ultimate pro notebook.
            </p>
          </div>
          
          <div id="specifications" className={`tab-pane ${activeTab === 'specifications' ? 'active' : ''}`}>
            <h3 style={{color: '#1f2933', marginBottom: '20px'}}>Technical Specifications</h3>
            <table className="specs-table">
              <tbody>
                <tr>
                  <td>Display</td>
                  <td>16.2-inch Liquid Retina XDR display, 3456-by-2234 native resolution, ProMotion technology</td>
                </tr>
                <tr>
                  <td>Chip</td>
                  <td>Apple M2 Pro with 12‑core CPU, 19‑core GPU, 16‑core Neural Engine</td>
                </tr>
                <tr>
                  <td>Memory</td>
                  <td>16GB unified memory (Configurable to 32GB or 64GB)</td>
                </tr>
                <tr>
                  <td>Storage</td>
                  <td>512GB SSD (Configurable to 1TB, 2TB, 4TB, or 8TB)</td>
                </tr>
                <tr>
                  <td>Battery and Power</td>
                  <td>Up to 22 hours Apple TV app movie playback, 100-watt-hour lithium‑polymer battery</td>
                </tr>
                <tr>
                  <td>Charging and Expansion</td>
                  <td>MagSafe 3 port, Three Thunderbolt 4 ports, HDMI port, SDXC card slot, 3.5mm headphone jack</td>
                </tr>
                <tr>
                  <td>Wireless</td>
                  <td>Wi‑Fi 6E, Bluetooth 5.3</td>
                </tr>
                <tr>
                  <td>Camera</td>
                  <td>1080p FaceTime HD camera with advanced image signal processor</td>
                </tr>
                <tr>
                  <td>Audio</td>
                  <td>High-fidelity six-speaker sound system with force-cancelling woofers, Spatial Audio</td>
                </tr>
                <tr>
                  <td>Operating System</td>
                  <td>macOS Ventura (Upgradeable to latest version)</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div id="reviews" className={`tab-pane ${activeTab === 'reviews' ? 'active' : ''}`}>
            <h3 style={{color: '#1f2933', marginBottom: '20px'}}>Customer Reviews</h3>
            
            <div className="review-item">
              <div className="review-header">
                <div>
                  <span className="reviewer-name">Michael Chen</span>
                  <div className="stars" style={{display: 'inline-block', marginLeft: '10px'}}>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
                <span className="review-date">March 5, 2023</span>
              </div>
              <h4 style={{margin: '10px 0', color: '#1f2933'}}>Worth every penny!</h4>
              <p>The performance is mind-blowing. I compile code 3x faster than my previous Intel MacBook Pro. Battery life is incredible - I get through a full workday with power to spare. The display is the best I've ever seen on a laptop.</p>
            </div>
            
            <div className="review-item">
              <div className="review-header">
                <div>
                  <span className="reviewer-name">Sarah Johnson</span>
                  <div className="stars" style={{display: 'inline-block', marginLeft: '10px'}}>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                  </div>
                </div>
                <span className="review-date">February 28, 2023</span>
              </div>
              <h4 style={{margin: '10px 0', color: '#1f2933'}}>Excellent for video editing</h4>
              <p>As a video editor, this machine has transformed my workflow. Rendering 4K footage happens in real-time, and the XDR display shows true-to-life colors. My only complaint is the price, but you get what you pay for.</p>
            </div>
            
            <div className="review-item">
              <div className="review-header">
                <div>
                  <span className="reviewer-name">David Wilson</span>
                  <div className="stars" style={{display: 'inline-block', marginLeft: '10px'}}>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                </div>
                <span className="review-date">February 15, 2023</span>
              </div>
              <h4 style={{margin: '10px 0', color: '#1f2933'}}>Perfect for developers</h4>
              <p>The M2 Pro chip handles multiple Docker containers, IDEs, and dozens of browser tabs without breaking a sweat. The keyboard is excellent for long coding sessions. I wish it had more USB-A ports, but that's what adapters are for.</p>
            </div>
            
            <button className="btn-secondary" style={{marginTop: '20px', width: '200px'}}>
              <i className="fas fa-star"></i> View All Reviews
            </button>
          </div>
          
          <div id="questions" className={`tab-pane ${activeTab === 'questions' ? 'active' : ''}`}>
            <h3 style={{color: '#1f2933', marginBottom: '20px'}}>Frequently Asked Questions</h3>
            
            <div style={{marginBottom: '20px'}}>
              <h4 style={{color: '#1f2933', marginBottom: '5px'}}>Q: Can this run Windows?</h4>
              <p style={{color: '#777'}}>A: Apple Silicon Macs cannot run Windows natively, but you can use virtualization software like Parallels Desktop to run Windows 11 for ARM.</p>
            </div>
            
            <div style={{marginBottom: '20px'}}>
              <h4 style={{color: '#1f2933', marginBottom: '5px'}}>Q: Is the RAM upgradeable after purchase?</h4>
              <p style={{color: '#777'}}>A: No, the unified memory is integrated into the M2 Pro/Max chip and cannot be upgraded after purchase. You must configure your desired memory at the time of ordering.</p>
            </div>
            
            <div style={{marginBottom: '20px'}}>
              <h4 style={{color: '#1f2933', marginBottom: '5px'}}>Q: Does it come with a charger?</h4>
              <p style={{color: '#777'}}>A: Yes, it includes a 140W USB-C Power Adapter and a MagSafe 3 cable for fast charging.</p>
            </div>
            
            <div style={{marginTop: '30px'}}>
              <h4 style={{color: '#1f2933', marginBottom: '15px'}}>Have a question about this product?</h4>
              <textarea placeholder="Type your question here..." style={{width: '100%', padding: '15px', border: '2px solid #e5e7eb', borderRadius: '8px', fontFamily: 'inherit', marginBottom: '15px', resize: 'vertical', minHeight: '100px'}}></textarea>
              <button className="btn-primary" style={{width: '150px'}}>Ask Question</button>
            </div>
          </div>
        </div>
      </div>
      
      {/* RELATED PRODUCTS */}
      <div className="related-products">
        <h2>Customers who viewed this item also viewed</h2>
        <div className="related-grid">
          {relatedProducts.map((product, index) => (
            <a key={index} href="#" className="related-card">
              <img src={product.img} alt={product.alt} />
              <div className="related-info">
                <div className="related-title">{product.title}</div>
                <div className="stars" style={{marginBottom: '10px'}}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <i 
                      key={star}
                      className={product.rating >= star ? 'fas fa-star' : product.rating >= star - 0.5 ? 'fas fa-star-half-alt' : 'far fa-star'}
                    ></i>
                  ))}
                </div>
                <div className="related-price">{product.price}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
      
      {/* FOOTER */}
      <footer className="site-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Get to Know Us</h4>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Press Releases</a>
            <a href="#">TechStore Science</a>
          </div>
          
          <div className="footer-section">
            <h4>Connect with Us</h4>
            <a href="#"><i className="fab fa-facebook" style={{marginRight: '8px'}}></i> Facebook</a>
            <a href="#"><i className="fab fa-twitter" style={{marginRight: '8px'}}></i> Twitter</a>
            <a href="#"><i className="fab fa-instagram" style={{marginRight: '8px'}}></i> Instagram</a>
            <a href="#"><i className="fab fa-youtube" style={{marginRight: '8px'}}></i> YouTube</a>
          </div>
          
          <div className="footer-section">
            <h4>Make Money with Us</h4>
            <a href="#">Sell on TechStore</a>
            <a href="#">Become an Affiliate</a>
            <a href="#">Advertise Your Products</a>
            <a href="#">Fulfillment by TechStore</a>
          </div>
          
          <div className="footer-section">
            <h4>Let Us Help You</h4>
            <a href="#">Your Account</a>
            <a href="#">Returns & Replacements</a>
            <a href="#">Help & Support</a>
            <a href="#">Contact Us</a>
          </div>
        </div>
        
        <div className="copyright">
          <p>&copy; 2023 TechStore.com, Inc. or its affiliates. All rights reserved.</p>
          <p>Conditions of Use & Sale | Privacy Notice | Interest-Based Ads</p>
        </div>
      </footer>
    </div>
  );
}

export default Detail;