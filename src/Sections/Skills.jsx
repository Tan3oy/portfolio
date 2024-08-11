import {React, useEffect, useRef} from 'react';
import SkillProgressBar from '../Components/SkillProgressBar';
import {motion, useAnimation, useInView} from 'framer-motion'

const Skills = () => {
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
  
  const frontenditems=[
    { skills: 'HTML', percentage: 90, color: '#DD4B25', textColor: ' #ffffff', trailColor: '000000'},
    { skills: 'React', percentage: 75 , color: '#00D1F7', textColor: ' #ffffff', trailColor: '000000' },
    { skills: 'Css', percentage: 85, color: '#254BDD', textColor: ' #ffffff', trailColor: '000000'},
    { skills: 'TailWind', percentage: 65 , color: '#16B6B2', textColor: ' #ffffff', trailColor: '000000'},
    { skills: 'Javascript', percentage: 80, color: '#CFB431', textColor: ' #ffffff', trailColor: '000000'}
  ]
  const backenditems=[
    { skills: 'NodeJs', percentage: 85 , color: '#3F873F', textColor: ' #ffffff', trailColor: '000000'},
    { skills: 'Express', percentage: 75, color: '#7E7E7E', textColor: ' #ffffff', trailColor: '000000'},
    { skills: 'MongoDb', percentage: 70, color: '#569134', textColor: ' #ffffff', trailColor: '000000'},
  ]


  const containerVariants={
    hidden:{
      opacity:0,
      y:20
    },
    show:{
      opacity:1,
      y:0,
      transition:{
        type:'spring',
        bounce:0.4,
        duration:1
      }
    }
  }

  return (
    <div className="font-poppins [background-color:rgb(1,16,47)] py-24" id='Skills'>
      <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={controls} className='skill-title text-5xl font-bold flex justify-center items-center flex-row gap-4 mb-8'>
        <span className='text-white'>My</span>
        <span className='text-[color:#ECBE3D]'>Skills</span>
      </motion.div>
      <div className='skills-catagories flex justify-between p-24'>
        <div className='frontend w-[50%]'>
          <div className='text-2xl text-white text-center mb-8'>Front-End Skills</div>
          <div className="skill-bars grid grid-cols-3">
            { frontenditems.map((items)=>(
            <SkillProgressBar key={items} skill={items.skills} targetpercentage={items.percentage}
            color={items.color}
            textColor={items.textColor}
            trailColor={items.trailColor}/>
            ))}
          </div>
        </div>       

        <div className='backend'>
          <div className='text-2xl text-white text-center mb-8'>BackEnd Skils</div>
          <div className="skill-bars grid grid-cols-3">
          { backenditems.map((items)=>(
            <SkillProgressBar key={items} skill={items.skills}
            targetpercentage={items.percentage}
            color={items.color}
            textColor={items.textColor}
            trailColor={items.trailColor}/>
            ))}
          </div>
        </div>
      </div>
        <div className='flex justify-center items-center' id='Skills'>
          
          
        </div>
    </div>
  );
};

export default Skills;
