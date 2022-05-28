import React from "react";
import "./card.scss";
const Card = (props) => {
  return (
    <div className="one">
      <h1>{props.id}</h1>
    </div>
  );
};

export default Card;
