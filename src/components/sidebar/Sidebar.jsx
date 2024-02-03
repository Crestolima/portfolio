// Sidebar.jsx
import React, { useState } from "react";
import Links from "./Links/Links";
import ToggleButtons from "./toggleButtons/ToggleButtons";
import { motion } from "framer-motion";
import "./Sidebar.scss";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <motion.div className={`sidebar ${open ? "open" : "closed"}`}>
      <motion.div
        className="bg"
        variants={variants}
        animate={open ? "open" : "closed"}
      >
        <Links />
      </motion.div>
      <div className="bts">
        <ToggleButtons setOpen={setOpen} />
      </div>
    </motion.div>
  );
};

export default Sidebar;
