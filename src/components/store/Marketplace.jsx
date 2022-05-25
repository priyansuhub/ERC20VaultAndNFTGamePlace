import React from "react";
import NavBar from "../navbar/NavBar";
import "./store.scss";
const Marketplace = () => {
  return (
    <div className="storeContainer">
      <NavBar />
      <div className="innerCont">
        <div className="header">
          <h2>Welcome to Priyansu's NFT MarketPlace</h2>
        </div>
        <div className="viewModel">
          <div className="left">ABC</div>
          <div className="right"></div>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
