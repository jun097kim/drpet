import React from "react";
import "./VetTemplate.scss";
import Footer from "components/base/Footer";

import Logo from "static/images/logo.svg";
import ArrowRight from "static/images/arrow-right.svg";
import WhatSection from "./WhatSection";
import SloganSection from "./SloganSection";
import WhySection from "./WhySection";

const VetTemplate = () => {
  return (
    <div className="VetTemplate">
      <div className="top">
        <div className="nav">
          <a href="/">
            <img src={Logo} alt="logo" />
          </a>
          <div className="nav-right">
            <ul>
              <li>
                <a href="#what">What is Dr.Pet?</a>
              </li>
              <li>
                <a href="#why">Why Dr.Pet?</a>
              </li>
            </ul>
            <div className="btn">SIGN UP</div>
          </div>
        </div>

        <div className="slogan">Meet pet owner easier whenever you want</div>
        <div className="detail">
          The pet owner requests a diagnosis, and the veterinarian responds to
          the request
        </div>

        <div className="action">
          <input placeholder="Email" />
          <input placeholder="Password" />
          <div className="btn">SIGN IN</div>
        </div>
      </div>

      <WhatSection />
      <SloganSection />
      <WhySection />

      <Footer>
        <div className="left">
          <div className="title">We’re here to help</div>
        </div>
        <div className="right">
          <div className="comment">
            Support is just a few taps away. You can also get your questions
            answered by using our help section.
          </div>
          <div className="help">
            Get Help <img src={ArrowRight} alt="right" />
          </div>
        </div>
      </Footer>
    </div>
  );
};

export default VetTemplate;
