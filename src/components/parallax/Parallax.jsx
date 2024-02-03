import React from 'react';
import "./parallax.scss";
import { motion, useScroll, useTransform } from 'framer-motion';
import  { useRef  } from 'react';

function Parallax({ type }) {

  // const ref = useRef()

  // const {scrollyProgress} = useScroll({
  //   target:ref,
  //   offset: ["start start","end start"]
  // })
  // const ytext = useTransform(scrollyProgress, [0,1], ["0%", "500%"])
  // const ybg = useTransform(scrollyProgress, [0,1], ["0%", "100%"])

  return (
    <div className='parallax'   style={{ background:
        type === "Technical Skills" ? "linear-gradient(180deg, #111132, #0c0c1d)" : "linear-gradient(180deg, #111132, #505064)"
    }}>
      <h1 >{type === "Technical Skills" ? "What I Know?" : "What I Did?"}</h1>
      <div className="mountains"></div>
      <div  className="planets"></div>
      <div  className="stars"></div>
    </div>
  );
}

export default Parallax;
