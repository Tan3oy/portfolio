import {React,useEffect,useRef} from 'react'
import {  FaTwitter , FaLinkedinIn , FaInstagram , FaGithub , FaWhatsapp} from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { LiaEnvelopeOpenTextSolid } from "react-icons/lia";
import { delay, motion, useAnimation, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_phx5emk', 'template_v4x7iys', form.current, {
        publicKey: 'VTYSJkXM4URHCQbVe',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  const contactcont={
        hidden:{
          opacity:0
        },
        show:{
          opacity:1,
          transition:{
            staggerChildren:0.2,
          delayChildren:0.5
          }
          
  }       
}
const contacttextbody = {
  hidden:{
    opacity:0,
    y:30
  },
  show:{
    opacity:1,
    y:0,
    transition:{ 
      duration:1.5,
    }
  }
}

const contactvariants={
  hidden:{
    opacity:0,
    y:20
  },
  show:{
    opacity: 1,
    y:0,
    transition:{
      duration:1
    }
  }
}
  const contactform = {
    hidden:{
      opacity:0,
      y:30
    },
    show:{
      opacity:1,
      y:0,
      transition:{ 
        type:"spring",
        bounce:0,
        duration:1,
        delay:2.5
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
    
    <div className='font-poppins flex flex-col justify-between px-7 py-24 bg-[rgb(1,16,47)]' id='Contact'>
      <motion.div variants={contactvariants} transition={{duration:1}} initial="hidden" animate={controls} className='font-bold py-7 justify-center items-center text-5xl flex flex-row gap-4 capitalize '>
        <span className='text-white'>Contact</span>
        <span className='text-[rgb(236,190,61)]'>Me</span>
      </motion.div>
      <motion.div ref={ref} variants={contactcont} initial="hidden" animate={controls} className='contact-body flex justify-between mt-16'>
        <motion.div variants={contactcont} className='flex flex-col w-[50%] gap-4'>
          <motion.p variants={contactvariants} className='text-2xl font-bold text-slate-300 text-center w-[80%]'>Get In Touch</motion.p>
          <motion.p variants={contactvariants} className='text-xs text-slate-400 w-[80%]'>I'm excited to hear from you! Whether you have a question, a project in mind, or just want to chat about tech and creativity, don't hesitate to drop me a message. Let's explore how we can work together to bring your ideas to life.</motion.p>
          <motion.div variants={contactvariants} className='grid grid-cols-2 gap-6 mt-8'>
            <motion.div variants={contactvariants} className='flex flex-row gap-4 items-center'> 
              <FiPhoneCall className='text-[rgb(236,190,61)] text-2xl'/>
              <motion.p className='text-slate-200  flex flex-col'>
                <span className='font-bold text-sm'>Call Me</span>
                <span className='text-xs'>+91 7980608756</span>
              </motion.p>              
            </motion.div>
            <motion.div variants={contactvariants} className='flex flex-row gap-4 items-center'> 
              <FaWhatsapp className='text-[rgb(236,190,61)] text-3xl'/>
              <p className='text-slate-200 flex flex-col'>
                <span className='font-bold text-sm'>Whatsapp</span>
                <span className='text-xs'>+91 7980608756</span>
              </p>              
            </motion.div>          
            <motion.div variants={contactvariants} className='flex flex-row gap-4 items-center'> 
              < LiaEnvelopeOpenTextSolid className='text-[rgb(236,190,61)] text-3xl'/>
              <p className='text-slate-200  flex flex-col'>
                <span className='font-bold text-sm'>Email</span>
                <span className='text-xs'>tanmoy122halder@gmail.com</span>
              </p>              
            </motion.div>
          </motion.div>
          <motion.div variants={contactvariants} className="icons-wrapper w-fit flex-col mt-8">
            <motion.div variants={contactvariants} className='flex justify-center items-center text-slate-400'> Follow Me</motion.div>
            <motion.div variants={contactcont} className='icons mt-4 flex gap-7 text-slate-400'>
              <motion.p variants={contactvariants}><FaFacebookF variants/></motion.p>
              <motion.p variants={contactvariants}><FaTwitter variants/></motion.p>
              <motion.p variants={contactvariants}><FaLinkedinIn variants/></motion.p>
              <motion.p variants={contactvariants}><FaInstagram variants/></motion.p>
              <motion.p variants={contactvariants}><FaGithub variants/></motion.p>
            </motion.div>
            
        </motion.div>
        </motion.div>

        <motion.div variants={contactform} className='flex flex-col justify-center items-center'>
          <form ref={form} onSubmit={sendEmail} className='justify-end grid grid-cols-2 pt-7 gap-7' id='contact-form'>
            <input type="text" name="user_name" placeholder='Enter Name' className='outline-none border-none p-5 ml-4 text-lg rounded-md bg-slate-700'/>
            <input type="number" name="contact_number" placeholder='Enter Phone Number' className='outline-none border-none p-5 ml-4 text-lg rounded-md bg-slate-700'/>
            <input type="text" placeholder='Enter Subject' className='outline-none border-none p-5 ml-4 text-lg rounded-md bg-slate-700'/>
            <input type="email" name="user_email" placeholder='Email Address' className='outline-none border-none p-5 ml-4 text-lg rounded-md bg-slate-700'/>
            <textarea form='contact-form' name="message" placeholder='Your Message' className='outline-none col-span-2 border-none p-5 ml-4 text-lg rounded-md bg-slate-700'/>
            <motion.input whileHover={{ backgroundColor: 'rgb(236,190,61)', color: 'black' }} whileTap={{scale:0.9}} type="submit" value="Send Message" className='border-2 border-solid border-[rgb(236,190,61)] col-span-2 py-2 ml-4 text-lg text-[rgb(236,190,61)] rounded-md '/>
          </form>

        </motion.div>
      </motion.div>
      
    </div>
  )
}

export default Contact