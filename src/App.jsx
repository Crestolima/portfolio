import React from 'react';
import './app.scss';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/navbar';
import Parallax from './components/parallax/Parallax';

const App = () => {
  const type = "Technical Skills"; // or provide the correct value for type

  return (
    <div>
      <section id="About">
        <Navbar />
        <Hero />
      </section>
      <section id="Parallax">
        {/* Pass the type prop with a value */}
        <Parallax type={type} />
      </section>
      <section>Technical Skills</section>
      <section>Projects</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section id="Contact">Contact</section>
    </div>
  );
};

export default App;
