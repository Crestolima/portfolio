import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Database, 
   
  Library, 
  Terminal,
  Globe,
  Server,
  Layout
} from 'lucide-react';
import './technical.scss';
import GitHubIcon from '@mui/icons-material/GitHub';
import StorageIcon from '@mui/icons-material/Storage';
import DnsIcon from '@mui/icons-material/Dns';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import TerminalIcon from '@mui/icons-material/Terminal';

const skills = [
  {
    id: 1,
    title: "Frontend",
    icon: <BackupTableIcon />,
    technologies: ["HTML5", "CSS3", "JavaScript", "TypeScript"]
  },
  {
    id: 2,
    title: "Frameworks",
    icon: <LibraryBooksIcon />,
    technologies: ["React", "Next.js", "Vue", "Angular"]
  },
  {
    id: 3,
    title: "Backend",
    icon: <DnsIcon />,
    technologies: ["Node.js", "Express", "Python", "Java"]
  },
  {
    id: 4,
    title: "Database",
    icon: <StorageIcon />,
    technologies: ["MongoDB", "MySQL", "PostgreSQL", "Redis"]
  },
  {
    id: 5,
    title: "Version Control",
    icon: <GitHubIcon />,
    technologies: ["Git", "GitHub", "GitLab", "Bitbucket"]
  },
  {
    id: 6,
    title: "Programming",
    icon: <TerminalIcon />,
    technologies: ["JavaScript", "Python", "Java", "C++"]
  }
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const skillVariants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  show: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const iconVariants = {
  hidden: { 
    scale: 0,
    rotate: -180 
  },
  show: { 
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20
    }
  },
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: {
      duration: 0.3
    }
  }
};

const TechnicalSkills = () => {
  return (
    <div className="technical-skills">
      <h1>Technical Skills</h1>
      <motion.div 
        className="skills-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {skills.map((skill) => (
          <motion.div 
            key={skill.id}
            className="skill-card"
            variants={skillVariants}
            whileHover="hover"
          >
            <motion.div 
              className="icon-container"
              variants={iconVariants}
            >
              {skill.icon}
            </motion.div>
            <h3>{skill.title}</h3>
            <div className="technologies">
              {skill.technologies.map((tech, index) => (
                <motion.span 
                  key={tech}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="tech-tag"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TechnicalSkills;