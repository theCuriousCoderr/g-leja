import React from 'react'

function SideNavBar({setSideNav}) {
  return (
    <div  className="absolute z-20 w-full h-screen bg-orange-500 bg-opacity-50 backdrop-blur-md">
        <div className='absolute w-2/3 h-full bg-white right-0 slide-in-right flex flex-col items-end p-5 '>
            <div onClick={() => setSideNav("close")} className='size-10 bg-yellow-500'></div>

        </div>
    </div>
  )
}

export default SideNavBar