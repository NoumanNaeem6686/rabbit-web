import { NavLink } from "react-router-dom";
import "../Styling/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container flex-column d-flex align-items-center">
        <div className="div-block">
          <NavLink to="/privacy-policy">Privacy Policy</NavLink>
          <div className="footer-space">|</div>
          <NavLink to="/terms-of-service">Terms of Service</NavLink>
        </div>
        <span className="footer-para m-0 text-center">
          © Copyright 2025 Cloudview Technology. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
