import {React, useEffect, useRef} from 'react'
import {motion, useAnimation, useInView} from 'framer-motion';

const About = () => {
  const aboutContainer={
    hidden:{
      opacity:0
    }
    ,
    show:{
      opacity:1,
      transition:{
        staggerChildren:0.5,
        delayChildren:0.5
      }
    }
  };
  const aboutText={
    hidden:{
      opacity:0,
      y: 20
    },
    show:{
      y: 0,
      opacity:1,
      transition:{
        duration:1,
        type:"spring",
        bounce:0.4
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

    <section ref={ref} id='About' className="w-full font-poppins [background-color:rgb(1,16,47)] px-24 py-2" >
        <motion.div
        variants={aboutContainer} 
        initial="hidden"
        animate={controls}
        className=' flex flex-col justify-center items-center  gap-6'>
          <motion.p 
          variants={aboutText}  className='text-5xl flex flex-row gap-4 font-bold '><span className='text-white'>About</span><span className='[color:#ECBE3D]'>Me</span></motion.p>
          <motion.p variants={aboutText} className='text-justify text-sm text-white leading-8 p-16'>Hello! I'm Tanmoy Halder, a dedicated full stack developer with a passion for building dynamic and user-friendly web applications. My expertise lies in both frontend and backend technologies, with hands-on experience using Tailwind CSS and React-Vite. I enjoy creating seamless and responsive web applications. I am driven by a passion for learning and innovation, always eager to take on new projects that challenge my skills and expand my horizons. Thank you for taking the time to explore my portfolio—let's create something amazing together!</motion.p>
        </motion.div>
    </section>
  )
}

export default About