import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const totalItems = useSelector(state => state.cart.totalItems);
  const history = useHistory();

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          🌿 Paradise Nursery
        </Link>
        
        <nav className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/products" className="nav-link">Products</Link>
          <Link to="/cart" className="nav-link">Cart</Link>
        </nav>
        
        <div className="cart-icon-container" onClick={() => history.push('/cart')}>
          <svg 
            className="cart-icon" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
            />
          </svg>
          {totalItems > 0 && (
            <span className="cart-count">{totalItems}</span>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
