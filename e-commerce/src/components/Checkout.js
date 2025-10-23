import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Checkout.css';

const Checkout = () => {
  const { cartItems, getTotalItems, getTotalPrice, clearCart } = useCart();
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    // Shipping Information
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    phone: '',
    
    // Payment Information
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: ''
  });

  const totalPrice = getTotalPrice();
  const shippingCost = 5.99;
  const taxAmount = totalPrice * 0.08;
  const finalTotal = totalPrice + shippingCost + taxAmount;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNextStep = () => {
    setCurrentStep(prev => prev + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    // In a real app, you would process the payment and order here
    alert('Order placed successfully! Thank you for your purchase.');
    clearCart();
    // Redirect to home or order confirmation page
    window.location.hash = '#/';
  };

  const renderStep1 = () => (
    <div className="checkout-step">
      <h3>Shipping Information</h3>
      
      <div className="form-group">
        <label>Email Address *</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          placeholder="your@email.com"
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>First Name *</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Last Name *</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>

      <div className="form-group">
        <label>Address *</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          required
          placeholder="Street address"
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>City *</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>State *</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>ZIP Code *</label>
          <input
            type="text"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>

      <div className="form-group">
        <label>Phone Number</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="(555) 123-4567"
        />
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="checkout-step">
      <h3>Payment Information</h3>
      
      <div className="form-group">
        <label>Name on Card *</label>
        <input
          type="text"
          name="nameOnCard"
          value={formData.nameOnCard}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Card Number *</label>
        <input
          type="text"
          name="cardNumber"
          value={formData.cardNumber}
          onChange={handleInputChange}
          required
          placeholder="1234 5678 9012 3456"
          maxLength="19"
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Expiry Date *</label>
          <input
            type="text"
            name="expiryDate"
            value={formData.expiryDate}
            onChange={handleInputChange}
            required
            placeholder="MM/YY"
            maxLength="5"
          />
        </div>
        <div className="form-group">
          <label>CVV *</label>
          <input
            type="text"
            name="cvv"
            value={formData.cvv}
            onChange={handleInputChange}
            required
            placeholder="123"
            maxLength="3"
          />
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="checkout-step">
      <h3>Order Review</h3>
      
      <div className="order-review">
        <div className="review-items">
          <h4>Items in Your Order</h4>
          {cartItems.map(item => (
            <div key={`${item.id}-${item.color}-${item.size}`} className="review-item">
              <img src={item.image} alt={item.name} />
              <div className="review-item-info">
                <span className="item-name">{item.name}</span>
                <span className="item-variant">{item.color} • {item.size}</span>
                <span className="item-quantity">Qty: {item.quantity}</span>
              </div>
              <span className="item-price">${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
        </div>

        <div className="order-summary">
          <h4>Order Summary</h4>
          <div className="summary-line">
            <span>Subtotal ({getTotalItems()} items):</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <div className="summary-line">
            <span>Shipping:</span>
            <span>${shippingCost.toFixed(2)}</span>
          </div>
          <div className="summary-line">
            <span>Tax:</span>
            <span>${taxAmount.toFixed(2)}</span>
          </div>
          <div className="summary-total">
            <span>Total:</span>
            <span>${finalTotal.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );

  if (cartItems.length === 0) {
    return (
      <div className="checkout-container">
        <div className="empty-checkout">
          <h2>No Items to Checkout</h2>
          <p>Your cart is empty. Add some products to proceed with checkout.</p>
          <Link to="/products" className="continue-shopping-btn">
            Shop Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <h1 className="checkout-title">Checkout</h1>
      
      <div className="checkout-progress">
        <div className={`progress-step ${currentStep >= 1 ? 'active' : ''}`}>
          <div className="step-number">1</div>
          <span>Shipping</span>
        </div>
        <div className={`progress-step ${currentStep >= 2 ? 'active' : ''}`}>
          <div className="step-number">2</div>
          <span>Payment</span>
        </div>
        <div className={`progress-step ${currentStep >= 3 ? 'active' : ''}`}>
          <div className="step-number">3</div>
          <span>Review</span>
        </div>
      </div>

      <form onSubmit={handleSubmitOrder} className="checkout-form">
        {currentStep === 1 && renderStep1()}
        {currentStep === 2 && renderStep2()}
        {currentStep === 3 && renderStep3()}

        <div className="checkout-actions">
          {currentStep > 1 && (
            <button type="button" onClick={handlePrevStep} className="back-btn">
              Back
            </button>
          )}
          
          {currentStep < 3 ? (
            <button type="button" onClick={handleNextStep} className="next-btn">
              Continue to {currentStep === 1 ? 'Payment' : 'Review'}
            </button>
          ) : (
            <button type="submit" className="place-order-btn">
              Place Order
            </button>
          )}
        </div>
      </form>

      <Link to="/cart" className="back-to-cart">
        ← Return to Cart
      </Link>
    </div>
  );
};

export default Checkout;