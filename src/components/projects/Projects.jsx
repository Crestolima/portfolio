// Projects.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Tooltip from '@mui/material/Tooltip';
import './project.scss';
import GitHubIcon from '@mui/icons-material/GitHub';
import MonitorIcon from '@mui/icons-material/Monitor';
import LinkIcon from '@mui/icons-material/Link';

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="project-card-wrapper"
    >
      <div 
        className="project-card"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="image-container">
          <img src={project.img} alt={project.title} />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="overlay"
          >
            <div className="action-buttons">
              <Tooltip title="Demo">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="action-button"
                  href="#demo"
                >
                  <MonitorIcon />
                </motion.a>
              </Tooltip>
              <Tooltip title="GitHub">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="action-button"
                  href="#github"
                >
                  <GitHubIcon />
                </motion.a>
              </Tooltip>
              <Tooltip title="Live Site">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="action-button"
                  href="#live"
                >
                  <LinkIcon />
                </motion.a>
              </Tooltip>
            </div>
          </motion.div>
        </div>
        <div className="content">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
          >
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <div className="tags">
              {project.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Hostel Manager",
      img: "/HMS.png",
      desc: "A Project to Help the Managing of Residence Records and other details ",
      tags: ["MongoDB","Reactjs", "Expressjs", "Nodejs","Material UI",],
    },
    {
      id: 2,
      title: "Quizy",
      img: "/api/placeholder/400/300",
      desc: "A Simple Project To Practice MCQ's And Also Upload QA's Based On Course's ",
      tags: ["MongoDB","Reactjs", "Expressjs", "Nodejs","Material UI"],
    },
    {
      id: 3,
      title: "Online Auction System",
      img: "/api/placeholder/400/300",
      desc: "A lightweight application showcasing pure JavaScript capabilities with modern ES6+ features.",
      tags: ["MongoDB","Reactjs", "Expressjs", "Nodejs","Bootsrap CSS"],
    },
    {
      id: 4,
      title: "Food Ordering System ",
      img: "/api/placeholder/400/300",
      desc: "A Web-App Like The Zomato App ",
      tags: ["HTML & CSS", "JavaScript", "Php","MySql"],
    }
  ];

  return (
    <div className="portfolio-container">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="portfolio-title"
      >
        Featured Projects
      </motion.h1>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
