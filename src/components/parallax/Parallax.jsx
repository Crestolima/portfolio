import React from 'react'
import "./parallax.scss"

function Parallax() {
  return (
    <div className='parallax' style={{background:
        type ==="Technical Skills" ? "linear-gradient(180deg, #111132,#0c0c1d)" : "linear-gradient(180deg, #111132,#505064)"}
    }>
    <h1>{type=="Technical Skills" ? "What i Know?" : "What i Did?"}</h1>
    <div className="mountains"><img src='./mountains.png'/></div>
    <div className="planets"><img src='./planets.png'/></div>
    <div className="stars"><img src='./stars.png'/></div>
    </div>
  )
}

export default Parallax