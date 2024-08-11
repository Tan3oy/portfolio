import { React, useRef, useEffect } from 'react';
import Home2 from './Home2';
import Home3 from './Home3';
import { motion, useAnimation, useInView } from 'framer-motion';

const parentVariants = {
  hidden: { scale: 0 },
  show: {
    scale: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 1.5,
      staggerChildren: 0.2, // Stagger children elements
      delayChildren: 0.2,
    },
  },
};

const buttonVariants = {
  hidden: { opacity: 0 , scale: 0},
  show: { opacity: 0.8, scale: 1, transition: { duration: 0.5 } },
};

const textvariants={
  hidden: {
    opacity:0,
    y: 30
  },
  show:{
    opacity: 1,
    y:0,
    transition:{
      type:"spring",
      bounce:0.4,
      duration:1.5,    
      staggerChildren:0.2,
      delayChildren:0.5
    }
}
}
const Home = () => {
  const controls = useAnimation(); // Controls for parent animation
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      controls.start('show');
    } else {
      controls.start('hidden');
    }
  }, [controls, isInView]);

  return (
    <div>
      <div ref={ref} className="h-96 bg-blue-950 flex flex-col justify-center items-center">
        <motion.div
          variants={parentVariants}
          initial="hidden"
          animate={controls} // This controls the parent animation and stagger effect
          className="flex flex-col justify-center items-center gap-8"
        >
          <motion.div 
          variants={parentVariants}
          className="box1 h-20 w-20 rounded-xl bg-red-400"
          >
            
          </motion.div>
          <motion.div
            variants={buttonVariants}
            whileInView={{ scale: 1, opacity: 0.8 }} // Ensures visibility when in view
            whileTap={{ scale: 0.9 }} // Child interaction effects
            whileHover={{ scale: 1.1, backgroundColor: "red", opacity: 1, color: "white" }}
            className="box1 h-20 w-20 rounded-xl border-2 border-red-400"
          ></motion.div>
          {/* <motion.div
            variants={buttonVariants}
            whileInView={{ scale: 1, opacity: 0.8 }} // Ensures visibility when in view
            whileTap={{ scale: 0.9 }} // Child interaction effects
            whileHover={{ scale: 1.1, backgroundColor: "red", opacity: 1, color: "white" }}
            className="box2 h-20 w-20 rounded-xl border-2 border-red-400"
          ></motion.div> */}
        </motion.div>

        <motion.div variants={textvariants} initial="hidden" animate={controls} className="text flex flex-col gap-4 text-center">
        <motion.span variants={textvariants} className=' text-2xl text-white'> Hii I am Tanmoy</motion.span> 
        <motion.span variants={textvariants} className=' text-2xl text-white'>I am A developer</motion.span>
        </motion.div>
      </div>
      <Home2 />
      <Home3 />
    </div>
  );
};

export default Home;
