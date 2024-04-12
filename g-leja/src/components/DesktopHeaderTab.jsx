import React, { useState } from 'react'

function DesktopHeaderTab({idx, keyword, options}) {
  
  return (
    <div onMouseEnter={() => tabHover(idx, keyword)} className='group cursor-pointer px-2 py-1'>
      <p className='group-hover:text-gleja-100 text-left font-medium font-inter'>{keyword}</p>
      <div className='hidden transition-all group-hover:block absolute z-10 pt-16 left-0 right-0 bg-gradient-to-b from-transparent to-orange-100 from-[90%] '>
        <div className='flex px-16 justify-between'>
         { options.map(item => <p>{item}</p>) }
        </div>
      </div>

    </div>
  )
}

export default DesktopHeaderTab;