import React from "react";
import { Link } from "react-router-dom";
import "./HomeTemplate.scss";
import Footer from "components/base/Footer";

import Logo from "static/images/logo.svg";
import AppStore from "static/images/app-store.svg";
import GooglePlay from "static/images/google-play.png";

const HomeTemplate = () => {
  return (
    <div className="HomeTemplate">
      <div className="top">
        <div className="nav">
          <a href="/">
            <img src={Logo} alt="logo" />
          </a>
          <ul>
            <li>
              <Link to="/pet">PET OWNER</Link>
            </li>
            <li>
              <Link to="/vet">VET</Link>
            </li>
          </ul>
        </div>

        <div className="slogan">Meet vet the fastest</div>

        <div className="action">
          <Link to="/pet" className="btn">
            MEET VET
          </Link>
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

export default HomeTemplate;
