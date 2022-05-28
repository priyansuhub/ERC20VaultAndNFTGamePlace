import React, { useContext, useState } from "react";
import Card from "../card/Card";
import NavBar from "../navbar/NavBar";
import "./store.scss";
import Unicorn from "./unicorn.svg";
import { ContractContext } from "../../context/ContractContext";
import { Contract } from "../../Contract";
import { Obj } from "../../context/ConnectMetamask";
const Marketplace = () => {
  let [array, setArray] = useState([]);
  const { contract } = useContext(ContractContext);

  function ncard(value, id) {
    return <Card id={value} />;
  }

  async function checkValue() {
    setArray([]);
    const value = await contract.methods.returnArray(Contract).call();
    setArray(value);
  }
  return (
    <div className="storeContainer">
      <NavBar />
      <div className="innerCont">
        <div className="header">
          <h2 onClick={checkValue}>Welcome to Priyansu's NFT MarketPlace</h2>
        </div>
        <div className="viewModel">
          <div className="left">
            <div className="innerLeft">{array.map(ncard)}</div>
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
