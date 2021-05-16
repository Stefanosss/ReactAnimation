import React from "react";
import { Link } from "react-router-dom";
import { animate, motion } from "framer-motion";
import Racket from "../Racket/racket";
import Shuttle from "../Shuttle/shuttle";

import "./badminton.css";
const Badminton = () => {
  let shuttleVariant = {
    animate: { x: [-1060, 0], y: [0, -100, 0], transition: { yoyo: Infinity } },
  };

  let rightRacketInit = {
    animate: {
      y: 0,
    },
    initial: {
      rotate: -45,
      y: 600,
    },
  };

  let rightRacketVariant = {
    animate: {
      x: [0, 550],
      rotate: [0, -250],
      transition: {
        delay: 2,
      },
    },
  };

  let rightRacketAttack = {
    animate: {
      rotate: -20,
      y: [0, 50],
      transition: {
        delay: 3.9,
        yoyo: Infinity,
        duration: 0.5,
      },
    },
  };

  let leftRacketInit = {
    animate: {
      y: 0,
    },
    initial: {
      rotate: 135,
      y: 600,
    },
  };

  let leftRacketVariant = {
    animate: {
      x: [-0, -550],
      y: [0, -160],
      rotate: [0, 250],
      transition: {
        delay: 2,
      },
    },
  };

  let leftRacketAttack = {
    animate: {
      rotate: 20,
      y: [0, 50],
      transition: {
        delay: 4.5,
        yoyo: Infinity,
        duration: 0.5,
      },
    },
  };

  return (
    <div className="badminton">
      <motion.div variants={shuttleVariant} animate="animate" className="shuttle">
        <Shuttle />
      </motion.div>

      <motion.div className="racket1" variants={rightRacketVariant} animate="animate">
        <motion.div variants={rightRacketAttack} animate="animate">
          <motion.div variants={rightRacketInit} initial="initial" animate="animate">
            <Racket />
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div className="racket2" variants={leftRacketVariant} animate="animate">
        <motion.div variants={leftRacketAttack} animate="animate">
          <motion.div variants={leftRacketInit} initial="initial" animate="animate">
            <Racket />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Badminton;
