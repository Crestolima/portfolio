import React from 'react';
import './navbar.scss';
import { motion } from 'framer-motion';
import Sidebar from '../sidebar/Links/Sidebar';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-wrapper">
        <Sidebar />
        <motion.span
          className="logo"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Portfolio
        </motion.span>
        <div className="social-links">
          <motion.a 
            href="#" 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src="/facebook.png" alt="Facebook" />
          </motion.a>
          <motion.a 
            href="https://linkedin.com/in/cresto-lima" 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src="/linkedin.png" alt="linkedin" />
          </motion.a>
          <motion.a 
            href="https://github.com/Crestolima" 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src="/github.png" alt="Github" />
          </motion.a>
          <motion.a 
            href="#" 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src="/dribbble.png" alt="Dribbble" />
          </motion.a>
        </div>
      </div>
    </nav>
  );
}