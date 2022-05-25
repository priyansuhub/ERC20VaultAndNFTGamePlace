import React from "react";
import NavBar from "../navbar/NavBar";
import Jhula from "./jhula.svg";
import "./game.scss";
import { motion } from "framer-motion";
const Game = () => {
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
