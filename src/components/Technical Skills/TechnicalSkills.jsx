import { useRef } from 'react';
import './technical.scss';
import { motion, useInView } from 'framer-motion';

const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
};

export default function TechnicalSkills() {
    const ref = useRef();

    const isInView = useInView(ref, { margin: "-100px" });

    return (
        <motion.div className='services'
            variants={variants}
            initial="initial"
            // animate="animate"
            // whileInView="animate"
            ref={ref}
            animate={"animate"}>
            <motion.div className="listContainer" variants={variants}>
                {/* Duplicate these divs to make 8 boxes */}
                <motion.div className="box" whileHover={{ background: "white", color: "black" }}>
                    <h2>Branding 1</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                        libero enim nisi aliquam consectetur expedita magni eius ex corrupti
                        animi! Ad nam pariatur assumenda quae mollitia libero repellat
                        explicabo maiores?
                    </p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{ background: "white", color: "black" }}>
                    <h2>Branding 2</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                        libero enim nisi aliquam consectetur expedita magni eius ex corrupti
                        animi! Ad nam pariatur assumenda quae mollitia libero repellat
                        explicabo maiores?
                    </p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{ background: "white", color: "black" }}>
                    <h2>Branding 3</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                        libero enim nisi aliquam consectetur expedita magni eius ex corrupti
                        animi! Ad nam pariatur assumenda quae mollitia libero repellat
                        explicabo maiores?
                    </p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{ background: "white", color: "black" }}>
                    <h2>Branding 4</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                        libero enim nisi aliquam consectetur expedita magni eius ex corrupti
                        animi! Ad nam pariatur assumenda quae mollitia libero repellat
                        explicabo maiores?
                    </p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{ background: "white", color: "black" }}>
                    <h2>Branding 5</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                        libero enim nisi aliquam consectetur expedita magni eius ex corrupti
                        animi! Ad nam pariatur assumenda quae mollitia libero repellat
                        explicabo maiores?
                    </p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{ background: "white", color: "black" }}>
                    <h2>Branding 6</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                        libero enim nisi aliquam consectetur expedita magni eius ex corrupti
                        animi! Ad nam pariatur assumenda quae mollitia libero repellat
                        explicabo maiores?
                    </p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{ background: "white", color: "black" }}>
                    <h2>Branding 7</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                        libero enim nisi aliquam consectetur expedita magni eius ex corrupti
                        animi! Ad nam pariatur assumenda quae mollitia libero repellat
                        explicabo maiores?
                    </p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{ background: "white", color: "black" }}>
                    <h2>Branding 8</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                        libero enim nisi aliquam consectetur expedita magni eius ex corrupti
                        animi! Ad nam pariatur assumenda quae mollitia libero repellat
                        explicabo maiores?
                    </p>
                    <button>Go</button>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}
