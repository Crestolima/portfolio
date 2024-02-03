import React from 'react';
import "./contact.scss";
import { animate, motion } from "framer-motion";

const variants = {
  initial: {
    y: 500,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1, // Increased duration to make it slower
      staggerChildren: 0.1,
    },
  },
};

function Contact() {
  return (
    <motion.div className='contact' variants={variants} initial="initial" animate="animate">
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Lets Connect Together</motion.h1>

        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>crestolima67@gmail.com</span>
        </motion.div>

        <motion.div className="item" variants={variants}>
          <h2>Address</h2>
          <span>Bengaluru</span>
        </motion.div>

        <motion.div className="item" variants={variants}>
          <h2>Phone</h2>
          <span>7022130878</span>
        </motion.div>
      </motion.div>

      <motion.div className="formContainer" variants={variants}>
        <motion.form action="" variants={variants}>
          <input type="text" required placeholder='Name' />
          <input type="email" required placeholder='Email' />
          <textarea rows={8} placeholder='Message' required/>
          <button>Submit</button>
        </motion.form>
      </motion.div>
    </motion.div>
  );
}

export default Contact;
