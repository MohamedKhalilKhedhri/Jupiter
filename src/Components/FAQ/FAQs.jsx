import React, { useState } from 'react'


function FAQs() {
  const [open, setOpen] = useState(null)

  return (
   <div className='mt-14 lg:p-20 md:p-14 sm:p-8 p-4'>
     <h1 className='lg:text-3xl md:text-2xl text-xl font-semibold text-center dark:text-white'>Questions and answers</h1>
     <div className='mt-10 flex flex-col items-center'>
      <FAQ  question={'Is Jupiter easy to customise?'} currentOpen={open} open={setOpen} index={0}> Some text here </FAQ>
      <FAQ  question={'Is Jupiter optimized for search engines?'} currentOpen={open} open={setOpen} index={1}> Some text here</FAQ>
      <FAQ  question={'How does Jupiter compare to no-code tools?'} currentOpen={open} open={setOpen} index={2}> Some text here</FAQ>
      <FAQ  question={'Why not just coding a website yourself?'} currentOpen={open} open={setOpen} index={3}> Some text here</FAQ>
      <FAQ  question={'Can I get a refund if I don\'t like it?'} currentOpen={open} open={setOpen} index={4}> Some text here</FAQ>
      <FAQ  question={'What features will be added in the future?'} currentOpen={open} open={setOpen} index={5}> Some text here</FAQ>
    </div>
   </div>
  )
}

export default FAQs

function FAQ({ question, children, currentOpen, open, index }) {
  return (
    <div className=' lg:w-[700px]  w-full border-b border-stone-300 cursor-pointer transition-all duration-150 py-4 bg-white dark:bg-black'  onClick={() => open(currentOpen === index ? null : index)}>
      <p className='flex items-center justify-between dark:text-white' >{question} <svg xmlns="http://www.w3.org/2000/svg" className='size-5 dark:fill-white' style={{rotate: currentOpen === index ? "180deg" :"0deg" , transition:"0.5s ease"}} viewBox="0 0 448 512"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg></p>
      {currentOpen === index && (
          <p  className='p-2 dark:text-stone-500'>{children}</p>
        )}
    
    </div>
  )
}