import React, { useContext, useEffect, useRef, useState } from 'react'
import { ThemeContext } from '../../Context/ThemeContext';

function Navbtns() {
  const {isdarkMode,toggleMode} = useContext(ThemeContext);
  const [btnsDropped,setBtnsDropped] = useState(false);



  const navBtnsRef = useRef();

  useEffect(() => {
      const handleOutsideClick = (event) => {
          if (btnsDropped && navBtnsRef.current && !navBtnsRef.current.contains(event.target)) {
            setBtnsDropped(false);
          }}
          document.addEventListener('mousedown', handleOutsideClick);

          return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
          };
        }, [btnsDropped, navBtnsRef]);
  return (

    <div className=' relative w-fit' ref={navBtnsRef}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='size-4 fill-black dark:fill-white md:hidden inline-block' onClick={()=>{setBtnsDropped(!btnsDropped)}}><path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/></svg>
     
          <div className={`gap-2 items-center md:flex ${btnsDropped ? "flex" : "hidden"} md:flex-row flex-col  md:static fixed top-16 right-0 md:bg-none bg-white dark:bg-black md:border-none border border-stone-100 dark:border-stone-900 md:p-0 p-3`}>
              <button area-label="Sign In" title="Sign In" className=' border-none  text-xs md:text-base md:py-1 md:px-5 py-1 px-2 '>
                      Sign in
              </button>
              <button  area-label="Live preview" title="Live preview" className=' hover:bg-white hover:text-black hover:dark:bg-black hover:dark:text-white transition-all border hover:border-stone-800 hover:dark:border-stone-300   text-xs md:text-base  md:py-2 md:px-5 py-1 px-2 bg-black text-white dark:bg-white dark:text-black rounded-md '>
                      Live preview
              </button>
              <div className='  ml-2 rounded-md cursor-pointer  flex items-center justify-center size-4 ' onClick={()=>{toggleMode()}}>
              {
                isdarkMode ? (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='size-4  fill-white'><path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"/></svg>
                ):
                (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className='size-4  fill-black'><path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"/></svg>
                )
              }
              </div>
            </div>
    </div>
  )
}

export default Navbtns