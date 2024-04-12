import React, { useState } from 'react'

function DesktopHeaderTab({idx, keyword, options}) {
  
  return (
    <div onMouseEnter={() => tabHover(idx, keyword)} className='relative group cursor-pointer px-2 py-1'>
      <p className='group-hover:text-gleja-100 text-left font-medium font-inter bg-red-40'>{keyword}</p>
      <div className='hidden dropdown transition-all group-hover:block absolute top-5 z-10 pt-16 left-2 min-w-28 bg-transparent '>
        <ul className='relative dropdown text-white -mt-10 flex flex-col bg-gleja-200 rounded-lg p-5 overflow-hidden'>
          <div className='absolute -z-10 left-0 top-0 w-full h-full bg-black bg-opacity-10 backdrop-blur-lg'></div>
        { options.map(item => <li>{item}</li>) }
        </ul>

      </div>

    </div>
  )
}

export default DesktopHeaderTab;