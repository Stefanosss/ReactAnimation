import React from "react";
import { motion } from "framer-motion";
import shuttle from "../../assets/shuttle.png";
import "./shuttle.css";
const Shuttle = () => {
  let shuttleVariant = {
    initial: {
      rotate: 90,
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 3.5,
      },
    },
  };
  return (
    <div>
      <motion.img variants={shuttleVariant} initial="initial" animate="animate" className="shuttle" src={shuttle}></motion.img>
    </div>
  );
};

export default Shuttle;
