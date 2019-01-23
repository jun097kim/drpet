import React from "react";
import classNames from "classnames";
import "./Card.scss";

const Card = ({ image, title, color, children }) => {
  return (
    <div className={classNames(`Card ${color}`)}>
      {image}
      <p className="title">{title}</p>
      {children}
    </div>
  );
};

export default Card;
