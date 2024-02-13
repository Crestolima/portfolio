
import "./app.scss";
import Hero from "./components/hero/Hero";

import Parallax from "./components/parallax/Parallax";
import Navbar from "./components/navbar/navbar";
import Contact from "./components/contact/Contact";
import TechnicalSkills from "./components/Technical Skills/TechnicalSkills";
import Projects from "./components/projects/Projects";

const App = () => {
  
  return <div>
    
    <section id="About">
      <Navbar/>
      <Hero/>
    </section>
    <section ><Parallax type={TechnicalSkills}/>   </section>
    <section id="Technical Skills"> <TechnicalSkills/></section>
    <section ><Parallax type="Projects" /></section>
    <section id="Projects"> {/*<Projects/>*/}
    <section></section>
    <section></section>
    <section></section>
    </section>
    
    <section id="Contact">
      <Contact/>
    </section>
  </div>;
};

export default App;