import React, { useState } from 'react';
import { motion } from 'framer-motion';

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
          <img 
            src={project.img} 
            alt={project.title}
          />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="overlay"
          >
            <div className="action-buttons">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="action-button"
                href="#demo"
              >
                <MonitorIcon />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="action-button"
                href="#github"
              >
                <GitHubIcon />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="action-button"
                href="#live"
              >
                <LinkIcon />
              </motion.a>
            </div>
          </motion.div>
        </div>
        <div className="content">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.2 }}
          >
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <div className="tags">
              {['React', 'TypeScript', 'SCSS'].map((tag) => (
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
      title: "React Commerce",
      img: "/api/placeholder/400/300",
      desc: "A modern e-commerce platform built with React, featuring a responsive design, cart functionality, and seamless checkout process.",
    },
    {
      id: 2,
      title: "Next.js Blog",
      img: "/api/placeholder/400/300",
      desc: "A performant blog platform built with Next.js and MDX, supporting dynamic content and SEO optimization.",
    },
    {
      id: 3,
      title: "Vanilla JS App",
      img: "/api/placeholder/400/300",
      desc: "A lightweight application showcasing pure JavaScript capabilities with modern ES6+ features.",
    },
    {
      id: 4,
      title: "Music App",
      img: "/api/placeholder/400/300",
      desc: "A streaming music application with playlist management and real-time audio visualization.",
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