import React from "react";
import "./login.scss";
import SvgDoughNut from "./doughnut.svg";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <motion.div
        className="loginNav"
        animate={{ opacity: 1 }}
        initial={{ opacity: 0.0 }}
        transition={{ type: "tween", duration: 0.5 }}
      >
        <h2>Your account is: </h2>
      </motion.div>
      <div className="mainLoginCont">
        <div className="btnMain">
          <motion.button
            className="btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Connect
          </motion.button>
        </div>
        <motion.img
          className="image"
          src={SvgDoughNut}
          animate={{ scale: 1, opacity: 1 }}
          initial={{ scale: 0.0, opacity: 0.0 }}
          transition={{ type: "just", duration: 1 }}
        ></motion.img>
      </div>
    </div>
  );
};

export default Login;
