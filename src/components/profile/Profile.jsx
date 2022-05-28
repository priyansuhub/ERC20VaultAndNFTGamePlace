import React, { useContext, useState } from "react";
import NavBar from "../navbar/NavBar";
import "./profile.scss";
import Gareeb from "./gareeb.svg";
import EtherWala from "./etherwala.svg";
import UttarPardes from "./uttarpardes.svg";
import Pc from "./pc/Pc";
import { ContractContext } from "../../context/ContractContext";
const Profile = () => {
  let [array, setArray] = useState([]);
  const { contract } = useContext(ContractContext);
  function ncard(value, id) {
    return <Pc id={value} />;
  }

  async function checkValue() {
    setArray([]);
    const value = await contract.methods
      .returnArray("0x6Ad408cF564e4e282968b4c1A1DC83f606D4156B")
      .call();
    setArray(value);
  }
  return (
    <div className="profileContainer">
      <NavBar />
      <div className="middleContainer">
        <div className="left">
          <img className="leftimg" src={EtherWala}></img>
        </div>
        <div className="middle">
          <img className="middleImg" src={UttarPardes}></img>
        </div>
        <div className="displayOwned">{array.map(ncard)}</div>
        <div className="right">
          <img className="rightimg" src={Gareeb}></img>
        </div>
        <button className="floating" onClick={checkValue}></button>
      </div>
    </div>
  );
};

export default Profile;
