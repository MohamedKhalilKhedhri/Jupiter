import React from 'react'

function Notification({href,children}) {
    //New version of Mercury is out!
  return (
    <div className='py-1 px-4 border border-stone-400 flex gap-3 items-center text-xs font-semibold rounded-full whitespace-nowrap'>
        <p className='text-stone-500 dark:text-stone-400'>{children}</p>
        <a href={href} className='dark:text-white'>Read more -&gt;</a>
    </div>
  )
}

export default Notification