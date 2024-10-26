import './Sidebar.scss';
import Links from './Links';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Togglebutton from '../toggleButtons/ToggleButtons';

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        delay: 0.2,
        type: "spring",
        stiffness: 200, // Fixed typo here
        damping: 40,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.2,
        type: "spring",
        stiffness: 400, // Fixed typo here
        damping: 40,
      },
    },
  };

  return (
    <motion.div className='sidebar' animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <Togglebutton setOpen={setOpen} />
    </motion.div>
  );
}