import React from "react";
import "./WhatSection.scss";

const WhatSection = () => {
  return (
    <div className="WhatSection" id="what">
      <div className="container content">
        <p className="title">What is Dr.Pet?</p>
        <div className="content">
          <p>
            Dr.Pet connects pet owner and vet. You can check the pet owner’s
            diagnosis request and respond the report any time.
          </p>
          <p>You can get a certain profit every time you make a diagnosis.</p>
        </div>
      </div>
    </div>
  );
};

export default WhatSection;
