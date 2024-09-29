import React from 'react'
import Notification from './Notification'
import {  motion } from 'framer-motion'
function MainSection() {

        const animation = {
                hidden: { opacity: 0,scale:0.7 },
                show: {
                  opacity: 1,
                  scale : 1,
                  
                }
              };
              
  return (
    <section className='lg:p-20 md:p-14 sm:p-8 p-4 mt-16 flex flex-col items-center  gap-10 bg-white dark:bg-black'>
            <Notification href={"#"}>
                New version of Mercury is out!
            </Notification>
            <motion.h1 initial="hidden" animate="show" variants={animation} transition ={{duration:0.4,ease:"easeOut"}} className='font-semibold lg:text-8xl md:text-7xl sm:text-6xl text-5xl  text-center bg-clip-text bg-gradient-to-r dark:from-white dark:to-stone-500 from-black to-stone-700 text-transparent'> Give your big idea the <br /> Website it deserves</motion.h1>
            <motion.h1 initial="hidden" animate="show" variants={animation} transition ={{duration:0.4,ease:"easeOut",delay:0.1}} className='font-medium lg:text-xl md:text-lg sm:text-base text-sm text-center text-stone-600 dark:text-stone-500'>Quality landing page built with React, Shadcn and Tailwind <br /> that you can copy/paste into your project.</motion.h1>

            <div  className='flex gap-2'>
                 <button  area-label="Live preview" title="Live preview" className='hover:bg-white hover:text-black hover:dark:bg-black hover:dark:text-white transition-all border hover:border-stone-800 hover:dark:border-stone-300  py-2 px-5 bg-black text-white dark:text-black dark:bg-white rounded-md '>
                        Live preview
                </button>

                <button area-label="Github" title="Github" className=' rounded-md border-stone-300 border-2 py-1 px-5 dark:shadow-inner dark:border-1  dark:hover:bg-stone-800 hover:bg-stone-100 dark:shadow-stone-500 dark:text-white'>
                        Github
                </button>
             
            </div>
    </section>
  )
}

export default MainSection