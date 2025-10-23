import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';  
import './ProductDetails.css';
import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();  
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  
  const products = [
  {
    id: 1,
    name: "HashCravel Limited Edition", 
    price: 799, 
    image: product1,
    description: "Black and white athletic jersey with unique side panels, designed for high performance and durability. Available in sizes S to XL.",
    colors: ['Blue', 'Black', 'Dark Gray'],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 2,
    name: "ATHPREP ERA Jersey", 
    price: 899, 
    image: product2, 
    description: "Vintage-inspired white and brown athletic t-shirt. Features a classic collar and premium breathable fabric, perfect for casual wear or training.",
    colors: ['Blue', 'Black', 'Dark Gray'],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 3,
    name: "GAMER f. Football Shirt", 
    price: 599, 
    image: product3, 
    description: "Classic white v-neck jersey with dark trim and logo. Lightweight and comfortable, offering a sporty look for everyday activities.",
    colors: ['Blue', 'Black', 'Dark Gray'],
    sizes: ['S', 'M', 'L', 'XL']
  }
];

  const product = products[id] || products[1];

  
  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      alert('Please select both color and size');
      return;
    }
    
    addToCart(product, selectedColor, selectedSize);  // USE addToCart HERE
    alert(`${product.name} (${selectedColor}, ${selectedSize}) added to cart!`);
  };

  return (
    <div className="product-details">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h1>{product.name}</h1>
        <p className="price">${product.price}</p>
        <p className="description">{product.description}</p>
        
        <div className="color-selection">
          <h3>Color:</h3>
          <div className="color-options">
            {product.colors.map(color => (
              <button 
                key={color}
                className={`color-option ${selectedColor === color ? 'active' : ''}`}
                onClick={() => setSelectedColor(color)}
              >
                {color}
              </button>
            ))}
          </div>
        </div>
        
        <div className="size-selection">
          <h3>Size:</h3>
          <div className="size-options">
            {product.sizes.map(size => (
              <button 
                key={size}
                className={`size-option ${selectedSize === size ? 'active' : ''}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        
        <div className="action-buttons">
          <button 
            onClick={handleAddToCart}  // THIS CALLS THE UPDATED FUNCTION
            className="add-to-cart"
            disabled={!selectedColor || !selectedSize}
          >
            Add to Cart
          </button>
          <Link to="/products" className="back-to-products">
            Back to Products
          </Link>
        </div>

        {(!selectedColor || !selectedSize) && (
          <p className="selection-warning">Please select both color and size</p>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;