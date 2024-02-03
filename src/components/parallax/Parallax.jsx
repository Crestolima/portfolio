import React from 'react';
import "./parallax.scss";

function Parallax({ type }) {
  return (
    <div className='parallax' style={{ background:
        type === "Technical Skills" ? "linear-gradient(180deg, #111132, #0c0c1d)" : "linear-gradient(180deg, #111132, #505064)"
    }}>
      <h1>{type === "Technical Skills" ? "What I Know?" : "What I Did?"}</h1>
      <div className="mountains"><img src='./mountains.png' alt="mountains" /></div>
      <div className="planets"><img src='./planets.png' alt="planets" /></div>
      <div className="stars"><img src='./stars.png' alt="stars" /></div>
    </div>
  );
}

export default Parallax;
