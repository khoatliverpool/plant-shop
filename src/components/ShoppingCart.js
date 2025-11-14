import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../redux/cartSlice';
import Header from './Header';
import './ShoppingCart.css';

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { items, totalItems, totalCost } = useSelector(state => state.cart);

  const handleIncrease = (itemId) => {
    dispatch(increaseQuantity(itemId));
  };

  const handleDecrease = (itemId) => {
    dispatch(decreaseQuantity(itemId));
  };

  const handleRemove = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleCheckout = () => {
    alert('Coming Soon - Checkout feature will be available soon!');
  };

  const handleContinueShopping = () => {
    history.push('/products');
  };

  return (
    <div className="shopping-cart-page">
      <Header />
      <div className="cart-container">
        <h1 className="cart-title">Shopping Cart</h1>
        
        {items.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty</p>
            <button className="continue-shopping-btn" onClick={handleContinueShopping}>
              Start Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="cart-summary">
              <div className="summary-item">
                <span>Total Items:</span>
                <span className="summary-value">{totalItems}</span>
              </div>
              <div className="summary-item">
                <span>Total Cost:</span>
                <span className="summary-value">${totalCost.toFixed(2)}</span>
              </div>
            </div>

            <div className="cart-items">
              {items.map(item => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item-image" />
                  
                  <div className="cart-item-details">
                    <h3 className="cart-item-name">{item.name}</h3>
                    <p className="cart-item-price">Unit Price: ${item.price.toFixed(2)}</p>
                  </div>
                  
                  <div className="cart-item-controls">
                    <div className="quantity-controls">
                      <button 
                        className="quantity-btn decrease"
                        onClick={() => handleDecrease(item.id)}
                      >
                        -
                      </button>
                      <span className="quantity-display">{item.quantity}</span>
                      <button 
                        className="quantity-btn increase"
                        onClick={() => handleIncrease(item.id)}
                      >
                        +
                      </button>
                    </div>
                    
                    <p className="item-subtotal">
                      Subtotal: ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    
                    <button 
                      className="delete-btn"
                      onClick={() => handleRemove(item.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-actions">
              <button className="continue-shopping-btn" onClick={handleContinueShopping}>
                Continue Shopping
              </button>
              <button className="checkout-btn" onClick={handleCheckout}>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
