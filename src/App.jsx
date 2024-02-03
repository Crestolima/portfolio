import React from 'react';
import './app.scss';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/navbar';
import Parallax from './components/parallax/Parallax';
import Contact from './components/contact/Contact';

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
      <section id ="Techical Skills">Technical Skills</section>
      <section id ="Parallax"><Parallax type={0} /></section>
      <section id = "Projects">Projects</section>
      
      <section id= "Education">Education</section>
      <section id= "Internship">Internship</section>

      <section id="Contact"><Contact/></section>
    </div>
  );
};

export default App;
