import React from "react";
import GooglePlayIcon from "static/images/pet/googleplay.png";
import AppStoreIcon from "static/images/pet/appstore.png";
import "./GetStartedSection.scss";

const GetStartedSection = () => {
  return (
    <div className="GetStartedSection" id="get-started">
      <div className="container content">
        <p className="title">Get Started</p>
        <div className="list">
          <img src={GooglePlayIcon} alt="googleplay" />
          <img src={AppStoreIcon} alt="appstore" />
        </div>
      </div>
    </div>
  );
};

export default GetStartedSection;
