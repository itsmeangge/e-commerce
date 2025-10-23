import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="nav-brand">WearDistrict</div>

      <div className="nav-search">
        <input
          type="text"
          placeholder="What are you looking for?"
          className="search-input"
        />
      </div>

      <div className="nav-links">
        <Link 
          to="/" 
          className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
        >
          Home
        </Link>
        <Link 
          to="/about" 
          className="nav-link"
        >
          About
        </Link>
        <Link 
          to="/products" 
          className={`nav-link ${location.pathname === "/products" ? "active" : ""}`}
        >
          Product
        </Link>
        <Link 
          to="/cart" 
          className={`nav-link ${location.pathname === "/cart" ? "active" : ""}`}
        >
          Cart
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;