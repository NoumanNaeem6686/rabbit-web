import React from "react";
import {NavLink} from "react-router-dom";
import "../Styling/Home.css";

import Logo from "../assets/Hero/logo.png";
import Hero1 from "../assets/Hero/Hero1.png";
import Hero2 from "../assets/Hero/Hero2.png";
import Hero3 from "../assets/Hero/Hero3.png";
import googleplay from "../assets/Hero/googleplay.png";
import Hero8 from "../assets/Hero/hero8.webp";

const Home = () => {
  return (
    <section className="hero-section">
      <div className="banner-bg">
        <div className="img-pc-bg"></div>
      </div>
      <div className="container">
        <div className="row ">
          <div className="col-12 col-lg-6 ">
            <NavLink className="" to="/">
              <img src={Logo} alt="Logo" className="logo  mx-auto img-fluid" width={'220px'}  />
            </NavLink>
            <div className="home-content">
              <h1>Best Video & Music Downloader</h1>
              <div className="d-flex play-icons-div">
                <div className="d-flex justify-content-center align-items-center">
                  <img
                    src={Hero1}
                    alt="Hero1 "
                    className="img-fluid play-icons imgs"
                  />
                  <div className="media">Video</div>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <img
                    src={Hero2}
                    alt="Hero2"
                    className="img-fluid play-icons imgs"
                  />
                  <div className="media">Music</div>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <img
                    src={Hero3}
                    alt="Hero3"
                    className="img-fluid play-icons imgs"
                  />
                  <div className="media">Image</div>
                </div>
              </div>

              <div className="download-btn">
                <NavLink to={"https://www.google.com/"}>
                  <img
                    src={googleplay}
                    alt="googleplay"
                    className="img-fluid playstore-img "
                  />
                </NavLink>
              </div>
            </div>
          </div>
          <div className=" col-12 col-lg-4 mx-auto">
            <div className="social-media-pic ">
              <img src={Hero8} alt="Hero8" className="img-fluid  " />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
