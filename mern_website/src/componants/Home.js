// Home.js
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <section className="featured-product">
        <h2>Featured Product</h2>
        <div className="product-card">
          <img src="featured-product-image.jpg" alt="Featured Product" />
          <h3>Product Name</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button>Add to Cart</button>
        </div>
      </section>

      <section className="product-grid">
        <h2>Explore Our Products</h2>
        <div className="grid-container">
          {/* Repeat this block for multiple products */}
          <div className="product-card">
            <img src="product-image1.jpg" alt="Product 1" />
            <h3>Product 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button>Add to Cart</button>
          </div>
          {/* End of repeated block */}
        </div>
      </section>

      <section className="intro-section">
        <h2>Welcome to Our E-Commerce Store</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </section>
    </div>
  );
};

export default Home;
