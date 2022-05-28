import React from "react";
import "./pc.scss";
const Pc = (props) => {
  return (
    <div className="pcContainer">
      <h1>{props.id}</h1>
    </div>
  );
};

export default Pc;
