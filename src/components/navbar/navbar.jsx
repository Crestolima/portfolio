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
            href="#" 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src="/instagram.png" alt="Instagram" />
          </motion.a>
          <motion.a 
            href="#" 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src="/youtube.png" alt="YouTube" />
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