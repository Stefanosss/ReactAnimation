import React from "react";
import "./card.css";
import sportbag from "../../assets/sportbag.svg";
import profilepicture from "../../assets/profilepicture.png";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Card = () => {
  const bagVariant = {
    visible: {
      x: [0, -5, 5, -5, 5, 0],
      rotate: [0, -1, 0, 1],
      transition: { delay: 2, yoyo: Infinity },
    },
    hover: {
      scale: 1.03,
    },
    exit: {
      y: 1500,
      transition: { ease: "easeInOut" },
    },
  };

  return (
    <div className="card">
      <Link to="/badminton" setShowBag={false}>
        <motion.div className="wrapper" variants={bagVariant} animate="visible" whileHover="hover" exit="exit">
          <img className="bag" src={sportbag}></img>
          <div className="badge">
            <img className="picture" src={profilepicture}></img>
            <p className="name">Stefanos Stoikos</p>
          </div>
        </motion.div>
      </Link>
    </div>
  );
};

export default Card;
