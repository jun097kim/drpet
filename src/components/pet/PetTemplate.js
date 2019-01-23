import React from "react";
import AboutSection from "./AboutSection";
import FeaturesSection from "./FeaturesSection";
import GetStartedSection from "./GetStartedSection";
import Logo from "static/images/logo.svg";
import "./PetTemplate.scss";
import VideoSection from "./VideoSection";
import PetFooter from "./PetFooter";
import PromotionSection from "./PromotionSection";
import StatisticSection from "./StatisticSection";

const PetTemplate = () => {
  return (
    <div className="PetTemplate">
      <div className="top">
        <div className="nav">
          <a href="/">
            <img src={Logo} alt="logo" />
          </a>
          <div className="nav-right">
            <ul>
              <li>
                <a href="#about">About Dr.Pet?</a>
              </li>
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#promotion">Promotion</a>
              </li>
              <li>
                <a href="#get-started">Get Started</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <AboutSection />
      <FeaturesSection />
      <VideoSection />
      <StatisticSection />
      <PromotionSection />
      <GetStartedSection />
      <PetFooter />
    </div>
  );
};

export default PetTemplate;
