import React from "react";
import Card from "../card/Card";
import NavBar from "../navbar/NavBar";
import "./store.scss";
import Unicorn from "./unicorn.svg";
const Marketplace = () => {
  return (
    <div className="storeContainer">
      <NavBar />
      <div className="innerCont">
        <div className="header">
          <h2>Welcome to Priyansu's NFT MarketPlace</h2>
        </div>
        <div className="viewModel">
          <div className="left">
            <div className="innerLeft">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
          <div className="right">
            <img className="uni" src={Unicorn} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
