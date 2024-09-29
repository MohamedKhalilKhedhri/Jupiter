import React, { useState } from 'react'
import {motion , AnimatePresence} from "framer-motion"



function FlyOutLink({FlyOutContent,children,href,index,drop,dropped,closeNav}) {

    
    const showFly = (dropped === index) && FlyOutContent;
  return (
    <>
        <div className='lg:inline-block w-fit h-fit relative  hidden' onMouseOver={()=>{drop(index)}} onMouseOut={()=>drop(null)}>
            <a href={href} className='flex items-center gap-2 whitespace-nowrap'>
                {children}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='w-3 h-3 inline-block dark:fill-white'><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
            </a>

                <AnimatePresence mode='wait'>
                    {showFly && (

                        <motion.div initial={{opacity:0,y:50}} animate={{opacity:1,y:0}} exit={{ opacity: 0, y: 15 }}   transition={{ duration: 0.3, ease: "easeOut" }} className='absolute -left-1/2 -translate-x-1/2 '>
                            
                            <FlyOutContent />
                        </motion.div>
                    )}
                </AnimatePresence>
         </div>
         <div className='lg:hidden block'>
            <div className='w-full border-b border-stone-300 cursor-pointer transition-all duration-150 py-4 bg-white dark:bg-black'  onClick={() => drop(dropped === index ? null : index)}>
                <p className='flex items-center justify-between dark:text-white' >{children} <svg xmlns="http://www.w3.org/2000/svg" className='size-5 dark:fill-white' style={{rotate: dropped === index ? "180deg" :"0deg" , transition:"0.5s ease"}} viewBox="0 0 448 512"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg></p>
                {
                    showFly &&(
                        <FlyOutContent closeNav={closeNav} />
                    )
                }
            
            </div>
         </div>
    </>
  )
}

export default FlyOutLink

