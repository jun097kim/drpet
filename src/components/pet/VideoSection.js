import React from "react";
import "./VideoSection.scss";
import VideoImage from "static/images/pet/video.png";

const VideoSection = () => {
  return (
    <div className="VideoSection">
      <div className="container content">
        <img src={VideoImage} alt="video" />
        <div>
          <p className="title">Why Dr.Pet ?</p>
          You can save time and money.
          <br />
          You can receive pet's health at home.
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
