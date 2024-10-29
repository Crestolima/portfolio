import { useState } from 'react';
import { motion } from 'framer-motion';
import './Sidebar.scss';

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 40,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const navItems = [
    { id: "About", label: "About" },
    { id: "TechnicalSkills", label: "Skills" },
    { id: "Projects", label: "Projects" },
    { id: "Education", label: "Education" },
    { id: "Contact", label: "Contact" },
  ];

  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <nav className="links">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </motion.div>
      <button className="toggle-button" onClick={() => setOpen(!open)}>
        <div className={`hamburger ${open ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
    </motion.div>
  );
};

export default Sidebar;