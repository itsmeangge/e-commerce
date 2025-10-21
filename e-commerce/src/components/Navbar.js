import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "#555",
        padding: "15px 70px",
      }}
    >
      <div style={{ color: "white", fontSize: "2.5rem", fontWeight: "500" }}>
        WearDistrict
      </div>

      <div style={{ flex: 1, textAlign: "center" }}>
        <input
          type="text"
          placeholder="What are you looking for?"
          style={{
            width: "60%",
            padding: "13px 25px",
            borderRadius: "10px",
            border: "none",
            outline: "none",
          }}
        />
      </div>

      <div>
        <Link
          to="/"
          style={{
            fontSize: "1.5rem",
            color: "white",
            marginRight: "20px",
            fontWeight: location.pathname === "/" ? "bold" : "normal",
            textDecoration: "none",
          }}
        >
          Home
        </Link>
        <Link
          to="/about"
          style={{
            fontSize: "1.5rem",
            color: "white",
            marginRight: "20px",
            textDecoration: "none",
          }}
        >
          About
        </Link>
        <Link
          to="/product"
          style={{
            fontSize: "1.5rem",
            color: "white",
            marginRight: "20px",
            textDecoration: "none",
          }}
        >
          Product
        </Link>
        <Link
          to="/cart"
          style={{
            fontSize: "1.5rem",
            color: "white",
            textDecoration: "none",
          }}
        >
          Cart
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
