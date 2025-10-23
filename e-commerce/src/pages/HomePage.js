import React from "react";
import homepageBg from "../assets/homepage-bg.jpg";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div 
      className="homepage"
      style={{ backgroundImage: `url(${homepageBg})` }}
    >
      <div className="hero-content">
        <h2 className="hero-title">
          Redefine your wardrobe with timeless pieces from WearDistrict.
        </h2>
        {/* REMOVED: Shop Collection button */}
      </div>
    </div>
  );
};

export default HomePage;