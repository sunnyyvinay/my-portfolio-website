import React from 'react';
import { motion } from 'framer-motion';
import uclalogo from '../assets/ucla-logo.png';

const Education = () => {
  return (
    <div className='border-b border-neutral-900 pb-10'>
        <motion.h2 
            whileInView={{opacity: 1, y: 0}}
            initial={{opacity: 0, y: -100}}
            transition={{duration: 0.5}}
            className='my-10 text-center text-4xl'>
                Education
        </motion.h2>

        <div className='text-center tracking-tighter'>
            <motion.p 
                whileInView={{opacity: 1, x: 0}}
                initial={{opacity: 0, x: -100}}
                transition={{duration: 1}}
                className='my-4 text-2xl'>
                    University of California, Los Angeles (UCLA)
            </motion.p>

            <motion.p 
                whileInView={{opacity: 1, x: 0}}
                initial={{opacity: 0, x: 100}}
                transition={{duration: 1}}
                className='my-4 text-2xl'>
                    B.S. in Computer Science (2023 - 2027)
            </motion.p>

            <motion.div 
                whileInView={{opacity: 1, x: 0}}
                initial={{opacity: 0, x: -100}}
                transition={{duration: 1.5}}
                className='flex flex-wrap items-center justify-center gap-4'>
                    <img src={uclalogo} className='w-1/5 h-1/5'/>
            </motion.div>
        </div>
    </div>
  )
}

export default Education