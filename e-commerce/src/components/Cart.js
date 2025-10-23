import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Cart.css';

const Cart = () => {
  const {
    cartItems,
    updateQuantity,
    removeItem,
    clearCart,
    getTotalItems,
    getTotalPrice
  } = useCart();

  const totalPrice = getTotalPrice();
  const shippingCost = 5.99;
  const taxRate = 0.08;
  const taxAmount = totalPrice * taxRate;
  const finalTotal = totalPrice + shippingCost + taxAmount;

  if (cartItems.length === 0) {
    return (
      <div className="cart-container">
        <div className="empty-cart">
          <h2>Your Shopping Cart is Empty</h2>
          <p>Discover amazing products and add them to your cart.</p>
          <Link to="/products" className="continue-shopping-btn">
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h1>Shopping Cart</h1>
        <div className="cart-stats">
          <span className="item-count">{getTotalItems()} items</span>
          <button onClick={clearCart} className="clear-cart-btn">
            Clear All
          </button>
        </div>
      </div>

      <div className="cart-content">
        <div className="cart-items-section">
          {cartItems.map((item) => (
            <div key={`${item.id}-${item.color}-${item.size}`} className="cart-item">
              <div className="item-image">
                <img src={item.image} alt={item.name} />
              </div>

              <div className="item-info">
                <h3 className="item-name">{item.name}</h3>
                <div className="item-variants">
                  <span className="variant">Color: {item.color}</span>
                  <span className="variant">Size: {item.size}</span>
                </div>
                <p className="item-price">₱{item.price.toFixed(2)}</p>
              </div>

              <div className="quantity-section">
                <div className="quantity-controls">
                  <button
                    onClick={() => updateQuantity(item.id, item.color, item.size, item.quantity - 1)}
                    className="quantity-btn"
                    disabled={item.quantity <= 1}
                  >
                    −
                  </button>
                  <span className="quantity-display">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.color, item.size, item.quantity + 1)}
                    className="quantity-btn"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeItem(item.id, item.color, item.size)}
                  className="remove-item-btn"
                >
                  Remove
                </button>
              </div>

              <div className="item-total">
                ₱{(item.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h3>Order Summary</h3>
          <div className="summary-line">
            <span>Subtotal ({getTotalItems()} items):</span>
            <span>₱{totalPrice.toFixed(2)}</span>
          </div>
          <div className="summary-line">
            <span>Shipping:</span>
            <span>₱{shippingCost.toFixed(2)}</span>
          </div>
          <div className="summary-line">
            <span>Tax:</span>
            <span>₱{taxAmount.toFixed(2)}</span>
          </div>
          <div className="summary-total">
            <span>Total:</span>
            <span>₱{finalTotal.toFixed(2)}</span>
          </div>

          <Link to="/checkout" className="checkout-btn">
            Proceed to Checkout
          </Link>

          <Link to="/products" className="continue-shopping-link">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;