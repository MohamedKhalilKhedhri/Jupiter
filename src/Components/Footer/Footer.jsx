import React, { useContext } from 'react'
import logo from "../../assets/light_logo.svg"
import DarkLogo from "../../assets/DarkLogo.svg"
import { ThemeContext } from '../../Context/ThemeContext'
function Footer() {
    const {isdarkMode} = useContext(ThemeContext)
  return (
    <footer className='lg:px-20 lg:pt-20 md:px-14 md:pt-14 sm:px-8 sm:pt-8 px-4 pt-4 mt-16 w-full flex flex-col justify-between gap-10 bg-white dark:bg-black text-black dark:text-white' style={{ boxShadow:"0px -100px 155px -125px rgba(253,186,116,0.75)"}}>
      <div className='w-full flex lg:gap-40 gap-20  items-start '>
            <div className='flex gap-1 items-center place-items-start'>
                 <img src={isdarkMode ? DarkLogo : logo} alt='logo' className='size-6 ' />
                <h1 className='text-3xl '>Jupyter</h1>
            </div>
            <div className='flex-1 flex justify-start lg:gap-36 md:gap-16 sm:gap-10 gap-6 flex-wrap'>
                <div className='flex flex-col gap-2'>       
                     <h1 className='text-sm font-semibold'>Product</h1>
                     <a href='#'>ChangeLog</a>
                     <a href='#'>Documentation</a>
                </div>
                <div className='flex flex-col gap-2'>       
                     <h1 className='text-sm font-semibold'>Company</h1>
                     <a href='#'>About</a>
                     <a href='#'>Careers</a>
                     <a href='#'>Blog</a>
                </div>
                <div className='flex flex-col gap-2'>       
                     <h1 className='text-sm font-semibold'>Contact</h1>
                     <a href='#'>Github</a>
                     <a href='#'>Discord</a>
                     <a href='#'>Twitter</a>
                </div>
            </div>
      </div>
         <div className='w-full flex justify-between py-3 border-t gap-2 border-stone-300 dark:border-stone-700'>
                <p className='text-stone-600'>© 2024 Mikołaj Dobrucki. All rights reserved.</p>
                <div className='flex gap-2'>
                    <a href='#'>Privacy Policy</a>
                    <a href='#'>Terms of service</a>
                </div>
          </div>
    </footer>
  )
}

export default Footer