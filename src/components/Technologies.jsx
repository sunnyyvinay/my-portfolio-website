import React from 'react';
import { motion } from "framer-motion";
import { RiReactjsLine } from 'react-icons/ri';         // React
import { SiMongodb } from "react-icons/si";             // Mongo
import { BiLogoPostgresql } from "react-icons/bi";      // Postgres
import { FaNodeJs } from "react-icons/fa";              // Node
import { SiPytorch } from "react-icons/si";             // PyTorch
import { SiCplusplus } from "react-icons/si";           // C++

const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})

// use 'text-<color>-400' to replace colors of icons
const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h2 
            whileInView={{opacity: 1, y: 0}}
            initial={{opacity: 0, y: -100}}
            transition={{duration: 1.5}}
            className='my-20 text-center text-4xl'>
                Technologies
        </motion.h2>

        <motion.div 
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: -100}}
            transition={{duration: 1.5}}
            className='flex flex-wrap items-center justify-center gap-4'>
                <motion.div 
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-4 border-entural-800 p-4'>
                        <RiReactjsLine className='text-7xl text-cyan-400'/>
                </motion.div>

                <motion.div 
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-4 border-entural-800 p-4'>
                        <SiMongodb className='text-7xl text-green-400'/> 
                </motion.div>

                <motion.div 
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-4 border-entural-800 p-4'>
                        <BiLogoPostgresql className='text-7xl text-sky-600'/>
                </motion.div>

                <motion.div 
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-4 border-entural-800 p-4'>
                        <FaNodeJs className='text-7xl text-green-600'/>
                </motion.div>

                <motion.div 
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-4 border-entural-800 p-4'>
                        <SiPytorch className='text-7xl text-orange-500'/>
                </motion.div>

                <motion.div 
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-4 border-entural-800 p-4'>
                        <SiCplusplus className='text-7xl text-indigo-400'/>
                </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies