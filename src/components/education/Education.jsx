import React from 'react';
import { motion } from 'framer-motion';

import './education.scss';
import SchoolIcon from '@mui/icons-material/School';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const educationData = [
  {
    id: 1,
    title: "Bachelor of Engineering (B.E)",
    institution: "Moodalakatte Institute of Technology, Kundapura",
    period: "2020 - 2023",
    field: "Computer Science and Engineering",
    grade: "CGPA: 7.40",
    icon: <SchoolIcon />
  },
  {
    id: 2,
    title: "Diploma in Computer Science",
    institution: "R. N. Shetty Polytechnic, Sirsi",
    period: "2017 - 2020",
    field: "Computer Science and Engineering",
    grade: "Percentage: 61%",
    icon: <ImportContactsIcon />
  },
  {
    id: 3,
    title: "Senior Secondary (SSLC)",
    institution: "Holy Rosary Convent High School, Honnavar",
    period: "2014 - 2015",
    field: "10th Standard",
    grade: "Percentage: 64.16%",
    icon: <EmojiEventsIcon />
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: {
    x: -50,
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.8,
      bounce: 0.4
    }
  }
};

const iconVariants = {
  hidden: {
    scale: 0,
    rotate: -180
  },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20
    }
  },
  hover: {
    rotate: 360,
    transition: {
      duration: 0.8,
      ease: "easeInOut"
    }
  }
};

const Education = () => {
  return (
    <div className="education-container">
      <motion.div 
        className="education-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Educational Journey</h2>
        <div className="header-line" />
      </motion.div>

      <motion.div
        className="timeline"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {educationData.map((education, index) => (
          <motion.div
            key={education.id}
            className="timeline-item"
            variants={itemVariants}
          >
            <motion.div 
              className="timeline-icon"
              variants={iconVariants}
              whileHover="hover"
            >
              {education.icon}
            </motion.div>
            
            <motion.div 
              className="timeline-content"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 8px 30px rgba(0,0,0,0.12)"
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
            >
              <div className="timeline-period">{education.period}</div>
              <h3>{education.title}</h3>
              <h4>{education.institution}</h4>
              <p>{education.field}</p>
              <div className="grade">
                <span>{education.grade}</span>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Education;



