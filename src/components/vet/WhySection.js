import React from "react";
import "./WhySection.scss";
import Card from "components/common/Card";
import CustomerIcon from "static/images/customer.svg";
import MoneyIcon from "static/images/money.svg";
import CommunityIcon from "static/images/community.svg";

const WhySection = () => {
  return (
    <div className="WhySection" id="why">
      <div className="container content">
        <p className="title">Why Dr.Pet?</p>
        <div className="cards">
          <Card
            title="Meet More Customers"
            image={<img src={CustomerIcon} alt="customer" />}
            color="blue"
          >
            Meet pet owners who need help around the world easily
          </Card>
          <Card
            title="Make More Money"
            image={<img src={MoneyIcon} alt="money" />}
            color="yellow"
          >
            Make extra money in extra time with Dr.Pet
          </Card>
          <Card
            title="Best Community"
            image={<img src={CommunityIcon} alt="community" />}
            color="red"
          >
            Meet your potential customer in the community
          </Card>
        </div>
      </div>
    </div>
  );
};

export default WhySection;
