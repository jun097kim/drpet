import React from "react";
import "./AboutSection.scss";
import DogCat from "static/images/pet/dog-cat.png";

const AboutSection = () => {
  return (
    <div className="AboutSection" id="about">
      <div className="container content">
        <img src={DogCat} alt="dog-cat" />
        <div>
          <p className="title">Check your pet's health at your home</p>
          Dr.Pet lets you report your status of pet and send periodically to
          vet. Vets will diagnose your pet exactly.
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
