import React from 'react'
import HeroContent from './HeroContent'
const Herosection = () => {
  return (
    <div className='relative flex flex-col h-full w-full mb-10 '>
      <video 
      loop
      autoPlay
      muted
      className='rotate-180 absolute top-[-300px] left-0  w-full h-[60%] md:h-full object-cover
      
      invert dark:invert-0 dark:hue-rotate-[0deg]  hue-rotate-[175deg] contrast-[115%] dark:contrast-[100%] 
      
      ' 
      >
        <source src='/blackhole.webm' type='video/webm' />
      </video>
      <HeroContent/>

    </div>
  )
}

export default Herosection