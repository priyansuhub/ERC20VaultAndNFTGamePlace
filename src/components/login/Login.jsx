import React, { useContext } from "react";
import "./login.scss";
import SvgDoughNut from "./doughnut.svg";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Obj } from "../../context/ConnectMetamask";
const Login = () => {
  const { account, connectMetamask, changeAccount } = useContext(Obj);
  window.ethereum.on("accountsChanged", changeAccount);
  return (
    <div className="login">
      <motion.div
        className="loginNav"
        animate={{ opacity: 1 }}
        initial={{ opacity: 0.0 }}
        transition={{ type: "tween", duration: 0.5 }}
      >
        <div className="text">
          <NavLink to="/home">
            <motion.a whileHover={{ scale: 0.9 }} whileTap={{ scale: 1 }}>
              Your account is:{account}
            </motion.a>
          </NavLink>
        </div>
      </motion.div>
      <div className="mainLoginCont">
        <div className="btnMain">
          <motion.button
            className="btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={connectMetamask}
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
