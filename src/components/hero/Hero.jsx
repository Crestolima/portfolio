import React from "react";
import "./Hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      repeat: Infinity,
    },
  },
  exit: {
    opacity: 0,
    x: 500,
    transition: {
      duration: 0.5,
    },
  },
  buttonHover: {
    backgroundColor: "white",
    color: "black",
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      duration: 20,
      repeat: Infinity,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 20,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
  exit: {
    opacity: 0,
    x: 500,
    transition: {
      duration: 0.5,
    },
  },
};

function Hero() {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <motion.h2 variants={textVariants}>Cresto Lima</motion.h2>
          <motion.h1 variants={textVariants}>Web Developer</motion.h1>

          <motion.div className="buttons" variants={textVariants}>
            <motion.button
              variants={textVariants}
              whileHover="buttonHover"
            >
              Projects
            </motion.button>
            <motion.button
              variants={textVariants}
              whileHover="buttonHover"
            >
              Contact Me
            </motion.button>
          </motion.div>

          <motion.div
            className="slidingTextContainer"
            variants={sliderVariants}
            initial="initial"
            animate="animate"
          >
            Aspiring Full Stack Web Developer
          </motion.div>
          <div className="imageContainer">
            <motion.img
              variants={textVariants}
              animate="scrollButton"
              src="./scroll.png"
              alt=""
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
