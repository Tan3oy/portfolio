import React, { useState, useEffect, useRef } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { useInView } from 'framer-motion';
import 'react-circular-progressbar/dist/styles.css';

const SkillProgressBar = ({ skill, targetpercentage, color, textColor, trailColor }) => {
  const [percentage, setPercentage] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.5 });

  useEffect(() => {
    if (isInView) {
      let progress = 0;
      const interval = setInterval(() => {
        progress += 1;
        setPercentage(progress);
        if (progress === targetpercentage) {
          clearInterval(interval);
        }
      }, 40);
    } else {
      setPercentage(0);
    }
  }, [isInView, targetpercentage]);

  return (
    <div ref={ref} className='w-28 m-3'>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          textColor: textColor , 
          pathColor: color, 
          trailColor: trailColor, 
        })}
      />
      <div className='text-center mt-[10px] text-white'>
        {skill}
      </div>
    </div>
  );
};

export default SkillProgressBar;
