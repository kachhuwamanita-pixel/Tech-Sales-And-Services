import React, { useState } from 'react';
import './css/Product.css'

function Product() {
  const [wishlist, setWishlist] = useState([3]); // Product 3 is initially in wishlist
  
  const toggleWishlist = (productId) => {
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter(id => id !== productId));
    } else {
      setWishlist([...wishlist, productId]);
    }
  };

  const addToCart = (productTitle) => {
    alert(`Added ${productTitle} to cart!`);
  };

  const products = [
    {
      id: 1,
      badge: 'Best Seller',
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      title: 'Apple MacBook Pro 16-inch (M2 Pro, 16GB, 512GB)',
      rating: 4.5,
      ratingCount: 1234,
      currentPrice: '$2,399',
      originalPrice: '$2,599',
      discount: '8% off'
    },
    {
      id: 2,
      badge: 'Limited Deal',
      image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGFwdG9wfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      title: 'Dell XPS 15 Laptop - 15.6" OLED 3.5K, Intel i7, 32GB, 1TB SSD',
      rating: 4,
      ratingCount: 892,
      currentPrice: '$1,899',
      originalPrice: '$2,199',
      discount: '14% off'
    },
    {
      id: 3,
      badge: null,
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWFjYm9va3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      title: 'Apple MacBook Air 13-inch (M2 Chip, 8GB, 256GB SSD)',
      rating: 5,
      ratingCount: 2541,
      currentPrice: '$1,099',
      originalPrice: '$1,199',
      discount: '8% off'
    },
    {
      id: 4,
      badge: 'New Arrival',
      image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      title: 'Microsoft Surface Laptop 5 - 13.5" Touchscreen, Intel i5, 16GB, 512GB',
      rating: 4.5,
      ratingCount: 647,
      currentPrice: '$1,299',
      originalPrice: '$1,499',
      discount: '13% off'
    },
    {
      id: 5,
      badge: null,
      image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      title: 'Lenovo ThinkPad X1 Carbon - 14" FHD, Intel i7, 16GB, 1TB SSD',
      rating: 4,
      ratingCount: 421,
      currentPrice: '$1,649',
      originalPrice: '$1,849',
      discount: '11% off'
    },
    {
      id: 6,
      badge: 'Deal of the Day',
      image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      title: 'ASUS ROG Zephyrus G14 Gaming Laptop - 14" QHD, Ryzen 9, 32GB, 1TB SSD',
      rating: 5,
      ratingCount: 1118,
      currentPrice: '$1,799',
      originalPrice: '$2,299',
      discount: '22% off'
    }
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(<i key={i} className="fas fa-star"></i>);
      } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
        stars.push(<i key={i} className="fas fa-star-half-alt"></i>);
      } else {
        stars.push(<i key={i} className="far fa-star"></i>);
      }
    }
    return stars;
  };

  return (
    <div className="body">
      {/* HEADER/NAVBAR */}
      <header className="site-header">
        <div className="logo">
          <i className="fas fa-laptop-code"></i>
          <span>TechStore</span>
        </div>
        
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
      
      {/* MAIN CONTENT */}
      <div className="container">
        {/* SIDEBAR FILTERS */}
        <aside className="sidebar">
          <h3>Filters</h3>
          
          <div className="filter-section">
            <h4>Category</h4>
            <div className="filter-option">
              <input type="checkbox" id="laptops" defaultChecked />
              <label htmlFor="laptops">Laptops & Computers</label>
            </div>
            <div className="filter-option">
              <input type="checkbox" id="smartphones" />
              <label htmlFor="smartphones">Smartphones</label>
            </div>
            <div className="filter-option">
              <input type="checkbox" id="headphones" />
              <label htmlFor="headphones">Headphones & Audio</label>
            </div>
            <div className="filter-option">
              <input type="checkbox" id="wearables" />
              <label htmlFor="wearables">Wearables</label>
            </div>
            <div className="filter-option">
              <input type="checkbox" id="accessories" />
              <label htmlFor="accessories">Accessories</label>
            </div>
          </div>
          
          <div className="filter-section">
            <h4>Price Range</h4>
            <input type="range" min="0" max="5000" defaultValue="2500" className="price-slider" style={{width: '100%'}} />
            <div className="price-range">
              <span>$0</span>
              <span>$5000</span>
            </div>
          </div>
          
          <div className="filter-section">
            <h4>Customer Rating</h4>
            <div className="filter-option">
              <input type="checkbox" id="rating-4" />
              <label htmlFor="rating-4">4 Stars & above</label>
            </div>
            <div className="filter-option">
              <input type="checkbox" id="rating-3" />
              <label htmlFor="rating-3">3 Stars & above</label>
            </div>
            <div className="filter-option">
              <input type="checkbox" id="rating-2" />
              <label htmlFor="rating-2">2 Stars & above</label>
            </div>
          </div>
          
          <div className="filter-section">
            <h4>Brand</h4>
            <div className="filter-option">
              <input type="checkbox" id="brand-apple" />
              <label htmlFor="brand-apple">Apple</label>
            </div>
            <div className="filter-option">
              <input type="checkbox" id="brand-samsung" />
              <label htmlFor="brand-samsung">Samsung</label>
            </div>
            <div className="filter-option">
              <input type="checkbox" id="brand-dell" />
              <label htmlFor="brand-dell">Dell</label>
            </div>
            <div className="filter-option">
              <input type="checkbox" id="brand-sony" />
              <label htmlFor="brand-sony">Sony</label>
            </div>
          </div>
          
          <button className="apply-filters">Apply Filters</button>
        </aside>
        
        {/* PRODUCT LIST */}
        <main className="product-list">
          <div className="products-header">
            <h2>Laptops & Computers (24 products)</h2>
            <div className="sort-options">
              <select>
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Customer Rating</option>
                <option>Newest Arrivals</option>
              </select>
            </div>
          </div>
          
          <div className="products-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                {product.badge && <div className="product-badge">{product.badge}</div>}
                <div className="product-image">
                  <img src={product.image} alt="Laptop" />
                </div>
                <div className="product-info">
                  <h3 className="product-title">{product.title}</h3>
                  <div className="product-rating">
                    <div className="stars">
                      {renderStars(product.rating)}
                    </div>
                    <span className="rating-count">({product.ratingCount})</span>
                  </div>
                  <div className="product-price">
                    <span className="current-price">{product.currentPrice}</span>
                    <span className="original-price">{product.originalPrice}</span>
                    <span className="discount">{product.discount}</span>
                  </div>
                  <div className="product-actions">
                    <button 
                      className="add-to-cart" 
                      onClick={() => addToCart(product.title)}
                    >
                      Add to Cart
                    </button>
                    <button 
                      className={`wishlist-btn ${wishlist.includes(product.id) ? 'active' : ''}`}
                      onClick={() => toggleWishlist(product.id)}
                    >
                      <i className={wishlist.includes(product.id) ? 'fas fa-heart' : 'far fa-heart'}></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
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

export default Product;