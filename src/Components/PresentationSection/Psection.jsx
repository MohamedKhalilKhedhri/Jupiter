import React, { useContext } from 'react'
import Globe from "../../assets/Globe.svg"
import Ripple from "../../assets/Ripple.svg"
import Tiles from "../../assets/Tiles.svg"
import Chat from "../../assets/Chat.svg"
import DarkGlobe from "../../assets/DarkGlobe.svg"
import DarkRipple from "../../assets/DarkRipple.svg"
import DarkTiles from "../../assets/DarkTiles.svg"
import DarkChat from "../../assets/DarkChat.svg"
import { ThemeContext } from '../../Context/ThemeContext'
import { motion } from 'framer-motion'

function PSection() {
  const {isdarkMode} = useContext(ThemeContext);
  return (
    <section className='lg:p-20 md:p-14 sm:p-8 p-4  mt-14 bg-white dark:bg-black'>
        <h1 className='lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-semibold mb-14 dark:text-white'>Build a better website, faster.</h1>
        <div className='grid lg:grid-cols-5 md:grid-cols-2 lg:gap-10 gap-8 grid-cols-1 '>
                <Pcard  className='lg:col-span-2 md:col-span-1' img={isdarkMode ? DarkGlobe : Globe} title={"100+ sections and components"} > Mercury is a modern, responsive, and accessible landing page template built with React, Tailwind, and Shadcn.</Pcard>
                <Pcard  className='lg:col-span-3 md:col-span-1' img={isdarkMode ? DarkRipple : Ripple} title={"You’re in control"} >This is not a component library. It's a collection of re-usable components that you can copy and paste into your apps.</Pcard>
                <Pcard  className='lg:col-span-3 md:col-span-1' img={isdarkMode ? DarkTiles : Tiles} title={"Fits right into your stack"} >Built with bleeding-edge technologies that fit right into any react project.No bloat, no extra dependencies, no risk of conflicts.</Pcard>
                <Pcard  className='lg:col-span-2 md:col-span-1' img={isdarkMode ? DarkChat : Chat} title={"Data-agnostic"} >All the data are separate from presentation so you can edit it in seconds.Easily connect to a CMS of your choice.</Pcard>
        </div>
    </section>
  )
}

export default PSection




function Pcard({img,children,title,className}) {
    return (
      <div className={`border border-stone-300 rounded-md p-8 ${className} flex flex-col md:h-[500px] h-96 bg-neutral-50 dark:bg-neutral-900 dark:border-neutral-600  dark:text-white`} >
          <h1 className='text-2xl font-semibold'>{title}</h1>
          <p className='text-base font-normal text-stone-500'>{children}</p>
         <div className='flex-1'
          style={{
            backgroundImage: `url(${img})`,
            backgroundPosition: '50% 100%',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat'
        }}>

         </div>
          
      </div>
    )
  }
