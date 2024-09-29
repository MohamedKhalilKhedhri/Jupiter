import React from 'react'

function DropdownContent({ closeNav }) {
  return (
    <div className="lg:w-48 w-full bg-white p-6 lg:shadow-xl dark:bg-black dark:text-white lg:dark:border lg:dark:border-stone-900">
      <div className="mb-3 space-y-3">
        <h3 className="font-semibold">DropDown</h3>
        <a href="#1" onClick={() => closeNav(false)} className="block text-sm hover:underline">
            Link 1
        </a>
        <a href="#2" onClick={() => closeNav(false)} className="block text-sm hover:underline">
        Link 2
        </a>
    
        <a href="#3" onClick={() => closeNav(false)} className="block text-sm hover:underline">
        Link 3
        </a>
        <a href="#4" onClick={() => closeNav(false)} className="block text-sm hover:underline">
         Link 4
        </a>
        <a href="#5" onClick={() => closeNav(false)} className="block text-sm hover:underline">
          Link 5
        </a>
      </div>
     
    </div>
  )
}

export default DropdownContent