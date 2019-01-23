import React from "react";
import "./StatisticSection.scss";

const StatisticSection = () => {
  return (
    <div className="StatisticSection">
      <div className="container content">
        <p className="title">High expense about visiting veterinarian office</p>
        <div className="content">
          <div className="left">
            According to report, having a pet can cost you over{" "}
            <strong>
              $1,000 in the first year, and well over $500 each additional year.
            </strong>{" "}
            Depending on sudden medical expenses, the costs could be much
            higher.
          </div>
          <div className="graph">
            <div className="data-2009">
              <div />
              <span className="year">2009</span>
              $50
            </div>
            <div className="data-2018">
              <div />
              <span className="year">2018</span>
              $175
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticSection;
