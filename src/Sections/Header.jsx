
import { delay, motion, spring, useAnimation, useInView } from "framer-motion";
import { useState, useEffect,useRef} from "react";
import { ReactTyped } from "react-typed";

const textvariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1.5,
      staggerChildren: 0.2,
      delayChildren: 0.5,
    },
  },
};

const buttoncontainer = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      delayChildren:1
    },
  },
};
const buttonvariants = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 0.5,
    transition: {
      duration: 1,
      type:"spring"
    },
  },
};

const dpvariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};

const Header = () => {
  const [showTyped, setShowTyped] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTyped(true);
    }, 1400);
    return () => clearTimeout(timer);
  }, []);

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
    <div
      className="hero-section flex justify-between [background-color:rgb(1,16,47)] px-6 pt-[136px] pb-[136px] "
      id="Home" ref={ref}
    >
      <div className="hero-items w-[50%]">
        <motion.div
          className="textBody mb-4"
          variants={textvariants}
          initial="hidden"
          animate={controls}
        >
          <motion.span
            variants={textvariants}
            // transition={{ duration: 1.2 }}
            className="block text-white capitalize font-bold text-4xl mb-5"
          >
            hii,
          </motion.span>
          <motion.div variants={textvariants} className="flex flex-row gap-4">
            <motion.span className="text-white capitalize font-bold text-6xl">
              i'm
            </motion.span>
            <motion.span className="text-white text-6xl font-bold">
              Tanmoy
            </motion.span>
          </motion.div>
          <motion.h2 
          variants={textvariants}
          className="text-white [color:#ECBE3D] capitalize font-bold text-6xl mt-6 h-16">
            {showTyped && (
              <ReactTyped
                strings={["full stack developer"]}
                typeSpeed={50}
                backSpeed={30}
                loop
              ></ReactTyped>
            )}
          </motion.h2>
        </motion.div>
        
        <motion.div variants={buttoncontainer} initial="hidden" animate={controls} >
          <a href="#Contact">
            <motion.button 
              className="hero-btn font-poppins mt-14 border-solid border-2 [border-color:#ECBE3D] rounded-lg cursor-pointer text-base [color:#ECBE3D] px-2 py-1"
              variants={buttonvariants}
              whileInView={{ scale: 1, opacity: 0.5 , transition:{ type:'spring'}}}
              whileHover={{
                backgroundColor: "#ECBE3D",
                opacity: 1,
                color: "white"
              }}
              whileTap={{
                scale: 0.8,
              }}
            >
              Contact Me
            </motion.button>
          </a>
        </motion.div>
      </div>

      <motion.div
        variants={dpvariants}
        initial="hidden"
        animate={controls}
        transition={{ duration: 1.2 }}
        className="dp rounded-[50%] h-64 w-64 border-4 border-yellow-600 border-solid overflow-hidden mr-14 mt-10"
      >
        <motion.img
          variants={dpvariants}
          transition={{ duration: 1.2 }}
          src="dp2.jpg"
          className="[background-size:cover]"
        />
      </motion.div>
    </div>
  );
};

export default Header;
