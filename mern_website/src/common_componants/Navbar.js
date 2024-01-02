// Navbar.js
import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">E-Commerce Shop</div>
        <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/admin">admin</Link>
          <a href="/products">Products</a>
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search products..." />
          <button>Search</button>
        </div>
        <div className="user-actions">
          <a href="/account">My Account</a>
          <a href="/cart">
            <i className="fas fa-shopping-cart"></i> Cart
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
