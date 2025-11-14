import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { plantsData } from '../data/plantsData';
import { addToCart } from '../redux/cartSlice';
import Header from './Header';
import './ProductListing.css';

const ProductListing = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  
  // Group plants by category
  const categories = [...new Set(plantsData.map(plant => plant.category))];
  
  const isInCart = (plantId) => {
    return cartItems.some(item => item.id === plantId);
  };
  
  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
  };

  return (
    <div className="product-listing-page">
      <Header />
      <div className="products-container">
        <h1 className="page-title">Our Plants Collection</h1>
        
        {categories.map(category => (
          <div key={category} className="category-section">
            <h2 className="category-title">{category}s</h2>
            <div className="plants-grid">
              {plantsData
                .filter(plant => plant.category === category)
                .map(plant => (
                  <div key={plant.id} className="plant-card">
                    <img src={plant.image} alt={plant.name} className="plant-image" />
                    <div className="plant-info">
                      <h3 className="plant-name">{plant.name}</h3>
                      <p className="plant-price">${plant.price.toFixed(2)}</p>
                      <button
                        className={`add-to-cart-btn ${isInCart(plant.id) ? 'disabled' : ''}`}
                        onClick={() => handleAddToCart(plant)}
                        disabled={isInCart(plant.id)}
                      >
                        {isInCart(plant.id) ? 'Added to Cart' : 'Add to Cart'}
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
