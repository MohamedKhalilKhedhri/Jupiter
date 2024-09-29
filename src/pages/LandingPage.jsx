import React from 'react'
import Tsection from '../Components/ToolsSection/Tsection'
import Psection from '../Components/PresentationSection/Psection'
import Features from '../Components/Features/Features'
import Quality from '../Components/QualitySection/Quality'
import Reviews from '../Components/reviews/Reviews'
import FAQs from '../Components/FAQ/FAQs'
import ScreenShot from '../Components/Screenshot/ScreenShot'
import MainSection from '../Components/mainSection/mainSection'

function LandingPage() {
  return (  
         <>
            <MainSection />
            <ScreenShot />
            <Tsection />
            <Psection />
            <Features />
            <Quality />
            <Reviews />
            <FAQs />
            <div className='lg:p-20 md:p-14 sm:p-8 p-4  mt-14 flex flex-col items-center gap-12 bg-white dark:bg-black'>
                <h1 className='lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-semibold text-center dark:text-white'>Start building</h1>
                <div className='flex gap-2'>
                        <button area-label="live preview" title='live preview' className=' hover:bg-white hover:text-black hover:dark:bg-black hover:dark:text-white transition-all border hover:border-stone-800 hover:dark:border-stone-300   py-2 px-5 bg-black text-white dark:text-black dark:bg-white rounded-md '>
                            Live preview
                    </button>

                    <button  area-label="github" title='github' className=' rounded-md border-stone-300 border-2 py-1 px-5 dark:shadow-inner dark:border-1 dark:shadow-stone-500 dark:text-white'>
                            Github
                    </button>
                </div>
            </div>
        </>
  )
}

export default LandingPage