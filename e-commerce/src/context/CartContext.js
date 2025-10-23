// context/CartContext.js
import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.items.find(
        item => 
          item.id === action.payload.id && 
          item.color === action.payload.color && 
          item.size === action.payload.size
      );
      
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id && 
            item.color === action.payload.color && 
            item.size === action.payload.size
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }]
      };
    
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id && 
          item.color === action.payload.color && 
          item.size === action.payload.size
            ? { ...item, quantity: action.payload.quantity }
            : item
        ).filter(item => item.quantity > 0)
      };
    
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item =>
          !(item.id === action.payload.id && 
            item.color === action.payload.color && 
            item.size === action.payload.size)
        )
      };
    
    case 'CLEAR_CART':
      return {
        ...state,
        items: []
      };
    
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  const addToCart = (product, color, size) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: { ...product, color, size }
    });
  };

  const updateQuantity = (id, color, size, quantity) => {
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: { id, color, size, quantity }
    });
  };

  const removeItem = (id, color, size) => {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: { id, color, size }
    });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const getTotalItems = () => {
    return state.items.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <CartContext.Provider value={{
      cartItems: state.items,
      addToCart,
      updateQuantity,
      removeItem,
      clearCart,
      getTotalItems,
      getTotalPrice
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};