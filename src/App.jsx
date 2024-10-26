import React from "react";
import "./app.scss";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/Hero";
import TechnicalSkills from "./components/Technical Skills/TechnicalSkills";
import Projects from "./components/projects/Projects";
import Education from "./components/education/Education";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main className="sections-container">
        <section id="About" className="section">
          <Hero />
        </section>
        <section id="TechnicalSkills" className="section">
          <TechnicalSkills />
        </section>
        <section id="Projects" className="section">
          <Projects />
        </section>
        <section id="Education" className="section">
          <Education />
        </section>
        <section id="Contact" className="section">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default App;
