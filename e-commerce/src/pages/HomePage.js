import React from "react";
import homepageBg from "../assets/homepage-bg.jpg";

const HomePage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${homepageBg})`,
        backgroundSize: "cover",           
        backgroundPosition: "center",      
        backgroundRepeat: "no-repeat",     
        height: "90vh",                   
        width: "100%",                    
        display: "flex",
        alignItems: "center",              
        justifyContent: "flex-start",      
        color: "white",
        textShadow: "0 2px 6px rgba(0,0,0,0.7)",
        paddingLeft: "60px",               
        boxSizing: "border-box",
      }}
    >
      <div style={{ maxWidth: "500px", textAlign: "left" }}>
        <h2 style={{ fontSize: "1.9rem", lineHeight: "1.5" }}>
          Redefine your wardrobe with timeless pieces from WearDistrict.
        </h2>
      </div>
    </div>
  );
};

export default HomePage;
