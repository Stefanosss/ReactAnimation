import React from "react";
import { motion } from "framer-motion";
import racket from "../../assets/racket.svg";
import "./racket.css";

const Racket = () => {
  return (
    <div>
      <img className="racket" src={racket}></img>
    </div>
  );
};

export default Racket;
