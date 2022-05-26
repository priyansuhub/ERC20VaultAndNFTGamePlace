import React from "react";
import NavBar from "../navbar/NavBar";
import "./profile.scss";
import Gareeb from "./gareeb.svg";
import EtherWala from "./etherwala.svg";
import UttarPardes from "./uttarpardes.svg";
import Pc from "./pc/Pc";

const Profile = () => {
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
        <div className="displayOwned">
          <Pc />
          <Pc />
          <Pc />
        </div>
        <div className="right">
          <img className="rightimg" src={Gareeb}></img>
        </div>
      </div>
    </div>
  );
};

export default Profile;
