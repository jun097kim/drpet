import React from "react";
import { Link } from "react-router-dom";
import "./LandingTemplate.scss";
import Footer from "components/base/Footer";

import Logo from "static/images/logo.svg";
import AppStore from "static/images/app-store.svg";
import GooglePlay from "static/images/google-play.png";

const LandingTemplate = () => {
  return (
    <div className="LandingTemplate">
      <div className="top">
        <div className="nav">
          <a href="/">
            <img src={Logo} alt="logo" />
          </a>
          <ul>
            <li>PET OWNER</li>
            <li>VET</li>
          </ul>
        </div>

        <div className="slogan">Meet vet the fastest</div>

        <div className="action">
          <div className="btn">MEET VET</div>
          <Link to="/vet">If you are vet, click here.</Link>
        </div>
      </div>

      <Footer>
        <div className="left">
          <div>
            <div className="title">PET OWNER</div>
            <ul>
              <li>About Dr.Pet</li>
              <li>Features</li>
              <li>News</li>
              <li>Get Started</li>
            </ul>
          </div>
          <div>
            <div className="title">VET</div>
            <ul>
              <li>Sign up to Vet</li>
              <li>What is Dr.Pet?</li>
              <li>Why Dr.Pet?</li>
            </ul>
          </div>
        </div>
        <div className="right">
          <div className="title">DOWNLOAD</div>
          <div className="app">
            <img src={AppStore} alt="app-store" />
            <img src={GooglePlay} alt="google-play" />
          </div>
        </div>
      </Footer>
    </div>
  );
};

export default LandingTemplate;
