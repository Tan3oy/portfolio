import {React,useEffect,useRef} from "react";
import { motion, useScroll, useSpring,useAnimation, useInView } from "framer-motion";

const Timeline = () => {


  const timeline={
    hidden:{
      scale:0
  },
  show:{
    scale:1,
    transition: { duration: 1}
  }
}
  const containerVariants={
    hidden:{
      opacity: 0,
      
    },
    show:{
      opacity: 1,     
      transition: { duration:0.5, staggerChildren:0.3, delayChildren:0.5},}
  }

  const wrapperVariants={
    hidden:{
      opacity: 0,
      
    },
    show:{
      opacity: 1,
      
      transition: { duration:0.5, staggerChildren:0.2, delayChildren:0.5},}
  }
  const indicatorVariants={
    hidden:{
      opacity:0,
      scale:0
    },
    show:{
      opacity:1,
      scale:1,
      transition:{
        type:"spring",
        bounce:0.5,
        duration:0.5
      }
    }
    
  }

const itemvariants={
  hidden:{
    opacity:0,
    x:-30
  },
  show:{
    opacity:1,
    x:0,
    transition:{
      type:"spring",
      bounce:0.2,
      when:"beforeChildren",
    }
  }
}

  const controls = useAnimation(); // Controls for parent animation
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1 });
  useEffect(() => {
    if (isInView) {
      controls.start('show');
    } else {
      controls.start('hidden');
    }
  }, [controls, isInView]);
  
  return (
    <div className=" [background-color:rgb(1,16,47)] flex flex-col gap-10 py-24" id="Education">
      <div className="timeline-title flex flex-row gap-4 justify-center items-center text-5xl font-bold pb-8">
        <span className="text-white">My</span>
        <span className="text-[#ECBE3D]">Timeline</span>
      </div>
      <div className="timeline-body flex justify-between px-32">
          <div className="left flex flex-row">
            <motion.div variants={timeline} initial="hidden" animate={controls}  ref={ref} className="timeline-line origin-top relative before:absolute before:w-[2px] before:h-full before:top-0 before:left-0 before:bg-[#ECBE3D]"></motion.div>
            <motion.div variants={containerVariants} initial="hidden" animate={controls} ref={ref} className="timeline-items-container flex flex-col gap-16">

                <motion.div variants={wrapperVariants} className="timeline-items-wrapper flex flex-row">
                  <motion.div variants={indicatorVariants} className="timeline-indicator relative w-1 -left-2  h-full before:absolute before:h-5 before:w-5 before:rounded-full before:top-[40%] before:left-0 before:bg-[#ECBE3D]"></motion.div>
                  <motion.div variants={itemvariants} className="timeline-items bg-white flex flex-col ml-5 pl-5 py-4 pr-8 rounded-lg">
                      <span className="text-sm font-bold text-[#ECBE3D]">
                        2016 - 2018
                      </span>
                      <span className="text-3xl text-black font-bold">
                        Higher Secondary
                      </span>
                      <span className="text-sm font-semibold text-black pt-3"> Percentage 82%</span>
                  </motion.div>
                </motion.div>
                <motion.div variants={wrapperVariants} className="timeline-items-wrapper flex flex-row">
                <motion.div variants={indicatorVariants} className="timeline-indicator relative w-1 -left-2  h-full before:absolute before:h-5 before:w-5 before:rounded-full before:top-[40%] before:left-0 before:bg-[#ECBE3D]"></motion.div>
                <motion.div variants={itemvariants} className="timeline-items bg-white flex flex-col ml-5 pl-5 py-4 pr-8 rounded-lg">
                      <span className="text-sm font-bold text-[#ECBE3D]">
                        2018 - 2021
                      </span>
                      <span className="text-3xl text-black font-bold">
                        B.Sc. (HONS) Physics 
                      </span>
                      <span className="text-2xl font-bold text-black">- University Of Calcutta</span>
                      <span className="text-sm font-semibold text-black pt-3"> Percentage 72%</span>
                  </motion.div>
                </motion.div>
                
            </motion.div>
          </div>

          {/* <div variants={skillcontainer} initial="hidden" animate="show" className='left flex flex-col gap-8 relative before:absolute before:w-[2px] before:h-full before:top-0 before:left-0 before:bg-[#ECBE3D]'>                                
          </div> */}
          <div className="right flex flex-row">
            <motion.div variants={timeline} initial="hidden" animate={controls}  ref={ref} className="timeline-line origin-top relative before:absolute before:w-[2px] before:h-full before:top-0 before:left-0 before:bg-[#ECBE3D]"></motion.div>
            <motion.div variants={containerVariants} initial="hidden" animate={controls} ref={ref} className="timeline-items-container flex flex-col gap-16">

                <motion.div variants={wrapperVariants} className="timeline-items-wrapper flex flex-row">
                  <motion.div variants={indicatorVariants} className="timeline-indicator relative w-1 -left-2  h-full before:absolute before:h-5 before:w-5 before:rounded-full before:top-[40%] before:left-0 before:bg-[#ECBE3D]"></motion.div>
                  <motion.div variants={itemvariants} className="timeline-items bg-white flex flex-col ml-5 pl-5 py-4 pr-8 rounded-lg">
                      <span className="text-sm font-bold text-[#ECBE3D]">
                        2024
                      </span>
                      <span className="text-3xl text-black font-bold">
                        M.E.R.N Stack<br/> Developement
                      </span>
                      <span className="text-2xl font-bold text-black">- Vidyasthu</span>
                  </motion.div>
                </motion.div>
                
            </motion.div>
          </div>
      </div>
          

    </div>
  );
};

export default Timeline;
