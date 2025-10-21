import React from "react";
import { useParams, Link } from "react-router-dom";
import products from "../data/products";
import "./ProductDetails.css";

const ProductDetail = () => {
  const { id } = useParams();
  
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="product-details-container not-found">
        <p>Product not found.</p>
        <Link to="/product" className="back-link">
          ← Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="product-details-container">
      <div className="product-details-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-details-info">
        <h2 className="product-name">{product.name}</h2>
        <p className="product-price-large">₱{product.price}</p>
        
        <div className="description-box">
            <h3>Description</h3>
            <p className="product-description">{product.description}</p>
        </div>
        
        <button className="add-to-cart-details-btn">Add to Cart</button>

        <Link to="/product" className="back-link">
          ← Back to Products
        </Link>
      </div>
    </div>
  );
};

export default ProductDetail;