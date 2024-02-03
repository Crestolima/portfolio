import React from 'react'
import "./navbar.scss"
import { motion } from "framer-motion";
import Sidebar from '../sidebar/Sidebar';

function Navbar() {
  return (
    <div className='navbar'>
    <Sidebar/>
    
    <div className="wrapper">
    
    <motion.span initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:0.5}}>Portfolio</motion.span>
    <div className="social">
    <a href="#"><img src="/facebook.png" alt="reload" /></a>
    <a href="#"><img src="/instagram.png" alt="refresh" /></a>
    <a href="#"><img src="/dribbble.png" alt="reload" /></a>
    <a href="#"><img src="/youtube.png" alt="refresh" /></a>

    </div>
    </div>
    
    
    
    
    </div>
  )
}

export default Navbar