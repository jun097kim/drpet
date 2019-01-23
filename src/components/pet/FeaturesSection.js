import React from "react";
import "./FeaturesSection.scss";
import CustomerIcon from "static/images/pet/customer.png";
import DiagnosisIcon from "static/images/pet/diagnosis.png";
import ReportIcon from "static/images/pet/report.png";

const FeaturesSection = () => {
  return (
    <div className="FeaturesSection" id="features">
      <div className="container content">
        <div>
          <img src={CustomerIcon} alt="customer" />
          <p className="title">Report</p>
          Record the state of puppy. If any abnormality, record it with picture
        </div>
        <div>
          <img src={DiagnosisIcon} alt="diagnosis" />
          <p className="title">Remote Diagnose</p>
          Through ongoing record, vet periodically their health remotely and
          diagnose them.
        </div>
        <div>
          <img src={ReportIcon} alt="report" />
          <p className="title">Community</p>
          If you want to share information about your pet, use community
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
