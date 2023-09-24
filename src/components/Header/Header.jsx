import React from "react";
import "./Header.css";
import ListComp from "../ListComp";

const Header = () => {
  return (
    <>
      <div className="hero">
        <div className="left">
          <h1 className="hero-heading">Creative Solutions For Your Business</h1>
          <p className="hero-para">
            We are team of Technical Experts for providing high-quality
            services.
          </p>
          <button className="hero-btn">Get Started</button>
        </div>
        <div className="right">
          <img
            src="https://www.cssewa.com/assets/img/hero-img1.png"
            alt=""
            className="hero-img"
          />
        </div>
      </div>
      <ListComp />
    </>
  );
};

export default Header;
