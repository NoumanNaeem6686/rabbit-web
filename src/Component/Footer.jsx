import React from "react";
import {NavLink} from "react-router-dom";
import "../Styling/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container flex-column d-flex align-items-center">
        <div className="div-block">
          <NavLink to={"https://phoenix-browser.com/"} >Privacy Policy</NavLink>
          <div className="footer-space">|</div>
          <NavLink to={"https://phoenix-browser.com/"} >Terms of Service</NavLink>
        </div>
        <span className="footer-para m-0 text-center">
          © Copyright 2025 Cloudview Technology. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
