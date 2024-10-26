import React from 'react';
import './Hero.scss';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div 
          className="textContainer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Cresto Johnson Lima
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Web Developer
          </motion.h1>
          <motion.div 
            className="buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button>See the latest work</button>
            <button>Contact Me</button>
          </motion.div>
        </motion.div>
        <motion.div 
          className="imageContainer"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />
      </div>
    </div>
  );
}