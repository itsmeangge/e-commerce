import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './ProductList.css';

import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";

const ProductList = () => {
  const { addToCart } = useCart();

  const products = [
    { 
      id: 1,
      name: "HashCravel Limited Edition", 
      price: 799, 
      image: product1,
    },
    {
      id: 2,
      name: "ATHPREP ERA", 
      price: 899, 
      image: product2,
    },
    {
      id: 3,
      name: "GAMER f. Football Shirt", 
      price: 599, 
      image: product3,
    },
  ];

  const handleAddToCart = (product) => {
    addToCart(product, 'Default', 'M');
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="product-list-page">
      <h1 className="page-title">Our Products</h1>
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">₱{product.price}</p>
              <div className="product-actions">
                <Link to={`/product/${product.id}`} className="view-details">
                  View Details
                </Link>
                <button 
                  onClick={() => handleAddToCart(product)}
                  className="add-to-cart-btn"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;