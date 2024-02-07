import React from 'react'
import { useRef } from 'react';
import './Projectstyles.scss'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const items = [
  {
    id: 1,
    title: "Hostel Management System",
    img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Engineered a robust hostel database employing HTML, CSS, PHP, SQL, and JavaScript, streamlining themanagement of student records, room allocation, and billing systems.Implemented advanced features to enhance user experience, contributing to effective hostel management.",
  },
  {
    id: 2,
    title: "Food Ordering Project",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Orchestrated the development of a user-friendly platform for food ordering using HTML, CSS, Bootstrap,PHP, and SQL, emphasizing responsive design and efficient database management. Collaborated closely with the development team to introduce innovative features, enhancing the overall user experience and platform functionality.",
  },
  {
    id: 3,
    title: "Online Auction System",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Developed an advanced Online Auction System using ReactJS, ExpressJS, Node.js, and MongoDB, fostering seamless buying and selling in a secure online environment. Spearheaded the integration of user authentication and payment gateways, ensuring a smooth and secure transactional experience.",
  },

];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
function Projects() {
    const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="Project" ref={ref}>
      <div className="progress">
        <h1>Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  )
}

export default Projects 