import React, { useContext } from 'react'
import lightSS from "../../assets/screenshotLight.jpg"
import darkSS from "../../assets/screenshotDark.jpg"
import { ThemeContext } from '../../Context/ThemeContext'

function ScreenShot() {

  const {isdarkMode} = useContext(ThemeContext);
  return (
    <section className='lg:p-20 md:p-14 sm:p-8 p-4 bg-white dark:bg-black relative'>
        <img src={isdarkMode ? darkSS : lightSS} alt='screenshot' className=' w-full ' style={{ boxShadow:"0px -100px 155px -125px rgba(253,186,116,0.75)"}} />
        <div className='inset-0 absolute m-20 bg-gradient-to-b from-transparent to-white dark:from-transparent dark:to-black'></div>
    </section>
  )
}

export default ScreenShot