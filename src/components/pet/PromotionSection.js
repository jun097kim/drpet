import React from "react";
import Coupon1 from "static/images/pet/coupon1.png";
import Coupon2 from "static/images/pet/coupon2.png";
import Coupon3 from "static/images/pet/coupon3.png";
import "./PromotionSection.scss";

const PromotionSection = () => {
  return (
    <div className="PromotionSection" id="promotion">
      <div className="container content">
        <p className="title">Promotion</p>
        <img src={Coupon1} alt="coupon1" />
        <img src={Coupon2} alt="coupon2" />
        <img src={Coupon3} alt="coupon3" />
      </div>
    </div>
  );
};

export default PromotionSection;
