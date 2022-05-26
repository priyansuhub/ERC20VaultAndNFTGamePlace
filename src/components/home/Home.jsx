import React from "react";
import NavBar from "../navbar/NavBar";
import "./home.scss";
import Btc from "./btc.svg";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <div className="homeContainer">
      <NavBar />
      <div className="middle">
        <img src={Btc} />
      </div>
      <div className="buttonCont">
        <motion.div className="testBuddy">
          <motion.button
            animate={{ scale: 1.0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", damping: 3 }}
          >
            Mint NFT
          </motion.button>
          <motion.button
            animate={{ scale: 1.0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", damping: 3 }}
          >
            Proposals
          </motion.button>
          <NavLink to="/game">
            <motion.button
              animate={{ scale: 1.0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", damping: 3 }}
            >
              NFT Game
            </motion.button>
          </NavLink>
          <NavLink to="/store">
            <motion.button
              animate={{ scale: 1.0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", damping: 3 }}
            >
              View Market
            </motion.button>
          </NavLink>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
