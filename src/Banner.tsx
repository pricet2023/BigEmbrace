import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner">
      <span className="banner-text">The Big Embrace</span>
      <div className="banner-buttons">
        <Link to="/resources" className="banner-button">
          Resources
        </Link>
        <Link to="/about" className="banner-button">
          About
        </Link>
        <Link to="/contact" className="banner-button">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Banner;
