import React, { useContext, useEffect } from "react";
import { Obj } from "../../context/ConnectMetamask";
import NavBar from "../navbar/NavBar";
import Jhula from "./jhula.svg";
import "./game.scss";
import { motion } from "framer-motion";
import { ContractContext } from "../../context/ContractContext";

const Game = () => {
  const { contract } = useContext(ContractContext);
  const { account, connectMetamask, changeAccount } = useContext(Obj);
  window.ethereum.on("accountsChanged", changeAccount);

  async function True() {
    await contract.methods
      .playGuessGame(true)
      .send({ from: "0x6Ad408cF564e4e282968b4c1A1DC83f606D4156B" });
    const val = await contract.events.ShowData();
    console.log(val);
  }
  async function False() {
    await contract.methods
      .playGuessGame(false)
      .send({ from: "0x6Ad408cF564e4e282968b4c1A1DC83f606D4156B" });
    const val = await contract.events.ShowData();
    console.log(val);
  }

  return (
    <div className="gameContainer">
      <NavBar />
      <div className="gameInner">
        <img src={Jhula} />
        <div className="gameInnerCont">
          <div className="contentGame">
            <h2>Play game choose True/False to mint nft</h2>
            <div className="buttonCont">
              <motion.button
                animate={{ scale: 1.0 }}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "#82DBD8",
                  border: "6px solid #1C658C",
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", damping: 3 }}
                onClick={True}
              >
                True
              </motion.button>
              <motion.button
                className="forFalse"
                animate={{ scale: 1.0 }}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "#FAD4D4",
                  border: "6px solid #F47C7C",
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", damping: 3 }}
                onClick={False}
              >
                False
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
