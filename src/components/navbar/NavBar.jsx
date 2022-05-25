import React from "react";
import "./nav.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import PersonIcon from "@mui/icons-material/Person";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
const NavBar = () => {
  return (
    <div className="navCont">
      <div className="name">
        <h4>Priyansu Rath</h4>
      </div>
      <div className="socials">
        <GitHubIcon className="icons" />
        <TwitterIcon className="icons" />
        <LinkedInIcon className="icons" />
      </div>
      <div className="personal">
        <NavLink to="/">
          <motion.div
            className="circle"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", damping: 3 }}
          >
            <VpnKeyIcon />
          </motion.div>
        </NavLink>
        <NavLink to="/profile">
          <motion.div
            className="circle login"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", damping: 3 }}
          >
            <PersonIcon />
          </motion.div>
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
