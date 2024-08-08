import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'

// use 'text-<color>-400' to replace colors of icons
const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <h2 className='my-20 text-center text-4xl'>Technologies</h2>
        <div className='flex flex-wrap items-center justify-center gap-4'>
            <div className='rounded-2xl border-4 border-entural-800 p-4'>
                <RiReactjsLine className='text-7xl text-cyan-400'/>
            </div>
            <div className='rounded-2xl border-4 border-entural-800 p-4'>
                <RiReactjsLine className='text-7xl'/> 
            </div>
            <div className='rounded-2xl border-4 border-entural-800 p-4'>
                <RiReactjsLine className='text-7xl text-green-400'/>
            </div>
            <div className='rounded-2xl border-4 border-entural-800 p-4'>
                <RiReactjsLine className='text-7xl text-cyan-400'/>
            </div>
            <div className='rounded-2xl border-4 border-entural-800 p-4'>
                <RiReactjsLine className='text-7xl text-cyan-400'/>
            </div>
        </div>
    </div>
  )
}

export default Technologies