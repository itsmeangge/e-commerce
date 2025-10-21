import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="image-container">
        <img src={product.image} alt={product.name} className="product-image" />
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="product-price">₱{product.price}</p>
        <Link to={`/product/${product.id}`} className="view-details-link">
          View Details
        </Link>
        <button className="add-to-cart-btn">Add to cart</button>
      </div>
    </div>
  );
};

export default ProductCard;