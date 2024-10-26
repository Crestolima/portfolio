import { useRef } from 'react';
import './parallax.scss';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Parallax({ type }) {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  
  // Parallax animation
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  
  // Dynamic background and text based on section type
  const backgroundGradient = type === "Projects"
    ? "linear-gradient(180deg, #111132, #505064)" // Project-specific gradient
    : "linear-gradient(180deg, #111132, #0c0c1d)"; // Default gradient

  const planetsImage = type === "Projects" ? "/sun.png" : "/planets.png"; // Different images
  const headerText = type === "TechnicalSkills" ? "What I Know" : "What I Did"; // Dynamic heading

  return (
    <div
      ref={ref}
      className='parallax'
      style={{ background: backgroundGradient }}
    >
      <motion.h1 style={{ y: yText }}>{headerText}</motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url(${planetsImage})`,
        }}
      ></motion.div>
      <motion.div style={{ x: yText }} className="stars"></motion.div>
    </div>
  );
}
